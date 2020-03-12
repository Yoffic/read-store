import React from 'react';

const ErrorIndicator = () => {
  return (
    <div className="card-text-center">
      <div className="card-body">
        <h5 className="card-title">Ooops,</h5>
        <p className="card-text">Something went wrong. Let's try one more time</p>
        <a href="/" class="btn btn-primary">Try Again</a>
      </div>
    </div>
  );
};

export default ErrorIndicator;