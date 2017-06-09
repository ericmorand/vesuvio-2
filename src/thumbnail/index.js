const Riot = require('riot');

Riot.tag('Foo', require('./templates/index.html'), function(opts) {
console.log(opts);
});



// const React = require('react');
//
// class Foo extends React.Component {
//   render() {
//     return React.createElement('div', {
//       className: 'foo'
//     }, `Hello ${this.props.bar}`);
//   }
// }

module.exports = {};