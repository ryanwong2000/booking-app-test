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

  handleChange = (event, fieldName) => {
    console.log(fieldName, event.target.value, typeof event.target.value);
    this.setState({
      [fieldName]: event.target.value
    });
  };

  render() {
    return (
<<<<<<< HEAD
      <div>
        <form className="MyForm">
          <div>
            <label htmlFor="hoursNeeded">
              Enter the number of hours needed for your booking
            </label>
            <br />
            <input
              name="hoursNeeded"
              id="hoursNeeded"
=======
      <div className="container">
        <form>
          <div>
            <label htmlFor="hoursNeeded" className="form-label">
              Enter the number of hours needed for your booking{' '}
              <small>(Max: 10 hours)</small>
            </label>
            <input
              name="hoursNeeded"
              id="hoursNeeded"
              class="form-control col col-lg-2"
>>>>>>> 76725d05acb08d22e38f70bb56dca3d5fbc3f3b5
              type="number"
              value={this.state.hours}
              min="0"
              max="10"
              onChange={(event) => this.handleChange(event, 'hours')}
              required
            />
<<<<<<< HEAD
            <small> (Max: 10 hours)</small>
          </div>
          <div>
            <label htmlFor="dateBooking">
              Choose the date for your booking
            </label>
            <br />
            <input
              name="dateBooking"
              id="dateBooking"
=======
          </div>
          <div>
            <label htmlFor="dateBooking" className="form-label">
              Choose the date for your booking
            </label>
            <input
              name="dateBooking"
              id="dateBooking"
              class="form-control col col-lg-2"
>>>>>>> 76725d05acb08d22e38f70bb56dca3d5fbc3f3b5
              type="date"
              onChange={(event) => this.handleChange(event, 'date')}
              required
            />
          </div>
          <div>
<<<<<<< HEAD
            <label htmlFor="timeBooking">
              Choose the time for your booking
            </label>
            <br />
            <input
              name="timeBooking"
              id="timeBooking"
=======
            <label htmlFor="timeBooking" className="form-label">
              Choose the time for your booking
            </label>
            <input
              name="timeBooking"
              id="timeBooking"
              class="form-control col col-lg-2"
>>>>>>> 76725d05acb08d22e38f70bb56dca3d5fbc3f3b5
              type="time"
              onChange={(event) => this.handleChange(event, 'time')}
              required
            />
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
