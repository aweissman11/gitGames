import React from 'react';
import { shallow } from 'enzyme';

import { CommitsBarChart } from '../index';

describe('CommitsBarChart', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CommitsBarChart
      loadingCommits={{loadingCommits: false, message: 'hi'}}
      commitsData={{hi: 1, hello: 2, goodbye: 3}}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
})
