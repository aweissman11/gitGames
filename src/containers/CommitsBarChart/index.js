import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ResponsiveBar } from '@nivo/bar'

import SliderLoading from '../../components/SliderLoading';

export class CommitsBarChart extends Component {
  getDayOfWeek = (date) => {
    var dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'][dayOfWeek];
  }

  getWeeksArray = (commitsData) => {
    if (this.props.commitsData.length) {
      const { commitsData } = this.props;
      const weeksArray = commitsData.map( week => {
        const days = week.contributionDays.reduce( (acc, day) => {
          const dayName = this.getDayOfWeek(day.date)
          acc = { ...acc, [dayName]: day.contributionCount }
          return acc;
        }, {})
        // console.log('length of day:', week.firstDay.slice(5));
        const final = { ...days, firstDay: `week of ${week.firstDay.slice(5)}` }
        return final
      })
      return weeksArray
    }
  }

  getWeeksKeys = () => {
    if (this.props.commitsData.length) {
      const { commitsData } = this.props;

      let weeksList = []
      commitsData.forEach( week => {
        week.contributionDays.forEach( day => {
          weeksList = [...weeksList, day.date]
        })
      })
      return weeksList
    }
  }

  render() {
    return (
      this.props.loadingCommits.loadingCommits ? <SliderLoading msg='Looking up average commits per week' /> :
        <div className='bar-holder'>
          <div style={{margin: 'auto', width: '100%', height: '100%', fontSize: '1em', paddingLeft: '10%'}}>
            <ResponsiveBar
                onClick={() => this.forceUpdate()}
                data={this.getWeeksArray()}
                keys={['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']}
                indexBy="firstDay"
                margin={{
                    "top": 50,
                    "right": 130,
                    "bottom": 50,
                    "left": 60
                }}
                padding={0.3}
                colors="purple_orange"
                colorBy="id"
                borderColor="inherit:darker(1.6)"
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={{
                  "tickSize": 5,
                  "tickPadding": 5,
                  "tickRotation": 0,
                  "legend": "Commits",
                  "legendPosition": "middle",
                  "legendOffset": -50
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
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
                        "translateY": 0,
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
          <p className='weeks-label'>Weeks</p>
        </div>
    );
  }
}

export const mapStateToProps = ({ commitsData, loadingCommits }) => ({ commitsData, loadingCommits })

export default connect(mapStateToProps, null)(CommitsBarChart);