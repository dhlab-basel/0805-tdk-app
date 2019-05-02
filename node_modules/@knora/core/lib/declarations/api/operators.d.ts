import { KnoraSchema } from './knora-constants';
import { Property } from '../../services';
/**
 * An abstract interface representing a comparison operator.
 * This interface is implemented for the supported comparison operators.
 */
export interface ComparisonOperator {
    type: string;
    label: string;
    getClassName(): string;
}
export declare class Equals implements ComparisonOperator {
    type: string;
    label: string;
    constructor();
    getClassName(): string;
}
export declare class NotEquals implements ComparisonOperator {
    type: string;
    label: string;
    constructor();
    getClassName(): string;
}
export declare class GreaterThanEquals implements ComparisonOperator {
    type: string;
    label: string;
    constructor();
    getClassName(): string;
}
export declare class GreaterThan implements ComparisonOperator {
    type: string;
    label: string;
    constructor();
    getClassName(): string;
}
export declare class LessThan implements ComparisonOperator {
    type: string;
    label: string;
    constructor();
    getClassName(): string;
}
export declare class LessThanEquals implements ComparisonOperator {
    type: string;
    label: string;
    constructor();
    getClassName(): string;
}
export declare class Exists implements ComparisonOperator {
    type: string;
    label: string;
    constructor();
    getClassName(): string;
}
export declare class Like implements ComparisonOperator {
    type: string;
    label: string;
    constructor();
    getClassName(): string;
}
export declare class Match implements ComparisonOperator {
    type: string;
    label: string;
    constructor();
    getClassName(): string;
}
/**
 * Combination of a comparison operator and a value literal or an IRI.
 * In case the comparison operator is 'Exists', no value is given.
 */
export declare class ComparisonOperatorAndValue {
    readonly comparisonOperator: ComparisonOperator;
    readonly value?: Value;
    constructor(comparisonOperator: ComparisonOperator, value?: Value);
}
/**
 * An abstract interface representing a value: an IRI or a literal.
 */
export interface Value {
    /**
     * Turns the value into a SPARQL string representation.
     *
     * @param schema indicates the Knora schema to be used.
     * @returns {string} SPARQL representation of the value.
     */
    toSparql(schema: KnoraSchema): string;
}
/**
 * Represents a property's value as a literal with the indication of its type.
 */
export declare class ValueLiteral implements Value {
    readonly value: string;
    readonly type: string;
    /**
     * Constructs a [ValueLiteral].
     *
     * @param {string} value the literal representation of the value.
     * @param {string} type the type of the value (making use of xsd).
     */
    constructor(value: string, type: string);
    /**
     * Creates a type annotated value literal to be used in a SPARQL query.
     *
     * @param schema indicates the Knora schema to be used.
     * @returns {string}
     */
    toSparql(schema: KnoraSchema): string;
}
/**
 * Represents an IRI.
 */
export declare class IRI implements Value {
    readonly iri: string;
    /**
     * Constructs an [IRI].
     *
     * @param {string} iri the IRI of a resource instance.
     */
    constructor(iri: string);
    /**
     * Creates a SPARQL representation of the IRI.
     *
     * @param schema indicates the Knora schema to be used.
     * @returns {string}
     */
    toSparql(schema: KnoraSchema): string;
}
/**
 * An abstract interface that represents a value.
 * This interface has to be implemented for all value types (value component classes).
 */
export interface PropertyValue {
    /**
     * Type of the value.
     */
    type: string;
    /**
     * Returns the value.
     *
     * @returns {Value}.
     */
    getValue(): Value;
}
/**
 * Represents a property, the specified comparison operator, and value.
 */
export declare class PropertyWithValue {
    readonly property: Property;
    readonly valueLiteral: ComparisonOperatorAndValue;
    readonly isSortCriterion: Boolean;
    /**
     * Constructs a [PropertyWithValue].
     *
     * @param {Property} property the specified property.
     * @param {ComparisonOperatorAndValue} valueLiteral the specified comparison operator and value.
     * @param isSortCriterion indicates if the property is used as a sort criterion.
     */
    constructor(property: Property, valueLiteral: ComparisonOperatorAndValue, isSortCriterion: Boolean);
}
/**
 * a list, which is used in the mat-autocomplete form field
 * contains objects with id and name. the id is usual the iri
 */
export interface AutocompleteItem {
    iri: string;
    name: string;
    label?: string;
}
