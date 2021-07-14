import { expect, describe, test } from '@jest/globals';
import EnzymeAdaptor from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import Advertisement from '../components/advertisement';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

describe('Advertisement', () => {
  test('renders the component correctly', () => {
    const ADVERTISEMENT_IMAGE = 'http://www.images.com/HERO.jpg';
    const wrapper = shallow(<Advertisement image={ADVERTISEMENT_IMAGE} />);
    const ADVERTISEMENT = wrapper.find('.banner__img');
    expect(ADVERTISEMENT.props().src).toEqual(ADVERTISEMENT_IMAGE);
  });
});
