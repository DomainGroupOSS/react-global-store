import { Store, Content } from '../src';

const { mount } = enzyme;

const Calculator = () => (
  <div>
    <Content>
      {(content) => <p>{content('calculator.text', 'Buy your dream house')}</p>}
    </Content>
    <Content as="button" from="calculator.cta" default="Get a home loan" />
  </div>
);

describe('store.js', () => {
  describe('<Store/>', () => {
    it('should render without provider', () => {
      const wrapper = mount(<Calculator />);

      expect(wrapper.find('p')).to.have.text('Buy your dream house');
      expect(wrapper.find('button')).to.have.text('Get a home loan');
    });

    it('should render default value when content does not exist', () => {
      const content = {};

      const wrapper = mount(
        <Store value={content}>
          <Calculator />
        </Store>,
      );

      expect(wrapper.find('p')).to.have.text('Buy your dream house');
      expect(wrapper.find('button')).to.have.text('Get a home loan');
    });

    it('should render with provider', () => {
      const content = {
        calculator: {
          cta: 'Get pre-approval now!',
        },
      };

      const wrapper = mount(
        <Store value={content}>
          <Calculator />
        </Store>,
      );

      expect(wrapper.find('p')).to.have.text('Buy your dream house');
      expect(wrapper.find('button')).to.have.text('Get pre-approval now!');
    });
  });

  describe('<Content/>', () => {
    it('should render as component when both as and children are defined', () => {
      const wrapper = mount(
        <Content as="button" default="render component">
          {(content) => <p>{content('does.not.exist', 'render children')}</p>}
        </Content>,
      );

      expect(wrapper.find('p')).to.be.empty();
      expect(wrapper.find('button')).to.have.text('render component');
    });

    it('should render null when both as:undefined and children:undefined', () => {
      const wrapper = mount(<Content />);

      expect(wrapper).to.be.blank();
    });
  });
});
