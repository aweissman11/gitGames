import React, { Component } from 'react';
import Slider from "react-slick";

import ProfilePage from '../ProfilePage';
import ForceBubbles from '../../components/ForceBubbles';
import CommitsWordCloud from '../CommitsWordCloud';
import LanguageBarChart from '../LanguageBarChart';
import CommitsBarChart from '../CommitsBarChart';

import { ReactComponent as LeftSlideBtn } from '../../components/LeftSlideBtn/LeftSlideBtn.svg';
import { ReactComponent as RightSlideBtn } from '../../components/RightSlideBtn/RightSlideBtn.svg';

import './DataSlider.scss';

class DataSlider extends Component {
  getRightSlideBtn = () => <RightSlideBtn />
  getLeftSlideBtn = () => <LeftSlideBtn />

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      slide: 'article'
    };

    return (
      <div className='data-slider'>
        <Slider
          {...settings}
          nextArrow={this.getRightSlideBtn()}
          prevArrow={this.getLeftSlideBtn()}
        >
          <article className='slider-graph'>
            <ProfilePage />
          </article>
          {/* <article className='slider-graph'>
            <ForceBubbles customHeight={window.innerHeight} customWidth={window.innerWidth} />
          </article> */}
          <article className='slider-graph'>
            <div className='slider-graph-1'>
              <h3>Commit Message Word Cloud</h3>
              <CommitsWordCloud className='cloud-slider-container' />
            </div>
          </article>
          <article className='slider-graph'>
            <h3>Language Usage Breakdown</h3>
            <LanguageBarChart />
          </article>
          <article className='slider-graph'>
            <h3>Commits broken down per week and per weekday</h3>
            <CommitsBarChart />
          </article>
        </Slider>
      </div>
    );
  }
}

export default DataSlider;
