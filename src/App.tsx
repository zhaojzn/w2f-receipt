import React from 'react';
import CameraCapture from './CameraCapture';
const App = () => {
  return (
    
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-3xl font-bold underline">
          Receipt Scanner
        </h1>
        <CameraCapture />
      </div>
    </div>
  );
};

export default App;