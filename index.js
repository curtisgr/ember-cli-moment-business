'use strict';

module.exports = {
  name: 'ember-cli-moment-business',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/moment-business/dist/moment-business.js');
  }
};
