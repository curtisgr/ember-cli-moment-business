function containedPeriodicValues (start, end, value, period) {
  // Inclusive start; exclusive end
  if (start === end) {
    return 0;
  }

  // Flip our interval if it isn't ordered properly
  if (start > end) {
    var newEnd = start;
    start = end;
    end = newEnd;
  }

  // Make our interval have an exclusive end
  end--;

  var nearest = nearestPeriodicValue(start, value, period);

  // Ensure that the nearest value is in front of the start
  // of the interval
  if (nearest - start < 0) {
    nearest += period;
  }

  // If we can't even reach the first value, then it is 0
  if (nearest - start > end - start) {
    return 0;
  }

  // Otherwise, we have reached it, so we start with 1.
  // Then we add one for every full period in our interval
  else {
    return 1 + parseInt((end - nearest) / period);
  }
};

function skippedPeriodicValues (start, distance, value, period) {
  var nearest = nearestPeriodicValue(start, value, period);

  // Make the algorithm inclusive. If the distance is 0 and we're
  // on the nearest value, then we don't count it.
  if (nearest === start && distance === 0) {
    return 0;
  }

  // If our nearest value is behind the start, or is the start,
  // then push it to the next value
  if (nearest - start < 0) {
    nearest = nearest + period;
  }

  // No values were skipped if the nearest is shorter than the distance
  if (nearest - start > distance) {
    return 0;
  } else {
    // Determine how many 'skipped intervals' there were. Skipped intervals can be
    // thought of a period-1 function, as they do not contribute to the total value.
    return 1 + parseInt((distance - nearest) / (period - 1));
  }
};

export function weekDays (startMoment, endMoment) {
  var start = undefined,
      end = undefined;
  var reverse = endMoment.isBefore(startMoment);
  if (reverse) {
    start = endMoment;
    end = startMoment;
  } else {
    start = startMoment;
    end = endMoment;
  }

  var startDay = start.day();
  var totalDays = Math.abs(end.diff(start, "days"));
  var containedSundays = containedPeriodicValues(startDay, totalDays + startDay, 0, 7);
  var containedSaturdays = containedPeriodicValues(startDay, totalDays + startDay, 6, 7);
  var coefficient = reverse ? -1 : 1;

  return coefficient * (totalDays - (containedSaturdays + containedSundays));
};

export function weekendDays (startMoment, endMoment) {
  var totalDaysDiff = endMoment.diff(startMoment, "days");
  var weekDays = this.weekDays(startMoment, endMoment);

  return totalDaysDiff - weekDays;
};

export function addWeekDays (moment, amount) {
  if (amount === 0 || isNaN(amount)) {
    return moment;
  }

  var sign = determineSign(amount);
  var day = moment.day();
  var absIncrement = Math.abs(amount);

  var days = 0;

  if (day === 0 && sign === -1) {
    days = 1;
  } else if (day === 6 && sign === 1) {
    days = 1;
  }

  // Add padding for weekends.
  var paddedAbsIncrement = absIncrement;
  if (day !== 0 && day !== 6 && sign > 0) {
    paddedAbsIncrement += day;
  } else if (day !== 0 && day !== 6 && sign < 0) {
    paddedAbsIncrement += 6 - day;
  }
  var weekendsInbetween = Math.max(Math.floor(paddedAbsIncrement / 5) - 1, 0) + (paddedAbsIncrement > 5 && paddedAbsIncrement % 5 > 0 ? 1 : 0);

  // Add the increment and number of weekends.
  days += absIncrement + weekendsInbetween * 2;

  moment.add(sign * days, "days");
  return moment;
};

export function subtractWeekDays (moment, amount) {
  return this.addWeekDays(moment, -amount);
};

export function isWeekDay (moment) {
  return moment.isoWeekday() < 6;
};

export function isWeekendDay (moment) {
  return moment.isoWeekday() > 5;
};
