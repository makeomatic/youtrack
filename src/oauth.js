const authorize = require('oauth2-implicit').run;
const defaults = require('lodash.defaults');
const assert = require('assert');

const defaultOpts = {
  // auth_uri: 'https://username.myjetbrains.com/hub/api/rest/oauth2/auth',
  // client_id: '00000000-0000-0000-0000-000000000000',
  // redirect_uri : 'defaults to current browser location',
  scope: ['YouTrack'],
  // basic state
  state: {
    location: window.location,
  },
};

module.exports = function init(opts = {}) {
  const finalizedOpts = defaults(opts, defaultOpts);

  assert(finalizedOpts.auth_uri, 'supply auth_uri');
  assert(finalizedOpts.client_id, 'supply client_id');

  return authorize(finalizedOpts);
};
