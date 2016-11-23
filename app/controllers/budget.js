import Ember from 'ember';

export default Ember.Controller.extend({
  getOutflow(budgetCategoryId) {
    console.log(this);
  },

  getBalance(budgetCategoryId) {
    return budgetCategoryId.funded - this.getOutflow(budgetCategoryId)
  },
});
