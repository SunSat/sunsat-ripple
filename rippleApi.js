'use strict';
const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
    //server: 'wss://s1.ripple.com' // Public rippled server
    server: 'wss://s.altnet.rippletest.net:51233'
    //server: 'wss://s.devnet.rippletest.net:51233'
    //const api = new RippleAPI({server: 'wss://s.altnet.rippletest.net:51233'});
});

module.exports.ServerApi = api;