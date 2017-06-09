import {CollectionViewDataSource} from './collection-view-data-source';
import {CollectionViewDelegate} from './collection-view-delegate';
// import {IndexPath} from './index-path';
// import {IndexSet} from './index-set';
import {ItemIdentifier} from './item-identifier';
import {CollectionViewItem} from "./collection-view-item";

/**
 * An ordered collection of data items displayed in a customizable layout.
 *
 * @class CollectionView
 */
export class CollectionView {
    /**
     * An object that provides data for the collection view.
     */
    dataSource: CollectionViewDataSource;

    /**
     * @type {number}
     */
    private _numberOfSections = 0;

    /**
     * The collection view’s delegate object.
     */
    delegate: CollectionViewDelegate;

    constructor(dataSource: CollectionViewDataSource, delegate?: CollectionViewDelegate) {
        this.dataSource = dataSource;
        this.delegate = delegate;
    }

    /**
     * Reloads all of the data for the collection view.
     */
    reloadData(): void {
        this._numberOfSections = this.dataSource.numberOfSections(this);

        let sections = [];

        for (let i = 0; i < this._numberOfSections; i++) {
            sections.push(i);
        }

        this.reloadSections(sections);
    }

    /**
     * Reloads the data in the specified sections of the collection view.
     *
     * @param sections The indexes of the sections that you want to reload. Specifying falsy for this parameter raises an exception.
     */
    reloadSections(sections: Array<number>): void {
        if (!sections) {
            throw 'reloadSections';
        }
    }

    /**
     * The number of sections in the collection view.
     *
     * @returns {number}
     */
    get numberOfSections(): number {
        return this._numberOfSections;
    }

    /**
     * Returns the number of items in the specified section.
     *
     * @todo: cache the number of items
     * @param {number} section
     * @return {number}
     */
    numberOfItems(section: number): number {
        return this.dataSource.numberOfItemsInSection(this, section);
    }

    /**
     * Returns the item associated with the specified index path.
     *
     * @param {Array<number>} indexPath
     * @return {CollectionViewItem}
     */
    item(indexPath: Array<number>): CollectionViewItem {
        return this.dataSource.itemForRepresentedObjectAt(this, indexPath);
    }

    /**
     * Creates or returns a reusable item object of the specified type.
     *
     * @param {ItemIdentifier} identifier The reuse identifier for the specified item. This is the identifier you specified when registering the item. This parameter must not be nil.
     * @param {Array<number>} indexPath The index path specifying the location of the item. The data source object receives this information in its
     itemForRepresentedObjectAt method and you should just pass it along.
     * @return {CollectionViewItem} A valid NSCollectionViewItem object.
     */
    makeItem(identifier: ItemIdentifier, indexPath: Array<number>) {

    }
}