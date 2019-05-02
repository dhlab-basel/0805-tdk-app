/**
 * Represents a resource and its properties.
 */
var ReadResource = /** @class */ (function () {
    /**
     *
     * @param {string} id the resource's Iri.
     * @param {string} type the resource's type (class).
     * @param {string} label the resource's rdfs:label.
     * @param {Array<ReadResource>} incomingRegions regions pointing to this resource, if any (possibly to be queried by additional requests).
     * @param {Array<ReadResource>} incomingStillImageRepresentations still image representations pointing to this resource, if any (possibly to be queried by additional requests).
     * @param {Array<ReadResource>} incomingLinks resources pointing to this resource, if any (possibly to be queried by additional requests).
     * @param {StillImageRepresentation[]} stillImageRepresentationsToDisplay  still image representations to be displayed for this resource, if any (possibly to be queried by additional requests).
     * @param {ReadProperties} properties the resources's properties.
     */
    function ReadResource(id, type, label, 
    // TODO: we should use a more generic object here; or what's about incomingSequences?
    incomingRegions, 
    // TODO: we should use a more generic object here, something like incomingMedia or incomingFileRepresentation
    incomingStillImageRepresentations, incomingLinks, 
    // TODO: we should use a more generic object here, something like media or fileRepresentation
    stillImageRepresentationsToDisplay, 
    // TODO: the properties should be a list: Array<ReadProperties> or not?
    properties) {
        this.id = id;
        this.type = type;
        this.label = label;
        this.incomingRegions = incomingRegions;
        this.incomingStillImageRepresentations = incomingStillImageRepresentations;
        this.incomingLinks = incomingLinks;
        this.stillImageRepresentationsToDisplay = stillImageRepresentationsToDisplay;
        this.properties = properties;
    }
    return ReadResource;
}());
export { ReadResource };
/**
 * This is a temporary class, to test a new resource setup.
 * When it works, we will merge it with the ReadResource object
 */
var Resource = /** @class */ (function () {
    function Resource(id, type, label, incomingAnnotations, incomingFileRepresentations, incomingLinks, fileRepresentationsToDisplay, properties) {
        this.id = id;
        this.type = type;
        this.label = label;
        this.incomingAnnotations = incomingAnnotations;
        this.incomingFileRepresentations = incomingFileRepresentations;
        this.incomingLinks = incomingLinks;
        this.fileRepresentationsToDisplay = fileRepresentationsToDisplay;
        this.properties = properties;
    }
    return Resource;
}());
export { Resource };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmF0aW9ucy9hcGkvdjIvcmVzb3VyY2VzL3JlYWQtcmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7O0dBRUc7QUFDSDtJQUVJOzs7Ozs7Ozs7O09BVUc7SUFDSCxzQkFDb0IsRUFBVSxFQUNWLElBQVksRUFDWixLQUFhO0lBQzdCLHFGQUFxRjtJQUM5RSxlQUFvQztJQUMzQyw2R0FBNkc7SUFDdEcsaUNBQXNELEVBQ3RELGFBQWtDO0lBQ3pDLDZGQUE2RjtJQUN0RixrQ0FBOEQ7SUFDckUsdUVBQXVFO0lBQ3ZELFVBQTJCO1FBWDNCLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUV0QixvQkFBZSxHQUFmLGVBQWUsQ0FBcUI7UUFFcEMsc0NBQWlDLEdBQWpDLGlDQUFpQyxDQUFxQjtRQUN0RCxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFFbEMsdUNBQWtDLEdBQWxDLGtDQUFrQyxDQUE0QjtRQUVyRCxlQUFVLEdBQVYsVUFBVSxDQUFpQjtJQUMvQyxDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDOztBQUVEOzs7R0FHRztBQUNIO0lBQ0ksa0JBQ29CLEVBQVUsRUFDVixJQUFZLEVBQ1osS0FBYSxFQUN0QixtQkFBb0MsRUFDcEMsMkJBQTRDLEVBQzVDLGFBQWtDLEVBQ2xDLDRCQUFpRCxFQUN4QyxVQUEyQjtRQVAzQixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDdEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFpQjtRQUNwQyxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQWlCO1FBQzVDLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtRQUNsQyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQXFCO1FBQ3hDLGVBQVUsR0FBVixVQUFVLENBQWlCO0lBQy9DLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQVhELElBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkUHJvcGVydGllcywgU3RpbGxJbWFnZVJlcHJlc2VudGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmVzb3VyY2UgYW5kIGl0cyBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgY2xhc3MgUmVhZFJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIHRoZSByZXNvdXJjZSdzIElyaS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSB0aGUgcmVzb3VyY2UncyB0eXBlIChjbGFzcykuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIHRoZSByZXNvdXJjZSdzIHJkZnM6bGFiZWwuXG4gICAgICogQHBhcmFtIHtBcnJheTxSZWFkUmVzb3VyY2U+fSBpbmNvbWluZ1JlZ2lvbnMgcmVnaW9ucyBwb2ludGluZyB0byB0aGlzIHJlc291cmNlLCBpZiBhbnkgKHBvc3NpYmx5IHRvIGJlIHF1ZXJpZWQgYnkgYWRkaXRpb25hbCByZXF1ZXN0cykuXG4gICAgICogQHBhcmFtIHtBcnJheTxSZWFkUmVzb3VyY2U+fSBpbmNvbWluZ1N0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMgc3RpbGwgaW1hZ2UgcmVwcmVzZW50YXRpb25zIHBvaW50aW5nIHRvIHRoaXMgcmVzb3VyY2UsIGlmIGFueSAocG9zc2libHkgdG8gYmUgcXVlcmllZCBieSBhZGRpdGlvbmFsIHJlcXVlc3RzKS5cbiAgICAgKiBAcGFyYW0ge0FycmF5PFJlYWRSZXNvdXJjZT59IGluY29taW5nTGlua3MgcmVzb3VyY2VzIHBvaW50aW5nIHRvIHRoaXMgcmVzb3VyY2UsIGlmIGFueSAocG9zc2libHkgdG8gYmUgcXVlcmllZCBieSBhZGRpdGlvbmFsIHJlcXVlc3RzKS5cbiAgICAgKiBAcGFyYW0ge1N0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbltdfSBzdGlsbEltYWdlUmVwcmVzZW50YXRpb25zVG9EaXNwbGF5ICBzdGlsbCBpbWFnZSByZXByZXNlbnRhdGlvbnMgdG8gYmUgZGlzcGxheWVkIGZvciB0aGlzIHJlc291cmNlLCBpZiBhbnkgKHBvc3NpYmx5IHRvIGJlIHF1ZXJpZWQgYnkgYWRkaXRpb25hbCByZXF1ZXN0cykuXG4gICAgICogQHBhcmFtIHtSZWFkUHJvcGVydGllc30gcHJvcGVydGllcyB0aGUgcmVzb3VyY2VzJ3MgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGlkOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyByZWFkb25seSB0eXBlOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBsYWJlbDogc3RyaW5nLFxuICAgICAgICAvLyBUT0RPOiB3ZSBzaG91bGQgdXNlIGEgbW9yZSBnZW5lcmljIG9iamVjdCBoZXJlOyBvciB3aGF0J3MgYWJvdXQgaW5jb21pbmdTZXF1ZW5jZXM/XG4gICAgICAgIHB1YmxpYyBpbmNvbWluZ1JlZ2lvbnM6IEFycmF5PFJlYWRSZXNvdXJjZT4sXG4gICAgICAgIC8vIFRPRE86IHdlIHNob3VsZCB1c2UgYSBtb3JlIGdlbmVyaWMgb2JqZWN0IGhlcmUsIHNvbWV0aGluZyBsaWtlIGluY29taW5nTWVkaWEgb3IgaW5jb21pbmdGaWxlUmVwcmVzZW50YXRpb25cbiAgICAgICAgcHVibGljIGluY29taW5nU3RpbGxJbWFnZVJlcHJlc2VudGF0aW9uczogQXJyYXk8UmVhZFJlc291cmNlPixcbiAgICAgICAgcHVibGljIGluY29taW5nTGlua3M6IEFycmF5PFJlYWRSZXNvdXJjZT4sXG4gICAgICAgIC8vIFRPRE86IHdlIHNob3VsZCB1c2UgYSBtb3JlIGdlbmVyaWMgb2JqZWN0IGhlcmUsIHNvbWV0aGluZyBsaWtlIG1lZGlhIG9yIGZpbGVSZXByZXNlbnRhdGlvblxuICAgICAgICBwdWJsaWMgc3RpbGxJbWFnZVJlcHJlc2VudGF0aW9uc1RvRGlzcGxheTogU3RpbGxJbWFnZVJlcHJlc2VudGF0aW9uW10sXG4gICAgICAgIC8vIFRPRE86IHRoZSBwcm9wZXJ0aWVzIHNob3VsZCBiZSBhIGxpc3Q6IEFycmF5PFJlYWRQcm9wZXJ0aWVzPiBvciBub3Q/XG4gICAgICAgIHB1YmxpYyByZWFkb25seSBwcm9wZXJ0aWVzPzogUmVhZFByb3BlcnRpZXMpIHtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBUaGlzIGlzIGEgdGVtcG9yYXJ5IGNsYXNzLCB0byB0ZXN0IGEgbmV3IHJlc291cmNlIHNldHVwLlxuICogV2hlbiBpdCB3b3Jrcywgd2Ugd2lsbCBtZXJnZSBpdCB3aXRoIHRoZSBSZWFkUmVzb3VyY2Ugb2JqZWN0XG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgdHlwZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgbGFiZWw6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGluY29taW5nQW5ub3RhdGlvbnM6IEFycmF5PFJlc291cmNlPixcbiAgICAgICAgcHVibGljIGluY29taW5nRmlsZVJlcHJlc2VudGF0aW9uczogQXJyYXk8UmVzb3VyY2U+LFxuICAgICAgICBwdWJsaWMgaW5jb21pbmdMaW5rczogQXJyYXk8UmVhZFJlc291cmNlPixcbiAgICAgICAgcHVibGljIGZpbGVSZXByZXNlbnRhdGlvbnNUb0Rpc3BsYXk6IEFycmF5PFJlYWRSZXNvdXJjZT4sXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBwcm9wZXJ0aWVzPzogUmVhZFByb3BlcnRpZXMpIHtcbiAgICB9XG59XG4iXX0=