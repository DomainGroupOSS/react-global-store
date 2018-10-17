import proxyquire from 'proxyquire';

describe('get.js', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
    sandbox.resetBehavior();
  });

  it('should not warn in production', () => {
    const warning = sandbox.spy();
    process.env.NODE_ENV = 'production';

    const { default: get } = proxyquire('../src/get', {
      warning,
    });

    const getContent = get({});
    getContent('some', 'thing', 'content');

    expect(warning).to.not.have.been.called();
  });

  it('should warn in development', () => {
    const warning = sandbox.spy();
    process.env.NODE_ENV = 'development';

    const { default: get } = proxyquire('../src/get', {
      warning,
    });

    const getContent = get({});
    getContent('some', 'thing', 'content');

    expect(warning).to.have.been.called();
  });
});
