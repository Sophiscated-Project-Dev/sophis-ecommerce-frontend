const futureDate = new Date(2023, 0, 1, 0, 0, 0);

export function getTimeRemain(expiration = futureDate) {
  // expiration is a date object
  const currentTime = new Date(); // the current time

  // get time difference between the current time and expiration time. This difference will be in milli seconds
  const timeDifference = expiration.getTime() - currentTime.getTime();

  if (timeDifference <= 0) {
    return {
      daysRemaining: "",
      hoursRemaining: "",
      minutesRemaining: "",
      secondsRemaining: "",
    };
  }

  // convert the time difference in milli seconds to days, hours, minutes and seconds

  const oneDay = 24 * 60 * 60 * 1000; // milli seconds
  const oneHour = 60 * 60 * 1000; // milli seconds
  const oneMinute = 60 * 1000; // milli seconds
  const oneSecond = 1000; // milli seconds

  const daysRemaining = Math.floor(timeDifference / oneDay);
  const hoursRemaining = Math.floor((timeDifference % oneDay) / oneHour);
  const minutesRemaining = Math.floor((timeDifference % oneHour) / oneMinute);
  const secondsRemaining = Math.floor((timeDifference % oneMinute) / oneSecond);

  return {
    daysRemaining: format(daysRemaining),
    hoursRemaining: format(hoursRemaining),
    minutesRemaining: format(minutesRemaining),
    secondsRemaining: format(secondsRemaining),
  };
}

function format(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
}
