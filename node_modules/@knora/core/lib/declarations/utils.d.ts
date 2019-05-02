export declare class Utils {
    /**
     * A regex to validate Email address.
     *
     * @type {RegExp}
     */
    static readonly RegexEmail: RegExp;
    /**
     * A regex to validate Username.
     *
     * @type {RegExp}
     */
    static readonly RegexUsername: RegExp;
    /**
     * A regex to validate URLs.
     *
     * @type {RegExp}
     */
    static readonly RegexUrl: RegExp;
    /**
     * A regex to validate Passwords
     *
     * @type {RegExp}
     */
    static readonly RegexPassword: RegExp;
    /**
     * A regex to validate Hexadecimal values
     *
     * @type {RegExp}
     */
    static readonly RegexHex: RegExp;
    /**
     * A regex to validate shortname in projects
     *
     * @type {RegExp}
     */
    static readonly RegexShortname: RegExp;
    /**
     * Lambda function eliminating duplicates in a collection to be passed to [[filter]].
     *
     * @param elem element of an Array that is currently being looked at.
     * @param index current elements index.
     * @param self reference to the whole Array.
     * @returns {boolean} true if the same element does not already exist in the Array.
     */
    static filterOutDuplicates: (elem: any, index: number, self: any) => boolean;
    /**
     * Given a Knora entity IRI, gets the ontology Iri.
     *
     * @param {string} entityIri an entity Iri.
     * @return {string} the ontology IRI
     */
    static getOntologyIriFromEntityIri(entityIri: string): string;
    /**
     * Converts a complex knora-api entity Iri to a knora-api simple entity Iri.
     *
     * @param {string} complexEntityIri
     * @returns {string}
     */
    static convertComplexKnoraApiEntityIritoSimple(complexEntityIri: string): string;
}
