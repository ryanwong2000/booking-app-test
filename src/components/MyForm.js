import React, { Component } from 'react';
import '../css/MyForm.css';
import FinalCheckout from './FinalCheckout';

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      date: '',
      time: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  priceWeekdays = 100;
  priceWeekends = 150;

  handleChange = (event, fieldName) => {
    console.log(fieldName, event.target.value);
    this.setState({
      [fieldName]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form className="MyForm">
          <label htmlFor="hoursNeeded">
            Enter the number of hours needed for your booking
          </label>
          <br />
          <input
            name="hoursNeeded"
            id="hoursNeeded"
            type="number"
            value={this.state.hours}
            onChange={(event) => this.handleChange(event, 'hours')}
            required
          />
          <br />
          <label htmlFor="dateBooking">Choose the date for your booking</label>
          <br />
          <input
            name="dateBooking"
            id="dateBooking"
            type="date"
            onChange={(event) => this.handleChange(event, 'date')}
            required
          />
          <br />
          <label htmlFor="timeBooking">Choose the time for your booking</label>
          <br />
          <input
            name="timeBooking"
            id="timeBooking"
            type="time"
            onChange={(event) => this.handleChange(event, 'time')}
            required
          />
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
