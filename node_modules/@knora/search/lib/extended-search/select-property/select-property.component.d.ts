import { OnDestroy, OnInit } from '@angular/core';
import { Properties, Property, PropertyWithValue, ResourceClass } from '@knora/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SpecifyPropertyValueComponent } from './specify-property-value/specify-property-value.component';
export declare class SelectPropertyComponent implements OnInit, OnDestroy {
    private fb;
    formGroup: FormGroup;
    index: number;
    properties: Properties;
    _activeResourceClass: ResourceClass;
    activeResourceClass: ResourceClass;
    specifyPropertyValue: SpecifyPropertyValueComponent;
    private _properties;
    propertiesAsArray: Array<Property>;
    propertySelected: Property;
    form: FormGroup;
    propIndex: string;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Indicates if property can be used as a sort criterion.
     * Property has to have cardinality or max cardinality 1 for the chosen resource class.
     *
     * We cannot sort by properties whose cardinality is greater than 1.
     * Return boolean
     */
    sortCriterion(): boolean;
    /**
     * Updates the properties array that is accessed by the template.
     */
    private updatePropertiesArray;
    /**
     * Returns the selected property with the specified value.
     */
    getPropertySelectedWithValue(): PropertyWithValue;
}
