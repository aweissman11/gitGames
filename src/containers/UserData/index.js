import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom'

import './UserData.css';

const UserData = (props) => {
  const usernameDisplay = () => {
    if (props.loginPage === true) {
      return <span className='loading-span'>Please use the search</span>       
    } else if (props.hasErrored.hasErrored) {
      return <span className='loading-span'>User does not exist</span> 
    } else if (props.loadingUser.loadingUser) {
      return <span className='loading-span'>getting user data<ReactLoading className='loading-spinner-username' type={'spokes'} color={'blueviolet'} height={25} width={25} /></span> 
    } else {
      return <Link className='username-link' to={`/main/${props.userData.login}/#`}>
              <span>{props.userData.login}</span>
            </Link>
    }
  }

  return (
    <div className="user-data">
      <h3 className="username">
        <span>{
            usernameDisplay()
          }</span>
      </h3>
    </div>
  );
}

export const mapStateToProps = ({ userData, loadingUser, hasErrored }) => ({ userData, loadingUser, hasErrored })

export default connect(mapStateToProps, null)(UserData);
