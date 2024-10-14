import React from 'react';
import Chart from 'react-apexcharts';

const CountryChart: React.FC = () => {
  const options = {
    chart: {
      id: 'visitors-country',
      type: 'bar',
    },
    xaxis: {
      categories: [], // Country names will go here
    },
    title: {
      text: 'Number of Visitors by Country',
    },
  };

  const series = [
    {
      name: 'Visitors',
      data: [], // Data will be fetched and populated
    },
  ];

  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default CountryChart;
