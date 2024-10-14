import React from 'react';
import Chart from 'react-apexcharts';

const VisitorsChart: React.FC = () => {
  const options = {
    chart: {
      id: 'visitors-time-series',
      type: 'line',
    },
    xaxis: {
      type: 'datetime',
    },
    title: {
      text: 'Number of Visitors Per Day',
    },
  };

  const series = [
    {
      name: 'Visitors',
      data: [], // Data will be fetched and populated
    },
  ];

  return <Chart options={options} series={series} type="line" height={350} />;
};

export default VisitorsChart;
