const Riot = require('riot');

Riot.mount('test-view', require('../../src/collection-view/index'), {
  dataSource: {
    numberOfSections: function(collectionView) {
      return 2;
    },
    numberOfItemsInSection: function(collectionView, section) {
      return 5;
    },
    itemForRepresentedObjectAt: function(collectionView, indexPath) {
      let itemIndex = indexPath.pop();
      let sectionIndex = indexPath.pop();

      return {
        label: `${sectionIndex} - ${itemIndex}`
      }
    }
  }
});

module.exports = {};
