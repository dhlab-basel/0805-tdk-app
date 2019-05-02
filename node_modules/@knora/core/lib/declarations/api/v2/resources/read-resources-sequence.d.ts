import { ReadResource } from './read-resource';
import { OntologyInformation } from '../../../../services/v2/ontology-cache.service';
/**
 * Represents a sequence of resources.
 */
export declare class ReadResourcesSequence {
    readonly resources: Array<ReadResource>;
    readonly numberOfResources: number;
    /**
     * Information about the entities used in the given collection of `ReadResource`.
     */
    readonly ontologyInformation: OntologyInformation;
    /**
     *
     * @param {Array<ReadResource>} resources given sequence of resources.
     * @param {number} numberOfResources number of given resources.
     */
    constructor(resources: Array<ReadResource>, numberOfResources: number);
}
