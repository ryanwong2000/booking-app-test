import React from 'react';

export default function FinalCheckout(props) {
  const PRICE_WEEKDAYS = 100;
  const PRICE_WEEKENDS = 150;

  const getTotal = (date, hours, time, priceWeekdays, priceWeekends) => {
    const dayOfWeek = new Date(date).getDay();
    console.log('day', dayOfWeek);
    //check for overlap between a weekday and weekends
    if (
      Number(time.substring(0, 2)) + Number(hours) > 24 &&
      (dayOfWeek === 4 || dayOfWeek === 6)
    ) {
      let hoursWeekday, hoursWeekend;
      //friday -> saturday
      if (dayOfWeek === 4) {
        hoursWeekday = 24 - Number(time.substring(0, 2));
        hoursWeekend = hours - hoursWeekday;
      }
      //sunday -> monday
      else {
        hoursWeekend = 24 - Number(time.substring(0, 2));
        hoursWeekday = hours - hoursWeekend;
      }
      console.log(hoursWeekday, hoursWeekend);
      return hoursWeekday * priceWeekdays + hoursWeekend * priceWeekends;
    } else {
      //check if date is weekend
      if (dayOfWeek === 6 || dayOfWeek === 5) return hours * priceWeekends;
      else return hours * priceWeekdays;
    }
  };

  const total = getTotal(
    props.date,
    props.hours,
    props.time,
    PRICE_WEEKDAYS,
    PRICE_WEEKENDS
  );
  return (
    <div>
      <h3>Total: ${total}</h3>
    </div>
  );
}
