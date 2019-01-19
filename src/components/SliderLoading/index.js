import React from 'react';
import ReactLoading from 'react-loading';

import './SliderLoading.css';

export const SliderLoading = (props) => (
  <div className='slider-loading'>
    <h4 className='slider-loading-text'>
    <span>
      <ReactLoading className='slider-loading-spinner' type={'spokes'} color={'#b7b7b7'} height={40} width={40} />
    </span>
    {props.msg}
    </h4>
  </div>
);

export default SliderLoading;