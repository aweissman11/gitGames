import React, { Component } from 'react';

import './InfoPage.scss';

export class InfoPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      containerClass: 'info-page-container-hidden',
      creatorClass: 'creator-info',
      pageClass: 'info-page-hidden'
    }
  }

  toggleInfoPage = () => {
    const { containerClass } = this.state;
    if (containerClass === 'info-page-container') {
      this.setState({
        containerClass: 'info-page-container-hidden',
        pageClass: 'info-page-hidden'
      })
    } else {
      this.setState({
        containerClass: 'info-page-container',
        pageClass: 'info-page'
      })
    }
  }

  render() {
    return (
      <div className='info-container'>
        <div className='ip-btn-box'>
          <button
            className='ip-btn'
            onClick={this.toggleInfoPage}
          >I</button>
        </div>
        <div className={`${this.state.pageClass}`}>
          <div className={`${this.state.containerClass}`}>
            <div className='info-page-box'>
              <div className='creators-container'>
                <button
                  className='exit-creators'
                  onClick={this.toggleInfoPage}
                >X</button>
                <div className={`${this.state.creatorClass}`}>
                  <div className='photo-container'>
                    <img 
                      src={`https://avatars0.githubusercontent.com/u/36015215?v=4`}
                      alt='profile'
                      className='profile-avatar'
                    />
                  </div>
                  <br></br>
                  <h4>Tara Craig</h4>
                  <p className='profile-username'>@{`tcraig7`}</p>
                  <p>Backend Creator</p>
                </div>
                <div className={`${this.state.creatorClass}`}>
                  <div className='photo-container'>
                    <img 
                      src={`https://avatars3.githubusercontent.com/u/32880860?v=4`}
                      alt='profile'
                      className='profile-avatar'
                    />
                  </div>
                  <br></br>
                  <h4>Patrick Shobe</h4>
                  <p className='profile-username'>@{`patrickshobe`}</p>
                  <p>Backend Creator</p>
                </div>
                <div style={{ paddingBottom: '40px' }} className={`${this.state.creatorClass}`}>
                  <div className='photo-container'>
                    <img 
                      src={`https://avatars0.githubusercontent.com/u/37625478?v=4`}
                      alt='profile'
                      className='profile-avatar'
                    />
                  </div>
                  <br></br>
                  <h4>Aaron Weissman</h4>
                  <p className='profile-username'>@{`aweissman11`}</p>
                  <p>Backend Creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}