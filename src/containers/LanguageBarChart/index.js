import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ResponsiveBar } from '@nivo/bar';

import './LanguageBarChart.scss';

export class LanguageBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  cleanedUpData = () => {
    if (this.props.languageData.Overall) {
      const { languageData } = this.props
      
      let data = Object.keys(languageData.Overall).reduce( (acc, lan) => {
        acc = {
          ...acc,
          [lan]: (languageData.Overall[lan] * 100).toFixed(2),
          hover: 'percent used'
        }
        
        return acc;
      }, {})
      return data;
    }
  }


  render() {
    let data = this.cleanedUpData() || [];

    return (
        <div className='bar-holder'>
          <div style={{margin: 'auto', width: '100%', height: '100%', fontSize: '1em'}}>
            <ResponsiveBar
                className='responsive-bar'
                data={[data]}
                keys={Object.keys(data)}
                indexBy="hover"
                margin={{
                    "top": 0,
                    "right": 0,
                    "bottom": 0,
                    "left": 0
                }}
                padding={0.3}
                layout="horizontal"
                colors="category10"
                colorBy="id"
                reverse={false}
                borderColor="inherit:darker(1.6)"
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={null}
                enableGridY={false}
                labelSkipWidth={12}
                labelTextColor="inherit:darker(1.6)"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                legends={[
                    {
                        "dataFrom": "keys",
                        "anchor": "bottom",
                        "direction": "row",
                        "justify": false,
                        "translateX": 0,
                        "translateY": 0,
                        "itemsSpacing": 2,
                        "itemWidth": 90,
                        "itemHeight": 20,
                        "itemDirection": "left-to-right",
                        "itemOpacity": 0.85,
                        "symbolSize": 10,
                        "effects": [
                            {
                                "on": "hover",
                                "style": {
                                    "itemOpacity": 1
                                }
                            }
                        ]
                    }
                ]}
            />
          </div>
        </div>
    );
  }
}

export const mapStateToProps = ({ languageData, loadingLanguages }) => ({ languageData, loadingLanguages })

export default connect(mapStateToProps, null)(LanguageBarChart);