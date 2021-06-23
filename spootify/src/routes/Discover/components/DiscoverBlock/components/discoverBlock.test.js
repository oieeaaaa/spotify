import React from 'react';
import { shallow } from 'enzyme';

import DiscoverBlock from './DiscoverBlock';
import { findByTestAtrr } from '../../../../../utils';

const setUp = (props = {}) => {
  const component = shallow(<DiscoverBlock {...props} />);
  return component;
};

describe('Discover Block Component', () => {
  let component;
  let wrapper;

  beforeEach(() => {
    component = setUp();

    const props = {
      text: '',
      id: '',
      data: [],
      imagesKey: '',
    };
    wrapper = shallow(<DiscoverBlock {...props} />);
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'discover-block');
    expect(wrapper.length).toBe(1);
  });

  it('Should render header', () => {
    const header = findByTestAtrr(wrapper, 'discover-block-header');
    expect(header.length).toBe(1);
  });

  it('Should render a row', () => {
    const row = findByTestAtrr(wrapper, 'discover-block-row');
    expect(row.length).toBe(1);
  });
});
