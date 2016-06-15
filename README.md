# Ember-cli-moment-business

This is an Ember CLI addon for handling weekdays and weekends in moment.js. The underlying code is based on https://github.com/jmeas/moment-business configured to function as an ES6 module.

## Installation

```
ember install ember-cli-moment-business
```

## Usage

```
import * as business from 'ember-cli-moment-business';

// or

import {
  weekDays,
  weekendDays,
  addWeekDays,
  subtractWeekDays,
  isWeekDay,
  isWeekendDay } from 'ember-cli-moment-business';
```

```
var fiftyWeekDaysIntoTheFuture = business.addWeekDays(moment(), 50);
```

## API

The public API is the same as https://github.com/jmeas/moment-business#api with two additions:

### isSaturday(moment)

true if moment is Saturday

### isSunday(moment)

true if moment is Sunday

## Author

My name is Greg Curtis. I am a javascript developer working for https://www.casefleet.com/.
