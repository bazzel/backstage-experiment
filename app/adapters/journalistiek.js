import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  findQuery: function(store, type, query) {
    var url = 'http://backstage-api.openstate.eu/v0/journalistiek/search',
        data = Ember.merge(query, { size: 5 });

    return Ember.$.post(url, JSON.stringify(data), null, 'json');
  }
});
