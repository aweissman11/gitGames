import React, { Component } from 'react';
import { connect } from 'react-redux';

import ForceBubbles from '../../components/ForceBubbles';
import ReactLoading from 'react-loading';

import './LoadingBalls.scss';

export class LoadingBalls extends Component {
  getLoadingMessage = () => {
    const {
      loadingCommits,
      loadingCommunity,
      loadingLanguages,
      loadingUser,
      loadingWordCloud
    } = this.props;
    if (loadingUser.loadingUser) {
      return loadingUser.message
    } else if (loadingCommunity.loadingCommunity) {
      return loadingCommunity.message
    } else if (loadingWordCloud.loadingWordCloud) {
      return loadingWordCloud.message
    } else if (loadingLanguages.loadingLanguages) {
      return loadingLanguages.message
    } else if (loadingCommits.loadingCommits) {
      return loadingCommits.message
    } else {
      return null
    }
    // return 'longer loading message here'
  }

  render() {
    return (
      <div className='loading-balls'>
        <div className='balls-info-container'>
          <div className='loading-msg-box'>
            <p className='loading-ball-msg'>
              {
                this.getLoadingMessage()
              }
            </p>
            <ReactLoading
              className='balls-loading-spinner'
              type={'spokes'}
              color={'#b7b7b7'}
              height={25}
              width={25}
            />
          </div>
          <p className='heres-the-balls'>Here, play with some balls...</p>
        </div>
        <div className='loading-bubble-container'>
          <ForceBubbles customHeight={window.innerHeight} customWidth={window.innerWidth} />
        </div>
      </div>
    )
  }
}

export const mapStateToProps = ({
  loadingCommits,
  loadingCommunity,
  loadingLanguages,
  loadingUser,
  loadingWordCloud
}) => ({
  loadingCommits,
  loadingCommunity,
  loadingLanguages,
  loadingUser,
  loadingWordCloud
})

export default connect(mapStateToProps, null)(LoadingBalls)