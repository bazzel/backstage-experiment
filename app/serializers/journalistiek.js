import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    // `findAll` returns an empty array.
    if (payload.length === 0) {
      return payload;
    }

    var hits = payload.hits.hits.map(function(hit) {
      return hit._source;
    });
    payload = {};
    payload[type.modelName] = hits;
    return this._super(store, type, payload);
  },
  normalize: function(typeClass, hash, prop) {
    hash.id = hash.Id;

    return this._super(typeClass, hash, prop);
  },
  keyForAttribute: function(attr, method) {
    return Ember.String.classify(attr);
  },
  extractMeta: function(store, typeClass, payload) {
    if (payload && payload.hits) {
      store.setMetadataFor(typeClass.modelName, { total: payload.hits.total });
    }
  }
});
