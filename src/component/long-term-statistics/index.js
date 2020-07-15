/* eslint-disable max-len */
import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';
import getUserStatistics from './service';

import './style.scss';
import './media.scss';

class LineStatistics extends React.Component {
  constructor(props) {
    super(props);
    this.transformDate = this.transformDate.bind(this);
    this.chartData = this.chartData.bind(this);
    this.chartPieData = this.chartPieData.bind(this);

    this.state = {
      learnedWords: props.learnedWords,
      optional: props.optional,
    };
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    const { learnedWords, optional } = nextProps;
    const actualProps = {
      learnedWords,
      optional,
    };
    if (JSON.stringify(prevProps) !== JSON.stringify(actualProps)) {
      return {
        optional: actualProps.optional,
        learnedWords: actualProps.learnedWords,
      };
    }
    return null;
  }

  transformDate = (date) => {
    const correctDate = new Date(Number(date)).toLocaleDateString();
    return correctDate;
  }

  chartData = () => {
    const {
      dayAllWords,
      dayNewWords,
      dayDate,
    } = this.state.optional;

    const datesOfDays = dayDate.map((date) => this.transformDate(date));

    const data = {
      labels: datesOfDays,
      datasets: [
        {
          label: 'Количество изученных слов за день',
          backgroundColor: 'rgba(75,192,192,0.4)',
          pointBorderColor: 'rgb(52, 141, 141)',
          pointHoverRadius: 5,
          data: dayAllWords,
        },
        {
          label: 'Количество новых слов за день',
          backgroundColor: 'rgba(236, 67, 132,0.4)',
          pointBorderColor: 'rgb(236, 67, 132)',
          pointHoverRadius: 5,
          data: dayNewWords,
        },
      ],
    };
    return data;
  }

  chartPieData = () => {
    const { optional } = this.state;
    const AllWordsInDay = optional.dayAllWords;
    const NewWordsInDay = optional.dayNewWords;
    const NewWordsOfLastDay = NewWordsInDay[NewWordsInDay.length - 1];
    const wordsOfLastDay = AllWordsInDay[AllWordsInDay.length - 1];
    const percentOfNewWords = Math.ceil((NewWordsOfLastDay / wordsOfLastDay) * 100);
    const dayOldWords = wordsOfLastDay - NewWordsOfLastDay;
    const percentOfOldWords = Math.floor((dayOldWords / wordsOfLastDay) * 100);
    const data = {
      labels: [
        'Новые слова, %',
        'Старые слова, %',
      ],
      datasets: [{
        data: [percentOfNewWords, percentOfOldWords],
        backgroundColor: [
          '#77fa9e',
          '#f1f383',
        ],
        hoverBackgroundColor: [
          '#56f886',
          '#f6f86b',
        ],
      }],
    };
    return data;
  }

  render() {
    return (
      <div className='container'>
      <div className='statisticsWrapper'>
        <div className='graph'>
          <h2>График эффективности обучения</h2>

          <Line
            data={this.chartData}
            options={{
              responsive: true,
            }} />
        </div>
        <div className='statistics-field'>
          <h3>Общая статистика за весь период обучения</h3>
          <div className="long-statistics-content">
            <div className="long-statistics-name">Общее количество изученных слов:</div>
            <div className="long-statistics-value">{this.state.learnedWords}</div>
          </div>
          <div className='graph-pie'>
          <h3>Процентное соотношение новых и старых слов на {new Date(Number(this.state.optional.dayDate[6])).toLocaleDateString()}</h3>
            <Pie data={this.chartPieData} />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

const isLoading = (store) => store.statistics.isLoading;
const getStatisticsTotalWords = (store) => store.statistics.learnedWords;
const getStatisticsOptional = (store) => store.statistics.optional;

const mapStateToProps = (store) => ({
  isLoading: isLoading(store),
  learnedWords: getStatisticsTotalWords(store),
  optional: getStatisticsOptional(store),
});

const mapDispatchToProps = {
  getUserStatistics,
};

export default connect(mapStateToProps, mapDispatchToProps)(LineStatistics);
