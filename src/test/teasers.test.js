import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdaptor from '@wojtekmaj/enzyme-adapter-react-17';
import {
  expect,
  describe,
  jest,
  test,
} from '@jest/globals';

import Teasers from '../components/teasers';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

describe('teasers', () => {
  test('renders the loader on initial load', () => {
    const initialStateForFirstUseStateCall = true;
    const initialStateForSecondUseStateCall = ['aa'];
    const initialStateForThirdUseStateCall = false;

    React.useState = jest
      .fn()
      .mockReturnValueOnce([initialStateForFirstUseStateCall, {}])
      .mockReturnValueOnce([initialStateForSecondUseStateCall, {}])
      .mockReturnValueOnce([initialStateForThirdUseStateCall, {}]);
    const wrapper = mount(<Teasers />);
    const LOADER = wrapper.find('.loader');
    const TEASER = wrapper.find('.teaserContainer');
    expect(wrapper.exists()).toBe(true);
    expect(LOADER.length).toBe(1);
    expect(TEASER.length).toBe(0);
  });

  test('renders the 2 articles', () => {
    const NUMBER_OF_TEASERS = 2;

    const TEASER_DATA = {
      id: 'NOW-54531',
      url: 'https://www.nowtolove.com.a',
      source: "Australian Women's Weekly",
      contentTitle: 'Queen Elizabeth has Instagrammed for the first time',
      contentSummary: 'Yass Queen!',
      contentImageUrl:
        'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/Now/2019/03/08/54531/Hero1.jpg',
      pageDateCreated: '2019-03-07T20:27:48.00Z',
    };
    const mockData = [];

    for (let i = 0; i < NUMBER_OF_TEASERS; i += 1) {
      mockData.push(TEASER_DATA);
    }

    const initialStateForFirstUseStateCall = false;
    const initialStateForSecondUseStateCall = mockData;
    const initialStateForThirdUseStateCall = false;

    React.useState = jest
      .fn()
      .mockReturnValueOnce([initialStateForFirstUseStateCall, {}])
      .mockReturnValueOnce([initialStateForSecondUseStateCall, {}])
      .mockReturnValueOnce([initialStateForThirdUseStateCall, {}]);
    const wrapper = mount(<Teasers />);
    const LOADER = wrapper.find('.loader');
    const TEASER = wrapper.find('.teaserContainer');
    expect(wrapper.exists()).toBe(true);
    expect(LOADER.length).toBe(0);
    expect(TEASER.length).toBe(NUMBER_OF_TEASERS);
  });
});
