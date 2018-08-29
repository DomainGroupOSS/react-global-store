import React from 'react';
import PropTypes from 'prop-types';
import set from 'lodash/fp/set';
import { jsonStyle, contentStyle, headingStyle, inputStyle } from './style';
import { Store, Content } from '../src';

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.value;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState(set('cms.demo.text', target.value));
  }

  render() {
    return (
      <div>
        <input
          style={inputStyle}
          onChange={this.handleChange}
          placeholder="Write something here..."
        />
        <Store value={this.state}>
          <Content>
            {(get, content) => (
              <div>
                <p style={headingStyle}>The value is: </p>
                <pre style={jsonStyle}>{JSON.stringify(content, null, 2)}</pre>
                <p style={headingStyle}>This content is: </p>
                <div style={contentStyle}>
                  {get('cms.demo.text', 'default text content')}
                </div>
                <Content as="p" from="some.outer.text" />
              </div>
            )}
          </Content>
        </Store>
      </div>
    );
  }
}

Demo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object,
};

Demo.defaultProps = {
  value: undefined,
};

export default Demo;
