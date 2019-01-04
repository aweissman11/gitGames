import React from 'react';
import { shallow } from 'enzyme';

import { CommitsBarChart } from '../index';

import { mockCommitsData } from '../__mocks__/mockCommitsData';

describe('CommitsBarChart', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CommitsBarChart
      loadingCommits={{loadingCommits: false, message: 'hi'}}
      commitsData={mockCommitsData}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot', () => {
    const mockLoadingCommits = {
      loadingCommits: true,
      message: 'is loading'
    }
    wrapper = shallow(<CommitsBarChart
                        languageData={{}}
                        loadingCommits={mockLoadingCommits}
                      />)
    expect(wrapper).toMatchSnapshot()
  })
  
  it('should get a weeks array', () => {

    expect(wrapper.instance().getWeeksArray(mockCommitsData)).toEqual(
      [{"Fri": 0, "Mon": 0, "Sat": 0, "Sun": 0, "Thurs": 0, "Tues": 0, "Wed": 0, "firstDay": "week of 12-31"}, {"Fri": 0, "Mon": 0, "Sat": 0, "Sun": 0, "Thurs": 0, "Tues": 0, "Wed": 0, "firstDay": "week of 01-07"}, {"Fri": 0, "Mon": 0, "Sat": 0, "Sun": 0, "Thurs": 0, "Tues": 0, "Wed": 0, "firstDay": "week of 01-14"}]
    )
  })

  it('should get the weeks keys', () => {
    expect(wrapper.instance().getWeeksKeys()).toEqual(
      ["2017-12-31", "2018-01-01", "2018-01-02", "2018-01-03", "2018-01-04", "2018-01-05", "2018-01-06", "2018-01-07", "2018-01-08", "2018-01-09", "2018-01-10", "2018-01-11", "2018-01-12", "2018-01-13", "2018-01-14", "2018-01-15", "2018-01-16", "2018-01-17", "2018-01-18", "2018-01-19", "2018-01-20"]
    )
  })
  
})
