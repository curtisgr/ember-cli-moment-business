(function() {
  /* globals define, business */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('business', { 'default': Business });
})();
