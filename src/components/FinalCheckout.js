import React from 'react';

export default function FinalCheckout(props) {
  return (
    <div>
      <h2>Number of hours: {props.hours}</h2>
      <h2>Date of booking: {props.date}</h2>
      <h2>Time of booking: {props.time}</h2>
    </div>
  );
}
