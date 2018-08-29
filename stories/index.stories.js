import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable import/no-extraneous-dependencies */

import { jsonStyle, contentStyle, headingStyle } from './style';
import { Store, Content } from '../src';
import InteractiveDemo from './demo';

const value = {
  cms: {
    demo: {
      text: 'Special content from store',
    },
  },
};

storiesOf('Content', module)
  .add('default', () => (
    <div>
      <pre style={jsonStyle}>{JSON.stringify(value, null, 2)}</pre>
      <p style={headingStyle}>The content is: </p>
      <Store value={value}>
        <Content as="div" from="cms.demo.text" default="Some fallback text" />
      </Store>
    </div>
  ))
  .add('with callback', () => (
    <div>
      <pre style={jsonStyle}>{JSON.stringify(value, null, 2)}</pre>
      <p style={headingStyle}>The content is: </p>
      <Store value={value}>
        <Content>
          {(content) => (
            <div style={contentStyle}>
              {content('cms.demo.text', 'Some fallback text')}
            </div>
          )}
        </Content>
      </Store>
    </div>
  ))
  .add('fallback example', () => (
    <div>
      <pre style={jsonStyle}>{JSON.stringify(value, null, 2)}</pre>
      <p style={headingStyle}>The content is: </p>
      <Store value={value}>
        <Content>
          {(content) => (
            <div style={contentStyle}>
              {content('cms.demo.wrong', 'Example of fallback content')}
            </div>
          )}
        </Content>
      </Store>
    </div>
  ))
  .add('interactive example', () => <InteractiveDemo value={value} />);
