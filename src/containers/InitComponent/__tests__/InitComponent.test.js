import InitComponent from '../InitComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn().mockImplementationOnce((selector) => selector()),
  useDispatch: () => jest.fn().mockImplementation(),
}));

describe('InitComponent', () => {
  it('should render', () => {
    const wrapper = mount(
      <Router>
        <InitComponent />
      </Router>,
    );
    expect(wrapper).toBeDefined();
  });
});
