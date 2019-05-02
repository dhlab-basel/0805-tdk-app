import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OntologyCacheService, PropertyValue, ReadResource, SearchService, Value } from '@knora/core';
export declare class LinkValueComponent implements OnInit, OnDestroy, PropertyValue {
    private fb;
    private _searchService;
    private _cacheService;
    formGroup: FormGroup;
    type: string;
    form: FormGroup;
    resources: ReadResource[];
    private _restrictToResourceClass;
    restrictResourceClass: string;
    constructor(fb: FormBuilder, _searchService: SearchService, _cacheService: OntologyCacheService);
    /**
     * Displays a selected resource using its label.
     *
     * @param resource the resource to be displayed (or no selection yet).
     * @returns
     */
    displayResource(resource: ReadResource | null): string;
    /**
     * Search for resources whose labels contain the given search term, restricting to to the given properties object constraint.
     *
     * @param searchTerm
     */
    searchByLabel(searchTerm: string): void;
    /**
     * Checks that the selection is a [[ReadResource]].
     *
     * Surprisingly, [null] has to be returned if the value is valid: https://angular.io/guide/form-validation#custom-validators
     *
     * @param the form element whose value has to be checked.
     * @returns
     */
    validateResource(c: FormControl): {
        noResource: {
            value: any;
        };
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    getValue(): Value;
}
