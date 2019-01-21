import React, { Component } from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';

import ProfilePage from '../ProfilePage';
import ForceBubbles from '../../components/ForceBubbles';
import LanguageUsage from '../LanguageUsage';
import CommitsWordCloud from '../CommitsWordCloud';
// import LanguageBarChart from '../LanguageBarChart';
import CommitsBarChart from '../CommitsBarChart';
// import PreviousPage from '../../components/LeftSlideBtn';

import { ReactComponent as LeftSlideBtn } from '../../components/LeftSlideBtn/LeftSlideBtn.svg';
import { ReactComponent as RightSlideBtn } from '../../components/RightSlideBtn/RightSlideBtn.svg';

import './DataSlider.scss';

class DataSlider extends Component {
  getLeftSlideBtn = () => <LeftSlideBtn className='left-slide-btn'/>
  getRightSlideBtn = () => <RightSlideBtn className='right-slide-btn' />

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
      this.props.loadingCommits.loadingCommits ?
      <div></div> :
      <div className='data-slider'>
        <Slider
          {...settings}
          nextArrow={this.getRightSlideBtn()}
          prevArrow={this.getLeftSlideBtn()}
          swipeToSlide={true}
          adaptiveHeight={true}
          responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]}
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
            <LanguageUsage />
          </article>
          <article className='slider-graph'>
            <CommitsBarChart />
          </article>
        </Slider>
      </div>
    );
  }
}

export const mapStateToProps = ({ 
  loadingCommits,
}) => ({
  loadingCommits,
})

export default connect(mapStateToProps, null)(DataSlider);


