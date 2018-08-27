import get from 'lodash/get';
import has from 'lodash/has';
import warning from 'warning';

const loggedWarnings = {};

export default (content) => (path, defaultValue) => {
  if (process.env.NODE_ENV !== 'production') {
    const message = `${path} was not found in content`;

    if (!has(loggedWarnings, message)) {
      warning(has(content, path), message);
      loggedWarnings[message] = true;
    }
  }

  return get(content, path, defaultValue);
};
