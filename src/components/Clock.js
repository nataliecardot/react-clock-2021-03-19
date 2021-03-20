import React, { Component } from 'react';
import Clock from 'react-live-clock';
import { Switch } from 'antd';
import moment from 'moment';
import './Clock.css';

class Time extends Component {
  // Using class field declaration https://www.robinwieruch.de/react-state-without-constructor
  state = { todaysDate: false };

  // Also public class fields syntax. Eliminates the need to manually bind this in the contructor See https://www.peterbe.com/plog/public-class-fields and https://egghead.io/lessons/javascript-public-class-fields-with-react-components - public class fields: name of property + equals operator + expression we want to have it initialized to when each instance is being initialized
  toggleSwitch = () => {
    this.setState({
      todaysDate: !this.state.todaysDate,
    });
  };

  render() {
    return (
      <>
        <div className="navbar">
          React Clock
          <Switch onClick={this.toggleSwitch} className="toggle" />
        </div>
        <div className="clock-bg">
          <Clock format={'h:mm:ssa'} ticking={true} timezone={'US/Pacific'} />
        </div>
        <div className="toggleDate">
          {this.state.todaysDate && moment().format('MMMM Do YYYY')}
        </div>
      </>
    );
  }
}

export default Time;
