import React, { Component } from 'react';

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
        <form>
          <label for="hoursNeeded">
            Enter the number of hours needed for your booking
          </label>
          <input
            name="hoursNeeded"
            type="number"
            value={this.state.hours}
          ></input>
          <label for="dateBooking">Choose the date for your booking</label>
          <input name="dateBooking" type="date" />
          <label for="timeBooking">Choose the time for your booking</label>
          <input name="timeBooking" type="time" />
        </form>
      </div>
    );
  }
}
