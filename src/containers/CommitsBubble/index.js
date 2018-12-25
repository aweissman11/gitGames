import React, { Component } from 'react';

import { MockBubbleData } from './__mocks__/MockBubbleData';

import { ResponsiveBubbleHtml } from '@nivo/circle-packing';

class CommitsBubble extends Component {

  componentDidMount() {
    console.log('mock bubble data:', MockBubbleData);
  }
  render() {
    return (
      <div className="commits-bubble" style={{height: 500, width: 500 }}>
        <ResponsiveBubbleHtml
          data={MockBubbleData}
          root={MockBubbleData}
          margin={{
              "top": 20,
              "right": 20,
              "bottom": 20,
              "left": 20
          }}
          identity="branch"
          value="commits"
          colors="purple_orange"
          colorBy="depth"
          labelSkipRadius={10}
          labelTextColor="inherit:darker(0.8)"
          borderColor="inherit:darker(0.3)"
          animate={true}
          motionStiffness={90}
          motionDamping={12}
        />
      </div>
    );
  }
}

export default CommitsBubble;
