import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UiPage from '../screens/UiPage';

const WebNavigation: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="/details" element={<DetailsScreen />} /> */}
        <Route path="/uipage" element={<UiPage />} />
      </Routes>
    </Router>
  );
};

export default WebNavigation;
