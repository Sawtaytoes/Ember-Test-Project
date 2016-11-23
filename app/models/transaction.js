import DS from 'ember-data';

export default DS.Model.extend({
  account: DS.belongsTo('account'),
  amount: DS.attr('number'),
  budgetCategory: DS.belongsTo('budget-category'),
  date: DS.attr('string'),
  payee: DS.attr('string'),
});
