import Ember from 'ember';

export default Ember.Controller.extend({
  needs:    ['application'],
  qry:      Ember.computed.alias('controllers.application.qry'),
  doSearch: function() {
    this.set('model', this.store.find('journalistiek', { query: this.get('qry') }));
  }.observes('qry')
});
