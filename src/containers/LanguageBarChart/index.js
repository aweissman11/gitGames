import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ResponsiveBar } from '@nivo/bar'

import './LanguageBarChart.css';
import SliderLoading from '../../components/SliderLoading';

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
    // return {
    //   "HTML": "0.47",
    //   "hover": "percent used",
    //   "CSS": "0.61",
    //   "JavaScript": "98.62",
    //   "Roff": "0.04",
    //   "Ruby": "0.26",
    // }
  }


  render() {
    let data = this.cleanedUpData()

    return (
      this.props.loadingLanguages.loadingLanguages ? <SliderLoading msg='Looking up language usage' /> :
        <div className='bar-holder'>
          <div style={{margin: 'auto', width: '70%', height: '300px', fontSize: '1em'}}>
            <ResponsiveBar
                className='responsive-bar'
                data={[data]}
                keys={Object.keys(data)}
                indexBy="hover"
                margin={{
                    "top": 50,
                    "right": 130,
                    "bottom": 50,
                    "left": 60
                }}
                padding={0.3}
                layout="horizontal"
                colors="blue_purple"
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
                        "anchor": "bottom-right",
                        "direction": "column",
                        "justify": false,
                        "translateX": 120,
                        "translateY": -55,
                        "itemsSpacing": 2,
                        "itemWidth": 100,
                        "itemHeight": 20,
                        "itemDirection": "left-to-right",
                        "itemOpacity": 0.85,
                        "symbolSize": 20,
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