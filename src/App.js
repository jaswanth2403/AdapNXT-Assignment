import React from 'react';
import MultipleAxis from '../src/components/MultipleAxis/App';
import PieChart from '../src/components/PieChart/App';
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      
      <div className="multiple-axis">
        <MultipleAxis />
      </div>
      <div className="pie-chart">
        <PieChart />
      </div>
    </div>
  );
}

export default App;
