import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://backstage-api.openstate.eu/v0/journalistiek/search',
      query = {
         query: "klokkenluiders",
         size: 100
      };

    return Ember.$.post(url, JSON.stringify(query), null, 'json');
  }
});
