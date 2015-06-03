import Ember from 'ember';

export default Ember.Controller.extend({
  qry: '',
  qryText: '',
  actions: {
    search: function() {
      this.set('qry', this.get('qryText'));
    }
  }
});
