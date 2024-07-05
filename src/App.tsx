import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'; // Your main component
import ResultPage from './pages/ResultPage'; // The new page to display the response

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/response" element={<ResultPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;