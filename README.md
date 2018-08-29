# React Global Store

A simple global state solution for React.

## About this project

This library provides components which can be used to implement a simple
global state store in your React project, without the complexity of
frameworks like Redux.

Built on the [React Context API](https://reactjs.org/docs/context.html), with
[Create React Context](https://github.com/jamiebuilds/create-react-context) providing
support for React 15.

## Usage

### Install

With NPM:

```bash
npm install react-global-store
```

Or, with Yarn:

```bash
yarn add react-global-store
```

Then, in your React application, you can import and use the two components:

### `Store` Component

The `<Store>` component should wrap your application, and takes a `value` prop.
This prop is an object containing all the content you would like to make available
throughout your application.

```javascript
import { Store } from 'react-global-store';

const content = {
  component: {
    text: 'Easy content management in React',
  },
};

const App = () => (
  <Store value={content}>
    <Component />
  </Store>
);
```

### `Content` Component

Then, you can wrap any bit of your application with the `<Content` component in order
to access that content. The `<Content>` component accepts the following props:

- `as`: string used to choose what HTML tag to render the content in.
- `from`: string used to pass the object key to the piece of content to use.
- `default`: fallback content to be used if no content found with `from` key.

For example:

```javascript
import { Content } from 'react-global-store';

const Component = () => (
  <Content
    as="p"
    from="component.text"
    default="Simple content management"
  />
);
```

Alternatively, the `<Content>` component takes a function as it's child, with the content
made available as an argument. To access the content, you call the argument function -
with the content key as the first argument, and then a fallback default as the second argument:

```javascript
const Component = () => (
  <Content>
    {content => (
      <p>{content('component.text', 'Simple content management')}</p>
    )}
  </Content>
);
```

## Running locally and testing

To run an interactive demo locally, you can run:

```
yarn run storybook
```

This will open a collection of demos on a local port.

## Code Architecture

Check out the [`fe-boilerplate-generator@7.8.1`
docs](https://github.com/domain-group/fe-boilerplate-generator/tree/v7.8.1#code-architecture)
for info on the repo layout, structure and meaning.

## Changes and history

See [CHANGELOG.md](./CHANGELOG.md).

## Thanks

Big thanks to [Jonathan Haines](https://github.com/BarryThePenguin), the original creator of this project.
