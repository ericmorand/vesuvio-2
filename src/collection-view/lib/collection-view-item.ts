import {CollectionView} from './collection-view';

/**
 * The visual representation for a single data element in a collection view.
 *
 * @class CollectionViewItem
 */
export class CollectionViewItem {
    readonly collectionView: CollectionView;

    constructor(collectionView) {
        this.collectionView = collectionView;
    }
}