import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  externalErrors: {},
  model: {
    group: null
  },
  groups: [
    { label: 'Group 1', value: 1 }
  ],
  rules: {
    name: 'required'
  },

  actions: {
    populateExternalErrors() {
      this.set('externalErrors', {
        name: 'mustBeAlpha',
        notes: 'tooShort',
        group: 'tooShort'
      });
    },
    translate(msg) {
      return {
        "tooShort": "foo",
        "mustBeAlpha": 'bar'
      }[msg];
    }
  }
});
