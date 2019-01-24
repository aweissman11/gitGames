import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PieCircle } from '../../components/PieCircle';

import './ProfilePage.scss';

export class ProfilePage extends Component {
  
  getCircleData = (statsArr) => {
    if (this.props.communityData) {
      const { communityData } = this.props;
      const colors = [
        '#1f76b4',
        '#ff7f0c',
        '#2ba02c',
        '#d62728',
        '#9467bd',
        '#8c554b',
        '#e377c2',
        '#7f7f7f',
        '#bbbd22',
        '#18becf',
        '#ffeb3b'
      ]
        const newData = Object.keys(communityData).reduce( (acc, stat, i) => {
          statsArr.forEach( statName => {
            if (stat === statName) {
              let cleanStat = {
                id: stat,
                label: this.labelCleaner(stat),
                value: parseInt(communityData[stat].totalCount),
                color: colors[i],
                tooltip: this.tooltipCleaner(stat)
              }
              acc = [...acc, cleanStat]
            }
          })
          return acc;
        }, [])
        return newData
      }
    }
    
    tooltipCleaner = (statName) => {
      switch (statName) {
        case 'repositoriesContributedTo' :
        return 'contributed to'
        case 'starredRepositories' :
        return 'starred'
        case 'issueComments' :
        return 'comments'
        case 'pullRequests' :
        return 'pull requests'
        default :
        return statName
      }
    }
    
    labelCleaner = (statName) => {
      switch (statName) {
        case 'repositoriesContributedTo' :
        return 'contributed'
        case 'starredRepositories' :
        return 'starred'
        case 'issueComments' :
        return 'comments'
        case 'pullRequests' :
        return 'PRs'
        default :
        return statName
      }
    }
    
    render() {
      return(
          <div className='profile-page'>
            <div className='profile-grid'>
              <div className='data-squares'>
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
                <div className='data-square'>
                  <PieCircle 
                    stats={this.getCircleData(['followers', 'following'])}
                    title='FOLLOW'
                  />
                </div>
                <div className='data-square'>
                  <PieCircle
                    stats={this.getCircleData(['watching', 'starredRepositories'])}
                    title='WATCH'
                  />
                </div>
                <div className='data-square'>
                  <PieCircle
                    stats={this.getCircleData(['repositories', 'repositoriesContributedTo'])}
                    title='CREATE'
                  />
                </div>
                <div className='data-square'>
                  <PieCircle
                    stats={this.getCircleData(['issues', 'pullRequests', 'issueComments'])}
                    title='CONTRIBUTE'
                  />
                </div>
              </div>
            </div>
          </div>
    )
  }
}

export const mapStateToProps = ({ 
  userData,
  loadingUser,
  hasErrored,
  loadingCommunity,
  communityData 
}) => ({
  userData,
  loadingUser,
  hasErrored,
  loadingCommunity,
  communityData
})

export default connect(mapStateToProps, null)(ProfilePage);

