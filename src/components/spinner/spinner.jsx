import React from 'react';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="spinner-grow text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;