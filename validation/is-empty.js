const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).lenth === 0) ||
  (typeof value === 'string' && value.trim().length === 0);
