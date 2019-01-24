import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import { connect } from 'react-redux';

import './CommitsWordCloud.scss';

import { CloudItem } from '../../components/CloudItem';

export class CommitsWordCloud extends Component {
  getFontSize = (instances) => {
    const styles = {
      small: {
        fontSize: 14,
        opacity: 0.7
      },
      medium: {
        fontSize: 22,
      },
      big: {
        fontSize: 30,
      },
      huge: {
        fontSize: 50,
        fontWeight: 'bold'
      }
    }
    
    if (instances < 3) {
      return styles.small
    } else if (instances < 8) {
      return styles.medium
    } else if (instances < 20) {
      return styles.big
    } else {
      return styles.huge
    }
    
  }

  getWordColor = () => {
    const colorsList = [
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


    return colorsList[Math.floor(Math.random() * Math.floor(colorsList.length))]
  }

  render() {
    return(
        <div className='commits-word-cloud'>
          <div className='tag-container'>
            <TagCloud
              onClick={() => this.forceUpdate()}
              className='tag-cloud'
              style={{
                fontFamily: 'sans-serif',
                color: () => this.getWordColor(),
                padding: 5,
                width: '100%',
                height: '100%',
                fontSize: 22,
                rotate: 90
              }}>
              {
                Object.keys(this.props.cloudData).map( word => {
                  return (
                    <CloudItem
                      key={word} 
                      text={word}
                      instances={this.props.cloudData[word]}
                      style={this.getFontSize(this.props.cloudData[word])}
                    >{word}</CloudItem>
                  )
                })
              }
            </TagCloud>
          </div>
        </div>
    )
  }
}

export const mapStateToProps = ({ cloudData, loadingWordCloud }) => ({ cloudData, loadingWordCloud })

export default connect(mapStateToProps, null)(CommitsWordCloud);