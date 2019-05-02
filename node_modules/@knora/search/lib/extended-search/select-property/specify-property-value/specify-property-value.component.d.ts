import { OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComparisonOperator, ComparisonOperatorAndValue, KnoraConstants, Property, PropertyValue } from '@knora/core';
export declare class SpecifyPropertyValueComponent implements OnInit, OnChanges {
    private fb;
    KnoraConstants: typeof KnoraConstants;
    formGroup: FormGroup;
    propertyValueComponent: PropertyValue;
    property: Property;
    private _property;
    form: FormGroup;
    comparisonOperators: Array<ComparisonOperator>;
    comparisonOperatorSelected: ComparisonOperator;
    propertyValueType: any;
    constructor(fb: FormBuilder);
    /**
     * Resets the comparison operators for this._property.
     */
    resetComparisonOperators(): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    /**
     * Gets the specified comparison operator and value for the property.
     *
     * returns {ComparisonOperatorAndValue} the comparison operator and the specified value
     */
    getComparisonOperatorAndValueLiteralForProperty(): ComparisonOperatorAndValue;
}
