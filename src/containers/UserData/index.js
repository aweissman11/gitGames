import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom'

import './UserData.css';


const UserData = (props) => {
    return (
      <div className="user-data">
        <h3 className="username">
          <span>{
              props.loadingUser.loadingUser ? 
                <span className='loading-span'>getting user data<ReactLoading className='loading-spinner-username' type={'spokes'} color={'blueviolet'} height={25} width={25} /></span> 
              : 
              <Link className='username-link' to={`/main/${props.userData.login}/#`}>
                <span>{props.userData.login}</span>
              </Link>
            }</span>
        </h3>
      </div>
    );
}

export const mapStateToProps = ({ userData, loadingUser }) => ({ userData, loadingUser })

export default connect(mapStateToProps, null)(UserData);
