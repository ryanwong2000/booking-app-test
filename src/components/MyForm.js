import React, { Component } from 'react';
import '../css/MyForm.css';
import FinalCheckout from './FinalCheckout';

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      date: new Date(),
      time: new Date()
    };
  }

  priceWeekdays = 100;
  priceWeekends = 150;

  render() {
    return (
      <div>
        <form className="MyForm">
          <label for="hoursNeeded">
            Enter the number of hours needed for your booking
          </label>
          <br />
          <input
            name="hoursNeeded"
            id="hoursNeeded"
            type="number"
            value={this.state.hours}
            required
          />
          <br />
          <label for="dateBooking">Choose the date for your booking</label>
          <br />
          <input name="dateBooking" id="dateBooking" type="date" required />
          <br />
          <label for="timeBooking">Choose the time for your booking</label>
          <br />
          <input name="timeBooking" id="timeBooking" type="time" required />
        </form>
        <FinalCheckout
          hours={this.state.hours}
          date={this.state.date.toDateString()}
          time={this.state.time.toTimeString()}
        />
      </div>
    );
  }
}
