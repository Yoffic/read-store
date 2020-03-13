import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="card text-center error-indicator">
      <div className="card-body">
        <h5 className="card-title text-danger h4">Ooops,</h5>
        <p className="card-text">Something went wrong. Let's try one more time</p>
        <button className="btn btn-info mt-4">Try Again</button>
      </div>
    </div>
  );
};

export default ErrorIndicator;