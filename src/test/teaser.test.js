import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdaptor from '@wojtekmaj/enzyme-adapter-react-17';
import { expect, describe, test } from '@jest/globals';

import Teaser from '../components/teaser';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

describe('teaser', () => {
  test('renders the component with correctly', () => {
    const CONTENT_IMAGE = 'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/Now/2019/03/07/54515/HERO.jpg';
    const CONTENT_SUMMARY = 'On a rainy day in Blackpool, the Duke and Duchess of Cambridge brought some brightness.';
    const CONTENT_TITLE = 'Duchess Catherine just hinted where the next Cambridge family holiday will be';
    const URL = 'https://www.nowtolove.com.au/royals/briti';

    const TEASER = {
      contentImageUrl: CONTENT_IMAGE,
      contentSummary: CONTENT_SUMMARY,
      contentTitle: CONTENT_TITLE,
      url: URL,
    };

    const wrapper = shallow(<Teaser teaser={TEASER} />);
    const TEASER_IMAGE = wrapper.find('.teaser__img');
    const TEASER_TITLE = wrapper.find('.teaser__title');
    const TEASER_SUMMARY = wrapper.find('.teaser__summary');
    const TEASER_LINK = wrapper.find('.teaser__anchor');

    expect(TEASER_IMAGE.props().src).toEqual(CONTENT_IMAGE);
    expect(TEASER_TITLE.text()).toEqual(CONTENT_TITLE);
    expect(TEASER_SUMMARY.text()).toEqual(CONTENT_SUMMARY);
    expect(TEASER_LINK.props().href).toEqual(URL);
  });
});
