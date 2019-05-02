import { ReadGeomValue, ReadResource } from '../../../';
/**
 * Represents a region.
 * Contains a reference to the resource representing the region and its geometries.
 */
export declare class ImageRegion {
    readonly regionResource: ReadResource;
    /**
     *
     * @param {ReadResource} regionResource a resource of type Region
     */
    constructor(regionResource: ReadResource);
    /**
     * Get all geometry information belonging to this region.
     *
     * @returns {ReadGeomValue[]}
     */
    getGeometries(): ReadGeomValue[];
}
