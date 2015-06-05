import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  findAll: function(store, type, sinceToken) {
    return Ember.A();
  },
  findQuery: function(store, type, query) {
    var url = 'http://backstage-api.openstate.eu/v0/journalistiek/search';

    return Ember.$.post(url, JSON.stringify(query), null, 'json');
  }
});
