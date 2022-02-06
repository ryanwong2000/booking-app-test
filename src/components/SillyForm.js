import React, { Component } from 'react';
import '../css/MyForm.css';
import FinalCheckout from './FinalCheckout';

export default class SillyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      hoursDisp: 0,
      date: this.randomDate(),
      time: this.randomTime(),
      stopped: false
    };
  }

  randomDate = () => {
    const start = new Date();
    const end = new Date(2030, 0, 1);
    const random = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    console.log(random.toISOString().split('T')[0]);
    return random.toISOString().split('T')[0];
  };

  randomTime = () => {
    const hour = Math.floor(Math.random() * 24).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    }); //ensures 2 digits for hour (ex: 02:13)
    const min = Math.floor(Math.random() * 60).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });
    return `${hour}:${min}`;
  };

  handleChange = (event, fieldName) => {
    switch (fieldName) {
      //handle set hours
      case 'hours':
        if (!this.state.stopped) {
          clearInterval(this.timeout);
          this.setState({ stopped: true, hours: this.state.hoursDisp });
        } else {
          this.setState({ stopped: false });
          this.startCycle();
        }
        break;

      //handle random datetime
      case 'dateTime':
        this.setState({
          date: this.randomDate(),
          time: this.randomTime()
        });
        break;
      default:
        return;
    }
  };

  startCycle = () => {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.hoursDisp;
      this.setState({ hoursDisp: (currentIdx + 1) % 11 });
    }, 100);
  };

  //set interval to go through the numbers 0-10
  componentDidMount = () => {
    this.startCycle();
  };

  render() {
    return (
      <div>
        <form className="MyForm">
          <div>
            <label htmlFor="hoursNeeded">
              Choose the number of hours needed for your booking
            </label>
            <br />

            <p style={{ margin: 3 }}>
              <span style={{ padding: '10' }}>{this.state.hoursDisp}</span>
              &nbsp;
              <button
                type="button"
                onClick={(event) => this.handleChange(event, 'hours')}
              >
                {this.state.stopped ? 'Try Again' : 'Stop'}
              </button>
            </p>
          </div>
          <div>
            <label htmlFor="dateTimeBooking">
              Is this when you want your booking?
            </label>
            <br />
            <p>
              {this.state.date} @ {this.state.time}
              <button
                type="button"
                onClick={(event) => this.handleChange(event, 'dateTime')}
                style={{ margin: '0px 8px' }}
              >
                No
              </button>
            </p>
          </div>
        </form>

        <FinalCheckout
          hours={this.state.hours}
          date={this.state.date}
          time={this.state.time}
        />
      </div>
    );
  }
}
