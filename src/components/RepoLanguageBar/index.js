import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar';

import './RepoLanguageBar.scss';

export class RepoLanguageBar extends Component {
  render() {
    return (
      <div className='repo-language-bar' style={{ height: '100%', width: '100%'}}>
        <div style={{margin: 'auto', width: '100px', height: '80%', fontSize: '1em'}}>
          <ResponsiveBar
              className='one-repo-language-bar'
              data={[this.props.repoData]}
              keys={Object.keys(this.props.repoData)}
              indexBy="hover"
              margin={{
                  "top": 0,
                  "right": 0,
                  "bottom": 0,
                  "left": 0
              }}
              padding={0.3}
              layout="vertical"
              colors="set2"
              colorBy="id"
              reverse={false}
              borderColor="inherit:darker(1.6)"
              axisTop={null}
              axisRight={null}
              axisBottom={null}
              axisLeft={null}
              enableGridY={false}
              labelSkipHeight={12}
              labelTextColor="inherit:darker(1.6)"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
          />
        </div>
        <p className='repo-name'>{this.props.repoData.name}</p>
      </div>
    )
  }
}

export default RepoLanguageBar;