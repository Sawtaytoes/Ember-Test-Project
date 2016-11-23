import Ember from 'ember';

export default Ember.Controller.extend({
  willRender() {
    console.log(this.store);
  }

  getOutflow(budgetCategoryId) {
    console.log(this);
  },

  getBalance(budgetCategoryId) {
    return budgetCategoryId.funded - this.getOutflow(budgetCategoryId)
  },
});
