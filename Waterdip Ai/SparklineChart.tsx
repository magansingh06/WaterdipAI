import React from 'react';
import Chart from 'react-apexcharts';

interface SparklineChartProps {
  title: string;
  data: number[];
}

const SparklineChart: React.FC<SparklineChartProps> = ({ title, data }) => {
  const options = {
    chart: {
      id: 'sparkline-chart',
      sparkline: { enabled: true },
    },
    title: {
      text: title,
    },
  };

  const series = [
    {
      name: title,
      data: data,
    },
  ];

  return <Chart options={options} series={series} type="line" height={150} />;
};

export default SparklineChart;
