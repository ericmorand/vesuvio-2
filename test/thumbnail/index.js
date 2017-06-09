const React = require('react');
const ReactDOM = require('react-dom');

require('../../src/thumbnail');

// ReactDOM.render(
//   React.createElement('div'),
//   document.getElementById('app')
// );

const Riot = require('riot');

Riot.mount('#app', '*');

module.exports = {};
