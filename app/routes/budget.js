import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      const budgetObjects = [];
      const budgetCategories = [{
        id: 0,
        name: 'Bills',
        funded: '1000',
      }, {
        id: 1,
        name: 'Entertainment',
        funded: '150',
      }, {
        id: 2,
        name: 'Savings',
        funded: '8000',
      }];

      budgetCategories.forEach(data => budgetObjects.pushObject(
        this.store.createRecord('budget-category', data)
      ))

      return budgetObjects;
    }
});
