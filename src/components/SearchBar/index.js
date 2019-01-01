import React from 'react';
import { Link } from 'react-router-dom'

import SearchUsers from '../SearchUsers';
import UserData from '../../containers/UserData';

import { ReactComponent as LogoSvg } from '../../assets/Octicons-mark-github.svg';

import './SearchBar.css';

export const SearchBar = () => (
  <div className='search-bar'>
      <div className='git-games'>
        <Link to='/'>
          <LogoSvg className='logo' />
        </Link>
        <p className='title'><span className='big-g'>G</span>it<span className='big-g'>G</span>ames</p>
        <UserData />
      </div>
    <SearchUsers />
  </div>
)

export default SearchBar;