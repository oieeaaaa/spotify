import React from 'react';
import { shallow } from 'enzyme';

import DiscoverItem from './DiscoverItem';
import { findByTestAtrr } from '../../../../../utils';

const setUp = (props = {}) => {
  const component = shallow(<DiscoverItem {...props} />);
  return component;
};

describe('Discover Item Component', () => {
  let component;
  let wrapper;

  beforeEach(() => {
    component = setUp();

    const props = {
      images: [{ url: '' }],
      name: 'Name',
    };
    wrapper = shallow(<DiscoverItem {...props} />);
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'discover-item');
    expect(wrapper.length).toBe(1);
  });

  it('Should render an image as background', () => {
    const imageUrl = findByTestAtrr(wrapper, 'discover-item-img');
    expect(imageUrl.length).toBe(1);
  });

  it('Should render a name', () => {
    const name = findByTestAtrr(wrapper, 'discover-item-name');
    expect(name.length).toBe(1);
  });
});
