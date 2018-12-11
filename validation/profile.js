const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  // Anything that is required should be here

  data.email = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to be between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle is required';
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = 'Status field is required';
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Skills field is required';
  }

  // Format social into URLs

  if (!isEmpty(data.website))
    if (!Validator.isURL(data.website)) {
      erros.website = 'Not a valid URL';
    }

  if (!isEmpty(data.linkedin))
    if (!Validator.isURL(data.linkedin)) {
      erros.linkedin = 'Not a valid URL';
    }

  if (!isEmpty(data.twitter))
    if (!Validator.isURL(data.twitter)) {
      erros.twitter = 'Not a valid URL';
    }

  if (!isEmpty(data.instagram))
    if (!Validator.isURL(data.instagram)) {
      erros.instagram = 'Not a valid URL';
    }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
