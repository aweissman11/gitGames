import React from 'react';

import SearchUsers from '../SearchUsers';
import { ReactComponent as LogoSvg } from '../../assets/Octicons-mark-github.svg';

import './SearchBar.css';

export const SearchBar = () => (
  <div className='search-bar'>
    <div className='git-games'>
      <LogoSvg className='logo' />
      <p className='title'><span className='big-g'>G</span>it<span className='big-g'>G</span>ames</p>
    </div>
    <SearchUsers />
  </div>
)

export default SearchBar;