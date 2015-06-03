import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    var hits = payload.hits.hits.map(function(hit) {
      return hit._source;
    });
    // TODO: extract 'journalistiek'
    return this._super(store, type, { journalistiek: hits });
  },
  normalize: function(typeClass, hash, prop) {
    hash.id = hash.Id;

    return this._super(typeClass, hash, prop);
  },
  keyForAttribute: function(attr, method) {
    return Ember.String.classify(attr);
  }
});
