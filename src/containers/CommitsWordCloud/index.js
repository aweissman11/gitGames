import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';
import { connect } from 'react-redux';



class CommitsWordCloud extends Component {
  getFontSize = (instances) => {
    if (instances < 5) {
      return 2
    } else if (instances < 15 && instances > 5) {
      return 3
    } else {
      return (instances/3)
    }
  }

  render() {
    return(
      <TagCloud 
        style={{
          fontFamily: 'sans-serif',
          color: () => randomColor({ hue: 'purple'}),
          padding: 5,
          width: '100%',
          height: '100%'
        }}>
        {
          Object.keys(this.props.cloudData).map( word => {
            return (
              <div style={{ fontSize: `${this.getFontSize(this.props.cloudData[word])}` }}>{word}</div>
            )
          })
        }
      </TagCloud>

    )
  }
}

export const mapStateToProps = ({ cloudData }) => ({ cloudData })

export default connect(mapStateToProps, null)(CommitsWordCloud);