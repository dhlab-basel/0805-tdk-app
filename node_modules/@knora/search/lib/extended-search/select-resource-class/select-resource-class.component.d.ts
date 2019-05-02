import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResourceClass } from '@knora/core';
export declare class SelectResourceClassComponent implements OnInit, OnChanges {
    private fb;
    formGroup: FormGroup;
    resourceClasses: Array<ResourceClass>;
    resourceClassSelectedEvent: EventEmitter<string>;
    private _resourceClasses;
    private resourceClassSelected;
    form: FormGroup;
    constructor(fb: FormBuilder);
    /**
     * Returns the Iri of the selected resource class.
     *
     * @returns the Iri of the selected resource class or false in case no resource class is selected.
     */
    getResourceClassSelected(): any;
    /**
     * Initalizes the FormGroup for the resource class selection.
     * The initial value is set to null.
     */
    private initForm;
    ngOnInit(): void;
    ngOnChanges(): void;
}
