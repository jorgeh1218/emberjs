import Ember from 'ember';

export default Ember.Route.extend({
  service : Ember.inject.service('brick-warehouse'),
  model() {
      return this.get('service').getBricks();
  }
});
