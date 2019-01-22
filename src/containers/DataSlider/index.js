import React, { Component } from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';

import ProfilePage from '../ProfilePage';
import ForceBubbles from '../../components/ForceBubbles';
import LanguageUsage from '../LanguageUsage';
import CommitsWordCloud from '../CommitsWordCloud';
// import LanguageBarChart from '../LanguageBarChart';
import CommitsBarChart from '../CommitsBarChart';
import LoadingBalls from '../LoadingBalls';
// import PreviousPage from '../../components/LeftSlideBtn';

import { ReactComponent as LeftSlideBtn } from '../../components/LeftSlideBtn/LeftSlideBtn.svg';
import { ReactComponent as RightSlideBtn } from '../../components/RightSlideBtn/RightSlideBtn.svg';

import './DataSlider.scss';

class DataSlider extends Component {
    constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

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

    // return (
    //   <LoadingBalls />
    // )


    return (
      this.props.loadingUser.loadingUser ||
      this.props.loadingCommunity.loadingCommunity ||
      this.props.loadingWordCloud.loadingWordCloud ||
      this.props.loadingLanguages.loadingLanguages ||
      this.props.loadingCommits.loadingCommits ?
      <LoadingBalls /> :
      <div className='data-slider'>
        <div style={{ textAlign: "center" }}>
          <div className='slider-btns-box'>
            <div onClick={this.previous} className='lft-sld-btn-box'>
              <LeftSlideBtn className='left-slide-btn'/>
            </div>
            <div onClick={this.next} className='rgt-sld-btn-box'>
              <RightSlideBtn className='right-slide-btn' />
            </div>
          </div>
        </div>
        <Slider
          {...settings}
          nextArrow={<div></div>}
          prevArrow={<div></div>}
          swipeToSlide={true}
          adaptiveHeight={true}
          ref={c => (this.slider = c)}
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
  loadingCommunity,
  loadingLanguages,
  loadingUser,
  loadingWordCloud
}) => ({
  loadingCommits,
  loadingCommunity,
  loadingLanguages,
  loadingUser,
  loadingWordCloud
})

export default connect(mapStateToProps, null)(DataSlider);


