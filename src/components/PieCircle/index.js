import React, { Component } from 'react';
import { ResponsivePie } from '@nivo/pie';

import './PieCircle.scss';

export class PieCircle extends Component {

  getToolTip = (tip, count) => {
    return (
      <div>
        <p className='tooltip'>testTip:</p>
        <p className='total-count'>999</p>
      </div>
    )
  }

  render() {
    return (
      <div className='follow-box'>
        <div className='title-container'>
          <p className='pie-title'>{this.props.title}</p>
        </div>
        <div style={{ width: '100%', height: '110%', overflow: 'visible', paddingRight: '5px' }}>
          <ResponsivePie
              data={this.props.stats}
              margin={{
                  "top": 40,
                  "right": 65,
                  "bottom": 40,
                  "left": 65
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
              tooltip={function(e){return (
                <div className='tool-tip'>
                  <p
                    className='tip-text'
                    style={{ color: e.color }}
                  >{e.tooltip}:</p>
                  <p className='total-count'>{e.value}</p>
                </div>
              )}}
              theme={{tooltip: {container: {
                background: '#2a2829',
                boxShadow: '0 0 13px black'
              }}}}

          />
        </div>
      </div>
    )
  }
}
