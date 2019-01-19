import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ResponsivePie } from '@nivo/pie';


// import SliderLoading from '../../components/SliderLoading';

import './PieCircle.scss';

export class PieCircle extends Component {
  render() {
    return (
      <div className='follow-box'>
        <div className='title-container'>
          <p className='pie-title'>{this.props.title}</p>
        </div>
        <div style={{ width: '100%', height: '110%', overflow: 'visible' }}>
          <ResponsivePie
              data={this.props.stats}
              margin={{
                  "top": 40,
                  "right": 60,
                  "bottom": 40,
                  "left": 60
              }}
              innerRadius={0.9}
              padAngle={0}
              cornerRadius={0}
              colors="category10"
              colorBy={function(e){return e.color}}
              borderWidth={1}
              borderColor="inherit:darker(0.2)"
              radialLabel="label"
              radialLabelsSkipAngle={10}
              radialLabelsTextXOffset={0}
              radialLabelsTextColor="#fff"
              radialLabelsLinkOffset={0}
              radialLabelsLinkDiagonalLength={16}
              radialLabelsLinkHorizontalLength={3}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor="inherit"
              enableSlicesLabels={false}
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="#333333"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
          />
        </div>
      </div>
    )
  }
}
