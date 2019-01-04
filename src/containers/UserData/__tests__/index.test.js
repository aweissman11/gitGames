import React from 'react';
import { shallow } from 'enzyme';

import { UserData } from '../index';

describe('UserData', () => {
  
  it('should match the snapshot', () => {
    const mockProps = {
      "userData": {},
      "loadingUser": {
        "message": "Getting User Data",
        "loadingUser": true
      },
      "hasErrored": {
        "hasErrored": false,
        "message": "nope"
      }
    }
    const wrapper = shallow(<UserData { ...mockProps } text='word' instances={90} />)
    expect(wrapper).toMatchSnapshot()
  })
  
  describe('usernameDisplay', () => {
    it('should tell the user to use the search', () => {
      const mockProps = {
        "userData": {},
        "loadingUser": {
          "message": "Getting User Data",
          "loadingUser": true
        },
        "hasErrored": {
          "hasErrored": false,
          "message": "nope"
        }
      }
      const wrapper = shallow(<UserData { ...mockProps } loginPage={true} />)
      expect(wrapper.instance().usernameDisplay()).toEqual(<span className="loading-span">Please use the search</span>)
    })

    it('should say user doesnt exist', () => {
      const mockProps = {
        "hasErrored": {
          "hasErrored": true,
          "message": "nope"
        }
      }

      const wrapper = shallow(<UserData { ...mockProps } />)
      expect(wrapper.instance().usernameDisplay()).toEqual(<span className="loading-span">User does not exist</span>)
    })

    it('should say getting data', () => {
      const mockProps = {
        "userData": {
          "avatarUrl": "https://avatars0.githubusercontent.com/u/36015215?v=4",
          "createdAt": "2018-01-31T21:48:32Z",
          "email": "",
          "login": "TCraig7",
          "name": "Tara Craig"
        },
        "loadingUser": {
          "message": "retrieving data",
          "loadingUser": true
        },
        "hasErrored": {
          "hasErrored": false,
          "message": "nope"
        }
      }

      const wrapper = shallow(<UserData { ...mockProps } />)
      expect(wrapper.find('.loading-span').text()).toEqual('getting user data<Loading />');
      
    })
    
    it('should show username', () => {
      const mockProps = {
        "userData": {
          "avatarUrl": "https://avatars0.githubusercontent.com/u/36015215?v=4",
          "createdAt": "2018-01-31T21:48:32Z",
          "email": "",
          "login": "TCraig7",
          "name": "Tara Craig"
        },
        "loadingUser": {
          "message": "User data retrieved",
          "loadingUser": false
        },
        "hasErrored": {
          "hasErrored": false,
          "message": "nope"
        }
      }
      
      const wrapper = shallow(<UserData { ...mockProps } />)
      expect(wrapper.find('span').last().text()).toEqual("TCraig7");
    })
  })
  
})







