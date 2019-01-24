import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ResponsiveBar } from '@nivo/bar'

import './CommitsBarChart.scss';

export class CommitsBarChart extends Component {
  getDayOfWeek = (date) => {
    var dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : ['Su', 'M', 'Tu', 'W', 'T', 'F', 'S'][dayOfWeek];
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
        <div className='commits-bar-chart'>
          <h3>Commits broken down per week and per weekday</h3>
          <div className='commits-bar-box'>
            <div className='commits-bar-container' >
              <ResponsiveBar
                  className='responsive-commits-bar'
                  onClick={() => this.forceUpdate()}
                  data={this.getWeeksArray()}
                  keys={['Su', 'F', 'Tu', 'W', 'T', 'M', 'S']}
                  indexBy="firstDay"
                  margin={{
                      "top": 50,
                      "right": 0,
                      "bottom": 50,
                      "left": 60
                  }}
                  padding={0.3}
                  colors="category10"
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
                  animate={false}
                  motionStiffness={90}
                  motionDamping={15}
                  legends={[
                      {
                          "dataFrom": "keys",
                          "anchor": "bottom",
                          "direction": "row",
                          "justify": false,
                          "translateX": 5,
                          "translateY": 30,
                          "itemsSpacing": 0,
                          "itemWidth": 35,
                          "itemHeight": 15,
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
            <p className='weeks-label'>Weeks</p>
          </div>
        </div>
    );
  }
}

export const mapStateToProps = ({ commitsData, loadingCommits }) => ({ commitsData, loadingCommits })

export default connect(mapStateToProps, null)(CommitsBarChart);