import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
// import { Route, withRouter, Switch } from 'react-router-dom';

import CommitsWordCloud from '../CommitsWordCloud';
import CommitsBubble from '../CommitsBubble';

import { ReactComponent as LeftSlideBtn } from '../../components/LeftSlideBtn/LeftSlideBtn.svg';
import { ReactComponent as RightSlideBtn } from '../../components/RightSlideBtn/RightSlideBtn.svg';
// import RightSlideBtn from '../../components/RightSlideBtn';

import './DataSlider.css';

class DataSlider extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     gridClass: 1,
  //     rightClass: '',
  //     leftClass: 'hide-slide-btn',
  //     dot1: 'current-graph-dot',
  //     dot2: 'graph-dot',
  //     dot3: 'graph-dot',
  //     dot4: 'graph-dot',
  //     dot5: 'graph-dot',
  //   }
  // }

  // triggerSlideBtn = direction => {
  //   const { gridClass } = this.state;
  //   let newClass = gridClass;

  //   if (gridClass === 2 && direction === 0) {
  //     newClass--;
  //     let currentDot = 'dot' + (newClass);
      
  //     this.setState({ 
  //       gridClass: newClass,
  //       rightClass: '',
  //       leftClass: 'hide-slide-btn',
  //       dot1: 'graph-dot',
  //       dot2: 'graph-dot',
  //       dot3: 'graph-dot',
  //       dot4: 'graph-dot',
  //       dot5: 'graph-dot',
  //       [currentDot]: 'current-graph-dot' 
  //     })
  //   } else if (gridClass < 4 && gridClass >= 1) {
  //     direction === 0 ? (newClass-=1) : newClass++;
  //     let currentDot = 'dot' + (newClass);
      
  //     this.setState({ 
  //       gridClass: newClass,
  //       leftClass: '',
  //       rightClass: '',
  //       dot1: 'graph-dot',
  //       dot2: 'graph-dot',
  //       dot3: 'graph-dot',
  //       dot4: 'graph-dot',
  //       dot5: 'graph-dot',
  //       [currentDot]: 'current-graph-dot' 
  //     })
  //   } else if (gridClass === 4 && direction === 1) {
  //     newClass++
  //     let currentDot = 'dot' + (newClass);
      
  //     this.setState({ 
  //       gridClass: newClass,
  //       rightClass: 'hide-slide-btn',
  //       leftClass: '',
  //       dot1: 'graph-dot',
  //       dot2: 'graph-dot',
  //       dot3: 'graph-dot',
  //       dot4: 'graph-dot',
  //       dot5: 'graph-dot',
  //       [currentDot]: 'current-graph-dot' 
  //     })
  //   } else if (gridClass === 4 && direction === 0) {
  //     newClass--
  //     let currentDot = 'dot' + (newClass);
      
  //     this.setState({ 
  //       gridClass: newClass,
  //       rightClass: '',
  //       leftClass: '',
  //       dot1: 'graph-dot',
  //       dot2: 'graph-dot',
  //       dot3: 'graph-dot',
  //       dot4: 'graph-dot',
  //       dot5: 'graph-dot',
  //       [currentDot]: 'current-graph-dot' 
  //     })
  //   } else if (gridClass === 5) {
  //     newClass--;
  //     let currentDot = 'dot' + (newClass);
      
  //     this.setState({ 
  //       gridClass: newClass,
  //       rightClass: '',
  //       leftClass: '',
  //       dot1: 'graph-dot',
  //       dot2: 'graph-dot',
  //       dot3: 'graph-dot',
  //       dot4: 'graph-dot',
  //       dot5: 'graph-dot',
  //       [currentDot]: 'current-graph-dot' 
  //     })
  //   }
  // };

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      slide: 'article',
      nextArrow: <RightSlideBtn />,
      prevArrow: <LeftSlideBtn />
    };

    return (
      <div className='data-slider'>
        {/* <div 
          className={`slide-btn-left ${this.state.leftClass}`}
          onClick={() => this.triggerSlideBtn(0)}
          value='left'
        >
          <div className='slide-btn'>
            <LeftSlideBtn />
          </div>
        </div>
        <div 
          className={`slide-btn-right ${this.state.rightClass}`}
          onClick={() => this.triggerSlideBtn(1)}
          value='right'
        >
          <div className='slide-btn'>
            <RightSlideBtn />
          </div>
        </div>
        <div className='graph-dots'>
          <div className={`${this.state.dot1}`}></div>
          <div className={`${this.state.dot2}`}></div>
          <div className={`${this.state.dot3}`}></div>
          <div className={`${this.state.dot4}`}></div>
          <div className={`${this.state.dot5}`}></div>
        </div> */}
        {/* <section className='slider-graphs'> */}
          <Slider {...settings} >
            <article className='slider-graph'>
              <CommitsBubble />
            </article>
            <article className='slider-graph'>
              <CommitsWordCloud />
            </article>
            <article className='slider-graph'>
              <h1>slider-GRAPH 3</h1>
            </article>
            <article className='slider-graph'>
              <h1>slider-GRAPH 4</h1>
            </article>
            <article className='slider-graph'>
              <h1>slider-GRAPH 5</h1>
            </article>
          </Slider>
        {/* </section> */}
      </div>
    );
  }
}

export default DataSlider;
