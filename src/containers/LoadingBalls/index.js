import React, { Component } from 'react';
import { connect } from 'react-redux';

import ForceBubbles from '../../components/ForceBubbles';
import ReactLoading from 'react-loading';

import './LoadingBalls.scss';

export class LoadingBalls extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loadingGifClass: 'balls-loading-spinner',
      searchAgainClass: 'hide-search-again-message'
    }
  }

  getLoadingMessage = () => {

    const {
      loadingCommits,
      loadingCommunity,
      loadingLanguages,
      loadingUser,
      loadingWordCloud,
      hasErrored
    } = this.props;
    if (loadingUser.loadingUser) {
      if(this.state.loadingGifClass !== 'balls-loading-spinner') {
        this.setState({
          loadingGifClass: 'balls-loading-spinner'
        })
      }
      return loadingUser.message
    } else if (loadingCommunity.loadingCommunity) {
      return loadingCommunity.message
    } else if (loadingWordCloud.loadingWordCloud) {
      return loadingWordCloud.message
    } else if (loadingLanguages.loadingLanguages) {
      return loadingLanguages.message
    } else if (loadingCommits.loadingCommits) {
      return loadingCommits.message
    } else if (hasErrored.hasErrored) {
      if (this.state.loadingGifClass !== 'hide-loading-gif') {
        this.setState({
          loadingGifClass: 'hide-loading-gif',
          searchAgainClass: 'show-search-again-message'
        })
      }
      return hasErrored.message
    } else {
      return null;
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
              className={this.state.loadingGifClass}
              type={'spokes'}
              color={'#b7b7b7'}
              height={25}
              width={25}
            />
          </div>
          <p className='heres-the-balls'>Here, play with some balls...</p>
          <p className={this.state.searchAgainClass}>Or search again using the input at the top</p>
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
  loadingWordCloud,
  hasErrored
}) => ({
  loadingCommits,
  loadingCommunity,
  loadingLanguages,
  loadingUser,
  loadingWordCloud,
  hasErrored
})

export default connect(mapStateToProps, null)(LoadingBalls)