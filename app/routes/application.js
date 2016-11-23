import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      const accountObjects = [];
      const accounts = [{
        id: 0,
        name: 'Bank',
      }, {
        id: 1,
        name: 'PayPal',
      }];

      accounts.forEach(data => accountObjects.pushObject(
        this.store.createRecord('account', data)
      ))

      return accountObjects;
    }
});
