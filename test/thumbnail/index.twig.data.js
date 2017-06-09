/**
 *
 * @param renderer {{twig: Twig, render: Function}}
 * @returns {{demo: {title: string, class: string}, fixtures: Array}}
 */
module.exports = function (renderer) {
  let fixtures = require('./fixtures')(renderer);

  return {
    demo: {
      title: 'thumbnail demo',
      class: 'thumbnail--demo'
    },
    fixtures: fixtures
  };
};
