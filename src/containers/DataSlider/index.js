import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Route, withRouter, Switch } from 'react-router-dom';

import './DataSlider.css';

class DataSlider extends Component {
  render() {
    return (
      <div className='data-slider'>
        <div className='slide-btn-left'>
          <button className='slide-left'>LEFT</button>
        </div>
        <div className='slide-btn-right'>
          <button className='slide-right'>RIGHT</button>
        </div>
        <section className='graphs'>
          <article className='graph-1'></article>
          <article className='graph-2'></article>
          <article className='graph-3'></article>
          <article className='graph-4'></article>
          <article className='graph-5'></article>
        </section>
      </div>
    );
  }
}

export default DataSlider;
