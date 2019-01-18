import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ProfilePage.scss';

export class ProfilePage extends Component {
  render() {
    return(
      (this.props.loadingUser.loadingUser) ?
        <div>
          <h1>Loading!</h1>
        </div>
    :
      <div className='profile-page'>
        <div className='profile-grid'>
          <div className='user-info'>
            <div className='photo-container'>
              <img 
                src={this.props.userData.avatarUrl}
                alt='profile'
                className='profile-avatar'
              />
            </div>
            <p className='profile-username'>@{this.props.userData.login}</p>
            <p className='joined-days'>joined on {this.props.userData.createdAt.slice(0, 10)}</p>
          </div>
          <div className='data-squares'>
            <div className='data-square'></div>
            <div className='data-square'></div>
            <div className='data-square'></div>
            <div className='data-square'></div>
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = ({ userData, loadingUser, hasErrored }) => ({ userData, loadingUser, hasErrored })

export default connect(mapStateToProps, null)(ProfilePage);