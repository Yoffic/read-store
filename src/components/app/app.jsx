import React from 'react';

import ErrorBoundary from '../error-boundary';
import Spinner from '../spinner';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    
    return (
      <ErrorBoundary>
        {loading && <Spinner/>}
        {!loading && <h2 className="display-4">Welcome to our Store!</h2>}
      </ErrorBoundary>
    );
  }
};
