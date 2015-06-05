import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs:    ['application'],
  qry:      Ember.computed.alias('controllers.application.qry'),
  hasMore: function() {
    return this.get('length') > 0 && this.get('length') < this.meta('total');
  }.property('@each'),
  from: function() {
    return this.get('length');
  }.property('@each'),
  meta: function(key) {
    return this.store.metadataFor('journalistiek')[key];
  },
  actions: {
    getMore: function() {
      if (this.get('hasMore')) {
        var ctrl = this;

        this.set('loadingMore', true);
        this.store.find('journalistiek', { query: this.get('qry'), from: this.get('from'), size: 10 }).then(function() {
          ctrl.set('loadingMore', false);
        });
      }
    }
  },
  doSearch: function() {
    this.store.find('journalistiek', { query: this.get('qry'), size: 10 });
  }.observes('qry')
});
