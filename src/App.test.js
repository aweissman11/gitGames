import React from 'react';
import { shallow } from 'enzyme';
import { render } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import { App } from './App';
import MainPage from './containers/MainPage';

describe('App', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });


})
