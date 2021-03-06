import Ember from 'ember';

export default Ember.Object.extend({
  validate(value, validator) {
    let length = parseInt(validator.get('arguments')[0]);
    if (value && value.length > length) {
      return {
        message: 'tooLong',
        replacements: {
          length
        }
      };
    }
  }
});
