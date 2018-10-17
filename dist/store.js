'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = exports.Store = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactContext2 = require('create-react-context');

var _createReactContext3 = _interopRequireDefault(_createReactContext2);

var _get = require('./get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _createReactContext = (0, _createReactContext3.default)({}),
    Provider = _createReactContext.Provider,
    Consumer = _createReactContext.Consumer;

var Store = exports.Store = Provider;

Store.propTypes = {
  children: _propTypes2.default.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  content: _propTypes2.default.object
};

Store.defaultProps = {
  content: undefined,
  getContent: undefined
};

var Content = function Content(_ref) {
  var children = _ref.children,
      Component = _ref.as,
      from = _ref.from,
      defaultValue = _ref.default,
      props = _objectWithoutProperties(_ref, ['children', 'as', 'from', 'default']);

  return _react2.default.createElement(
    Consumer,
    null,
    function (content) {
      var getContent = (0, _get2.default)(content);

      (0, _warning2.default)(!(children && Component), 'You should not use <Content as> and <Content children> in the same component, <Content children> will be ignored');

      if (typeof Component !== 'undefined') {
        return _react2.default.createElement(
          Component,
          props,
          getContent(from, defaultValue)
        );
      }
      if (typeof children === 'function') {
        return children(getContent, content);
      }

      return null;
    }
  );
};

Content.displayName = 'Content';
exports.Content = Content;
Content.propTypes = {
  children: _propTypes2.default.func,
  as: _propTypes2.default.node,
  from: _propTypes2.default.string,
  default: _propTypes2.default.string
};

Content.defaultProps = {
  children: undefined,
  as: undefined,
  from: undefined,
  default: undefined
};