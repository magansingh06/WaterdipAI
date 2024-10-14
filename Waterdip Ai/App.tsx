import React, { useState } from 'react';
import DateSelector from './components/DateSelector';
import VisitorsChart from './components/VisitorsChart';
import CountryChart from './components/CountryChart';
import SparklineChart from './components/SparklineChart';

const App: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
    // Fetch data based on date range
  };

  return (
    <div className="App">
      <h1>Hotel Booking Dashboard</h1>
      <DateSelector onDateChange={handleDateChange} />
      <VisitorsChart />
      <CountryChart />
      <div>
        <SparklineChart title="Adult Visitors" data={[]} />
        <SparklineChart title="Children Visitors" data={[]} />
      </div>
    </div>
  );
};

export default App;
