import React from 'react';
import TodaysPlan from './TodaysPlan';

export default class TodaysPlanApp extends React.Component {
  render() {
    const { onButtonClick, hasPlan } = this.props;
    return (
     <div className="body">
       <TodaysPlan />
       <TodaysPlan />
       <TodaysPlan />
       <TodaysPlan />
       <TodaysPlan />
       <TodaysPlan />
     </div>
    );
  }
}
