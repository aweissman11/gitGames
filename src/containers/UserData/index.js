import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom'

import './UserData.scss';

export class UserData extends Component {
  render() {

    return (
      (this.props.loadingUser.loadingUser) ?
      <div className="spinner-user-data">
        <div className='header-spinner-box'>
          <div className='loading-spinner-circle'>
            <ReactLoading
              className='username-spinner'
              type={'spokes'}
              color={'#b7b7b7'}
              height={25}
              width={25}
            />
          </div>
        </div>
      </div> :
      this.props.hasErrored.hasErrored ?
      <div></div> :
      <Link className='username-link' to={`/main/${this.props.userData.login}/#`}>
        <div className="user-data">
          <h3 className="username">
              <span>{this.props.userData.login}</span>
          </h3>
          <div className='header-avatar-box'>
            <div className='header-avatar-circle'>
              <img
                className='header-avatar'
                src={this.props.userData.avatarUrl}
                alt='avatar'
              />
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export const mapStateToProps = ({
  userData,
  loadingUser,
  hasErrored
}) => ({
  userData,
  loadingUser,
  hasErrored,
})

export default connect(mapStateToProps, null)(UserData);
