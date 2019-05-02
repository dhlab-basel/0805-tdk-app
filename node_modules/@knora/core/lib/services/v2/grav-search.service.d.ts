import { SearchParamsService } from './search-params.service';
import { PropertyWithValue } from '../../declarations/api/operators';
/**
 * Create GravSearch queries from provided parameters.
 */
export declare class GravsearchGenerationService {
    private _searchParamsService;
    /**
     * @ignore
     *
     * Map of complex knora-api value types to simple ones.
     * Use computed property name: http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer.
     */
    static typeConversionComplexToSimple: {
        'http://api.knora.org/ontology/knora-api/v2#IntValue': string;
        'http://api.knora.org/ontology/knora-api/v2#DecimalValue': string;
        'http://api.knora.org/ontology/knora-api/v2#BooleanValue': string;
        'http://api.knora.org/ontology/knora-api/v2#TextValue': string;
        'http://api.knora.org/ontology/knora-api/v2#DateValue': string;
        'http://api.knora.org/ontology/knora-api/v2#IntervalValue': string;
        'http://api.knora.org/ontology/knora-api/v2#GeomValue': string;
        'http://api.knora.org/ontology/knora-api/v2#ColorValue': string;
        'http://api.knora.org/ontology/knora-api/v2#GeonameValue': string;
        'http://api.knora.org/ontology/knora-api/v2#UriValue': string;
        'http://api.knora.org/ontology/knora-api/v2#StillImageFileValue': string;
        'http://api.knora.org/ontology/knora-api/v2#FileValue': string;
        'http://api.knora.org/ontology/knora-api/v2#MovingImageFileValue': string;
        'http://api.knora.org/ontology/knora-api/v2#DDDFileValue': string;
        'http://api.knora.org/ontology/knora-api/v2#AudioFileValue': string;
        'http://api.knora.org/ontology/knora-api/v2#DocumentFileValue': string;
        'http://api.knora.org/ontology/knora-api/v2#TextFileValue': string;
        'http://api.knora.org/ontology/knora-api/v2#ListValue': string;
    };
    constructor(_searchParamsService: SearchParamsService);
    /**
       * @private
       * Converts a complex type Iri to a simple type Iri.
       *
       * @param {string} complexType the Iri of a value type (knora-api complex).
       * @returns string - the corresponding Iri of the simple type (knora-api simple).
       */
    private convertComplexTypeToSimpleType;
    /**
     * Generates a Gravsearch query from the provided arguments.
     *
     * @param {PropertyWithValue[]} properties the properties specified by the user.
     * @param {string} [mainResourceClassOption] the class of the main resource, if specified.
     * @param {number} offset the offset to be used (nth page of results).
     * @returns string - a KnarQL query string.
     */
    createGravsearchQuery(properties: PropertyWithValue[], mainResourceClassOption?: string, offset?: number): string;
}
