/**
 *
 * @param renderer {{twig: Twig, render: Function}}
 * @returns {[{title: string, content: {}}]}
 */
module.exports = function (renderer) {
  return [{
    title: 'Test case fixture',
    items: [
      {
        href: 'foo',
        label: 'foo'
      },
      {
        href: 'bar',
        label: 'bar'
      },
      {
        href: 'bar',
        label: 'bar',
        preview: 'bar'
      }
      ,
      {
        href: 'bar',
        label: 'lorem ipsum dolor sit amet',
        preview: 'bar'
      }
    ]
  }]
};
