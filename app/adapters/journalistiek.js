import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  findAll: function(store, type, sinceToken) {
    var url = 'http://backstage-api.openstate.eu/v0/journalistiek/search',
      query = {
         query: "klokkenluiders",
         size: 5
      };

    return Ember.$.post(url, JSON.stringify(query), null, 'json');
  }
});
