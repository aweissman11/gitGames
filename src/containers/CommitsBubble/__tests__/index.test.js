  import React from 'react';
  import { shallow } from 'enzyme';
  
  import CommitsBubble from '../index';
  
  describe('CommitsBubble', () => {
    it('should match the snapshot', () => {
      const wrapper = shallow(<CommitsBubble />)
      expect(wrapper).toMatchSnapshot()
    })
  })
  