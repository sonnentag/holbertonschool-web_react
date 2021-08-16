import React from 'react';

function WithLogging(WrappedComponent) {
  class WithLogging extends React.Component {}
  WithLogging.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`

  return class extends React.Component {
    constructor(props) { super(props); }
    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`)
    }
    componentWillUnmount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`)
    }
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default WithLogging
