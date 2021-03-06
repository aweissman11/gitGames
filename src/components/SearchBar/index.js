import React from 'react';
import { Link } from 'react-router-dom'

import SearchInput from '../SearchInput';
import UserData from '../../containers/UserData';

import { ReactComponent as LogoSvg } from '../../assets/Octicons-mark-github.svg';

import './SearchBar.scss';

export const SearchBar = (props) => (
  <div className='search-bar'>
    <div className='git-games'>
      <div className='logo-box'>
        <p>
          <Link to='/'>
            <LogoSvg className='logo' />
          </Link>
        </p>
        <div>
          <SearchInput />
        </div>
      </div>
    </div>
    <div className='search-bar-user-data'>
      <UserData loginPage={props.loginPage}/>
    </div>
  </div>
)

export default SearchBar;