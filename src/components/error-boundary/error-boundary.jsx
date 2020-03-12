import React from 'react';

import ErrorIndicator from '../error-indicator';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;

    return (
      <>
      {hasError && <ErrorIndicator />}
      {!hasError && this.props.children}
      </>
    );
  }
};
