import React from 'react';
import warning from 'warning';
import PropTypes from 'prop-types';
import get from './get';

const { Provider, Consumer } = React.createContext({});

export const Store = Provider;

Store.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.object,
};

Store.defaultProps = {
  content: undefined,
  getContent: undefined,
};

export const Content = ({
  children,
  as: Component,
  from,
  default: defaultValue,
  ...props
}) => (
  <Consumer>
    {(content) => {
      const getContent = get(content);

      warning(
        !(children && Component),
        'You should not use <Content as> and <Content children> in the same component, <Content children> will be ignored',
      );

      if (typeof Component !== 'undefined') {
        return (
          <Component {...props}>{getContent(from, defaultValue)}</Component>
        );
      }
      if (typeof children === 'function') {
        return children(getContent, content);
      }

      return null;
    }}
  </Consumer>
);

Content.propTypes = {
  children: PropTypes.func,
  as: PropTypes.node,
  from: PropTypes.string,
  default: PropTypes.string,
};

Content.defaultProps = {
  children: undefined,
  as: undefined,
  from: undefined,
  default: undefined,
};
