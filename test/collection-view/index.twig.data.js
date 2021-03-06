/**
 *
 * @param renderer {{twig: Twig, render: Function}}
 * @returns {{demo: {title: string, class: string}, fixtures: Array}}
 */
module.exports = function (renderer) {
  let fixtures = require('./fixtures')(renderer);

  return {
    demo: {
      title: 'collection-view demo',
      class: 'collection-view--demo'
    },
    fixtures: fixtures
  };
};
