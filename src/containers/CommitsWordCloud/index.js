import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';
import { connect } from 'react-redux';

import './CommitsWordCloud.css';

import { mockCloudData } from './__mocks__/mockCloudData';
import { CloudItem } from '../../components/CloudItem';


class CommitsWordCloud extends Component {
  componentDidMount() {
  //   setInterval(() => {
  //     this.forceUpdate();
  //   }, 3000);

}

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

render() {
  return(
      <TagCloud
        onClick={() => this.forceUpdate()}
        className='tag-cloud'
        style={{
          fontFamily: 'sans-serif',
          color: () => randomColor({ hue: 'purple'}),
          padding: 5,
          width: '100%',
          height: '100%',
          fontSize: 22
        }}>
        {
          // change the mockCloudData[s] below back to this.props.cloudData
          Object.keys(this.props.cloudData).map( word => {
            return (
              <CloudItem 
                text={word}
                instances={this.props.cloudData[word]}
                style={this.getFontSize(this.props.cloudData[word])}
              >{word}</CloudItem>
            )
          })
        }
      </TagCloud>

    )
  }
}

export const mapStateToProps = ({ cloudData }) => ({ cloudData })

export default connect(mapStateToProps, null)(CommitsWordCloud);