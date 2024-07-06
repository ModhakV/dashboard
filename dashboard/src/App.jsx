import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard.jsx';
import OtherComponent from './dashboard/OtherComponent.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/other" element={<OtherComponent />} />
      </Routes>
    </Router>
  );
}

export default App;