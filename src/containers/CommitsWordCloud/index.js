import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';


class CommitsWordCloud extends Component {

  componentDidMount() {
    // console.log('First word cloud mounted');
  }

  getWordCloud = () => {

  }

  render() {
    return (
      <TagCloud 
        style={{
          fontFamily: 'sans-serif',
          fontSize: 30,
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: () => randomColor({ hue: 'purple'}),
          padding: 5,
          width: '100%',
          height: '100%'
        }}>
        <div className='react-hover'>react</div>
        <div>tag</div>
        <div>cloud</div>
        <div>TEXT1</div>
        <div>TEXT2</div>
        <div>TEXT3</div>
        <div>TEXT4</div>
        <div>TEXT5</div>
        <div>TEXT6</div>
        <div>TEXT7</div>
        <div>TEXT8</div>
        <div>TEXT9</div>
        <div>TEXT10</div>
        <div>TEXT11</div>
      </TagCloud>
    );
  }
}

export default CommitsWordCloud;