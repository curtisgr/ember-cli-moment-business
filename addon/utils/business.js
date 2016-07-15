// https://www.opm.gov/policy-data-oversight/snow-dismissal-procedures/federal-holidays

export const federalHolidays = [
  {
    date: '2016-07-04',
    name: 'Independence Day'
  },
  {
    date: '2016-09-05',
    name: 'Labor Day'
  },
  {
    date: '2016-10-10',
    name: 'Columbus Day'
  },
  {
    date: '2016-11-11',
    name: 'Veterans Day'
  },
  {
    date: '2016-11-24',
    name: 'Thanksgiving Day'
  },
  {
    date: '2016-12-26',
    name: 'Christmas Day',
    notes: 'December 25, 2016 (the legal public holiday for Christmas Day), falls on a Sunday. For most Federal employees, Monday, December 26, will be treated as a holiday for pay and leave purposes. (See section 3(a) of Executive order 11582, February 11, 1971.)'
  },
  {
    date: '2017-01-02',
    name: 'New Year\'s Day',
    notes: 'January 1, 2017 (the legal public holiday for New Year’s Day), falls on a Sunday. For most Federal employees, Monday, January 2, will be treated as a holiday for pay and leave purposes. (See section 3(a) of Executive order 11582, February 11, 1971.)'
  },
  {
    date: '2017-01-16',
    name: 'Birthday of Martin Luther King, Jr.'
  },
  {
    date: '2017-02-20',
    name: 'Washington’s Birthday'
  },
  {
    date: '2017-05-29',
    name: 'Memorial Day'
  },
  {
    date: '2017-07-04',
    name: 'Independence Day'
  },
  {
    date: '2017-09-04',
    name: 'Labor Day'
  },
  {
    date: '2017-10-09',
    name: 'Columbus Day'
  },
  {
    date: '2017-11-10',
    name: 'Veterans Day',
    notes: 'November 11, 2017 (the legal public holiday for Veterans Day), falls on a Saturday. For most Federal employees, Friday, November 10, will be treated as a holiday for pay and leave purposes. (See 5 U.S.C. 6103(b).)'
  },
  {
    date: '2017-11-23',
    name: 'Thanksgiving Day'
  },
  {
    date: '2017-12-25',
    name: 'Christmas Day'
  },
];

export function getWeekendDays (start, end) {
  let total = end.diff(start, 'days');
  let day = start.day();
  let count = 0;

  while (total > 0) {
    if (day === 0 || day === 6) {
      count++;
    }

    day = (day + 1) % 7;

    total--;
  }

  return count;
}

export function getWeekDays (start, end) {
  return end.diff(start, 'days') - this.getWeekendDays(start, end);
}

export function addWeekDays (start, amount) {
  let day = start.day();
  let count = 0;

  while (amount > 0) {
    day = (day + 1) % 7;

    if (day !== 0 && day !== 6) {
      amount--;
    }

    count++;
  }

  start.add(count, 'days');

  return start;
}

export function subtractWeekDays (start, amount) {
  let day = start.day();
  let count = 0;

  while (amount > 0) {
    day = day === 0 ? (day + 6) % 7 : (day - 1) % 7;

    if (day !== 0 && day !== 6) {
      amount--;
    }

    count++;
  }

  start.subtract(count, 'days');

  return start;
}


export function isWeekDay (moment) {
  return moment.isoWeekday() < 6;
}

export function isWeekendDay (moment) {
  return moment.isoWeekday() > 5;
}

export function isSaturday (moment) {
  return moment.isoWeekday() === 6;
}

export function isSunday (moment) {
  return moment.isoWeekday() === 7;
}

export function isFederalHoliday (moment) {
  let isFederalHoliday = false;

  federalHolidays.forEach( (holiday) => {
    if (moment.format('YYYY-MM-DD') === holiday.date) {
      isFederalHoliday = true;
    }
  });

  return isFederalHoliday;
}
