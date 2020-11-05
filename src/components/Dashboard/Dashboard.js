import React, { Component } from 'react';
import Body from './Body';
import LeftNavigation from './LeftNavigation';
import './dashboard.scss';
import ToggleButton from './ToggleButton';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftNavOpen: false,
    };
  }
  toggleChange = () => {
    const { leftNavOpen } = this.state;
    this.setState({
      leftNavOpen: leftNavOpen ? false : true,
    });
  };
  render() {
    const {
      toggleChange,
      state: { leftNavOpen },
    } = this;
    return (
      <div className='dashboard-container'>
        <ToggleButton toggleChange={toggleChange} leftNavOpen={leftNavOpen} />
        <LeftNavigation leftNavOpen={leftNavOpen} />
        <Body />
      </div>
    );
  }
}

export default Dashboard;
