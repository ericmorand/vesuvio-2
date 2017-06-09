import {CollectionView} from './collection-view';
import {CollectionViewItem} from './collection-view-item';
import {IndexPath} from './index-path';

/**
 * A set of methods that a data source object implements to provide the information and view objects that a collection view requires to present content.
 *
 * @interface CollectionViewDataSource
 */
export interface CollectionViewDataSource {
    /**
     * Asks your data source object to provide the total number of sections.
     *
     * @function
     * @name CollectionViewDataSource#numberOfSections
     * @param {CollectionView} collectionView The collection view requesting the information.
     * @returns {number} The number of sections in the specified collection view.
     */
    numberOfSections(collectionView: CollectionView): number;

    /**
     * Asks your data source object to provide the number of items in the specified section.
     *
     * @function
     * @name CollectionViewDataSource#numberOfItemsInSection
     * @param {CollectionView} collectionView The collection view requesting the information.
     * @param {number} section The index number of the section. Section indexes are zero based.
     * @returns {number} The number of items in the specified section.
     */
    numberOfItemsInSection(collectionView: CollectionView, section: number): number;

    /**
     * Asks your data source object to provide the item at the specified location in the collection view.
     *
     * All data source objects must implement this method. Your implementation is responsible for creating, configuring, and returning the appropriate item object based on the specified index path. You do this by calling the makeItem() method of the collection view to retrieve an empty item object of the appropriate type. After receiving the item object, update its properties with the data from your app’s data structures and return it. You do not need to set the frame of an item’s view from this method. The collection view gets the item’s location and other layout-related attributes from the layout object during a separate step.
     *
     * @function
     * @name CollectionViewDataSource#itemForRepresentedObjectAt
     * @param {CollectionView} collectionView The collection view requesting the information.
     * @param {Array<number>} indexPath The index path that specifies the location of the item. This index path contains both the section index and the item index within that section.
     * @returns {CollectionViewItem} A configured item object. You must not return falsy from this function.
     */
    itemForRepresentedObjectAt(collectionView: CollectionView, indexPath: Array<number>): CollectionViewItem;
}