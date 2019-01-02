import React, { Component } from 'react';
import Slider from "react-slick";

// Still might use these
// import { Route, withRouter, Switch } from 'react-router-dom';

import ForceBubbles from '../../components/ForceBubbles';
import CommitsWordCloud from '../CommitsWordCloud';
import CommitsBubble from '../CommitsBubble';
import LanguageBarChart from '../LanguageBarChart';

import { ReactComponent as LeftSlideBtn } from '../../components/LeftSlideBtn/LeftSlideBtn.svg';
import { ReactComponent as RightSlideBtn } from '../../components/RightSlideBtn/RightSlideBtn.svg';

import './DataSlider.css';

class DataSlider extends Component {

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
        <Slider {...settings} >
          <article className='slider-graph'>
            <ForceBubbles customHeight={600} />
          </article>
          <article className='slider-graph'>
            <CommitsWordCloud />
          </article>
          <article className='slider-graph'>
            <LanguageBarChart />
          </article>
          <article className='slider-graph'>
            <CommitsBubble />
          </article>
          <article className='slider-graph'>
            <h1>slider-GRAPH 5</h1>
          </article>
        </Slider>
      </div>
    );
  }
}

export default DataSlider;
