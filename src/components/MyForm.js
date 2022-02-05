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
              type="number"
              value={this.state.hours}
              min="0"
              max="10"
              onChange={(event) => this.handleChange(event, 'hours')}
              required
            />
          </div>
          <div>
            <label htmlFor="dateBooking" className="form-label">
              Choose the date for your booking
            </label>
            <input
              name="dateBooking"
              id="dateBooking"
              class="form-control col col-lg-2"
              type="date"
              onChange={(event) => this.handleChange(event, 'date')}
              required
            />
          </div>
          <div>
            <label htmlFor="timeBooking" className="form-label">
              Choose the time for your booking
            </label>
            <input
              name="timeBooking"
              id="timeBooking"
              class="form-control col col-lg-2"
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
