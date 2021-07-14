import { expect, describe, test } from '@jest/globals';
import EnzymeAdaptor from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import App from '../App';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

describe('App', () => {
  test('renders the App component without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
