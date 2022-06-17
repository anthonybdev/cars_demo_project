import React from 'react';
import Loader from '../Loader';
import { mount } from 'enzyme';

describe('Loader test', () => {
  it('should render', () => {
    const wrapper = mount(<Loader />);

    expect(wrapper).toBeDefined();
  });
});
