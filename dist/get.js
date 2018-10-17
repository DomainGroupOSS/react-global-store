'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _has = require('lodash/has');

var _has2 = _interopRequireDefault(_has);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggedWarnings = {};

exports.default = function (content) {
  return function (path, defaultValue) {
    if (process.env.NODE_ENV !== 'production') {
      var message = path + ' was not found in content';

      if (!(0, _has2.default)(loggedWarnings, message)) {
        (0, _warning2.default)((0, _has2.default)(content, path), message);
        loggedWarnings[message] = true;
      }
    }

    return (0, _get2.default)(content, path, defaultValue);
  };
};