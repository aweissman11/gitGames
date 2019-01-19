import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom'

import './UserData.css';

export class UserData extends Component {
  usernameDisplay = () => {
    if (this.props.loginPage === true) {
      return <span className='loading-span'>Please use the search</span>       
    } else if (this.props.hasErrored.hasErrored) {
      return <span className='loading-span'>User does not exist</span> 
    } else if (this.props.loadingUser.loadingUser) {
      return <span className='loading-span'>getting user data<ReactLoading className='loading-spinner-username' type={'spokes'} color={'#b7b7b7'} height={25} width={25} /></span> 
    } else {
      return <Link className='username-link' to={`/main/${this.props.userData.login}/#`}>
              <span>{this.props.userData.login}</span>
            </Link>
    }
  }

  render() {

    return (
      <div className="user-data">
        <h3 className="username">
          <span>{
              this.usernameDisplay()
            }</span>
        </h3>
      </div>
    );
  }
}

export const mapStateToProps = ({ userData, loadingUser, hasErrored }) => ({ userData, loadingUser, hasErrored })

export default connect(mapStateToProps, null)(UserData);
