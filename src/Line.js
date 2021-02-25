import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['2/15(月)', '2/16(火)', '2/17(水)', '2/18(木)', '2/19(金)'],
  datasets: [
    {
      label: 'My First dataset',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [64, 70, 69, 88, 100]
    }
  ]
};

const LineExample = () => {
  return (
    <div>
      <h2>nishikwn stress</h2>
      <Line data={data} />
    </div>
  );
}

export default LineExample;