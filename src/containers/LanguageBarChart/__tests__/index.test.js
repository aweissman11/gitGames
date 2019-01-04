import React from 'react';
import { shallow } from 'enzyme';

import { LanguageBarChart } from '../index';

import { mockLanguageData } from '../__mocks__/mockLanguageData';

describe('LanguageBarChart', () => {

  let wrapper;
  let mockLoadingLanguages;
  
  beforeEach(() => {
  })

  it('should match the snapshot', () => {
    mockLoadingLanguages = {
      loadingLanguages: false,
      message: 'not loading'
    }
    wrapper = shallow(<LanguageBarChart
                        languageData={mockLanguageData}
                        loadingLanguages={mockLoadingLanguages}
                      />)
    expect(wrapper).toMatchSnapshot()
  })
  
  it('should match the snapshot', () => {
    mockLoadingLanguages = {
      loadingLanguages: true,
      message: 'is loading'
    }
    wrapper = shallow(<LanguageBarChart
                        languageData={{}}
                        loadingLanguages={mockLoadingLanguages}
                      />)
    expect(wrapper).toMatchSnapshot()
  })
  
  it('should match the snapshot', () => {
    mockLoadingLanguages = {
      loadingLanguages: true,
      message: 'is loading'
    }
    wrapper = shallow(<LanguageBarChart
                        languageData={{}}
                        loadingLanguages={mockLoadingLanguages}
                      />)
    expect(wrapper).toMatchSnapshot()
  })
 
  it('should clean the data', () => {
    wrapper = shallow(<LanguageBarChart
                        languageData={mockLanguageData}
                        loadingLanguages={mockLoadingLanguages}
                      />)
    const results = wrapper.instance().cleanedUpData()
    const expected = {
      "Ruby": "32.63",
      "hover": "percent used",
      "CSS": "2.71",
      "HTML": "8.55",
      "Roff": "0.14",
      "JavaScript": "55.95",
      "CoffeeScript": "0.01"
    }

    expect(results).toEqual(expected);
  }) 
})
