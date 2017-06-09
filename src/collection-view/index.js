const CollectionView = require('./lib/collection-view').CollectionView;

const Riot = require('riot');

module.exports = Riot.tag('collection-view', require('./templates/index.html'), function(opts) {
  let model = new CollectionView(opts.dataSource);

  model.reloadData();

  let sections = [];

  for (let i = 0; i < model.numberOfSections; i++) {
    let section = {
      index: i,
      items: []
    };

    let numberOfItems = model.numberOfItems(i);

    for (let j = 0; j < numberOfItems; j++) {
      section.items.push(model.item([i, j]));
    }

    sections.push(section);
  }

  this.update({
    sections: sections
  });
});