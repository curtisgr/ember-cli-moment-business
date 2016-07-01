# Ember-cli-moment-business

This is an Ember CLI addon for handling weekdays and weekends in moment.js. It also includes federal holidays for 2016 and 2017.

## Installation

```
ember install ember-cli-moment-business
```

## Usage

```
import * as business from 'ember-cli-moment-business';

// or

import {
  federalHolidays,
  getWeekendDays,
  getWeekDays,
  addWeekDays,
  subtractWeekDays,
  isWeekDay,
  isWeekendDay,
  isSaturday,
  isSunday,
  isFederalHoliday } from 'ember-cli-moment-business';
```

```
let fiftyWeekDaysIntoTheFuture = business.addWeekDays(moment(), 50);
```

## API

#### const federalHolidays

```
// federal holidays from 2016-07-04 through end of 2017

const federalHolidays = [
  {
    name: '',
    date: 'YYYY-MM-DD',
    notes: '' // e.g., if holiday is rolled over to Monday because it lands on weekend
  },
  // ...
];
```

#### getWeekendDays (startMoment, endMoment)

```
let weekendDays = business.getWeekendDays(moment(), moment()); // number of weekend days between two moments
```

#### getWeekDays (startMoment, endMoment)

```
let weekDays = business.getWeekDays(moment(), moment()); // number of week days between two moments
```

#### addWeekDays (moment, amount)

```
let momentPlusTwentyWeekdays = business.addWeekDays(moment(), 20);
```

#### subtractWeekDays (moment, amount)

```
let momentMinusTwentyWeekdays = business.subtractWeekDays(moment(), 20);
```

#### isWeekDay (moment)

```
let isWeekDay = business.isWeekDay(moment()); // true if not Saturday or Sunday
```

#### isWeekendDay (moment)

```
let isWeekendDay = business.isWeekendDay(moment()); // true if Saturday or Sunday
```

#### isSaturday (moment)

```
let isSaturday = business.isSaturday(moment()); // true if Saturday
```

#### isSunday (moment)

```
let isSunday = business.isSunday(moment()); // true if Sunday
```

#### isFederalHoliday (moment)

```
let isFederalHoliday = business.isFederalHoliday(moment()); // true if federal holiday
```

## Author

My name is Greg Curtis. I am a javascript developer working for https://www.casefleet.com/. We're using this addon to build a [legal calendaring](https://www.casefleet.com/deadline-tracking-with-legal-calendar) feature.
