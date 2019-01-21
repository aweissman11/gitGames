import React, { Component } from 'react';
import { connect } from 'react-redux';

import LanguageBarChart from '../LanguageBarChart';
import RepoLanguageBar from '../../components/RepoLanguageBar';
import SliderLoading from '../../components/SliderLoading';

import './LanguageUsage.scss';

export class LanguageUsage extends Component {


  cleanedUpData = (i) => {
    if (this.props.languageData.Repositories[i]) {
      const { languageData } = this.props

      let data = Object.keys(languageData.Repositories[i]).reduce( (acc, lan) => {
        acc = {
          ...acc,
          [lan]: (languageData.Repositories[i][lan] * 100).toFixed(2),
          hover: 'percent used',
          name: languageData.Repositories[i].name
        }

        return acc;
      }, {})
    return data;
    }
  }

  render() {
    return (
      this.props.loadingLanguages.loadingLanguages ? <SliderLoading msg='Looking up language usage' /> :
      <div className='language-usage'>
        <h3>Language Usage Breakdown</h3>
        <div className='language-bar-chart-container'>
          <LanguageBarChart />
        </div>
        <div className='repo-language-bars-container'>
          {
            this.props.languageData.Repositories.map( (repo, i) => {
              return (
                <RepoLanguageBar repoData={this.cleanedUpData(i)}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export const mapStateToProps = ({
  languageData,
  loadingLanguages
}) => ({
  languageData,
  loadingLanguages
})


export default connect(mapStateToProps, null)(LanguageUsage);
