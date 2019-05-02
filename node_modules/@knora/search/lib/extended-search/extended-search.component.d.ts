import { EventEmitter, OnInit, QueryList } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GravsearchGenerationService, OntologyCacheService, OntologyMetadata, Properties, ReadResourcesSequence, ResourceClass } from '@knora/core';
import { SelectPropertyComponent } from './select-property/select-property.component';
import { SelectResourceClassComponent } from './select-resource-class/select-resource-class.component';
/**
 * The extended search allows you to filter by project, by source type (resource class), or by the metadata (properties) of source types. Each filter can be standalone or combined. The metadata field can be precisely filtered with criteria such as "contains", "like", "equals to", "exists" or in case of a date value with "before" or "after". In addition, for a metadata field that is connected to another source type, it's possible to filter by this second source type. If you are looking for the source type "Photograph" with the metadata field "Photographer", which is connected to source type "Person", you can search for photograph(s) taken by person(s) who is born before February 1970. The result of this request will be an intersection of the two source types.
 */
export declare class ExtendedSearchComponent implements OnInit {
    private fb;
    private _route;
    private _router;
    private _cacheService;
    private _gravSearchService;
    /**
     * @param  {string} route Route to navigate after search. This route path should contain a component for search results.
     */
    route?: any;
    /**
     * @param  {boolean} toggleExtendedSearchForm Trigger toggle for extended search form.
     */
    toggleExtendedSearchForm: EventEmitter<boolean>;
    /**
     * @param  {string} gravsearch Send the gravsearch query back.
     */
    gravsearch: EventEmitter<string>;
    ontologies: Array<OntologyMetadata>;
    activeOntology: string;
    activeProperties: boolean[];
    resourceClasses: Array<ResourceClass>;
    activeResourceClass: ResourceClass;
    properties: Properties;
    result: ReadResourcesSequence;
    resourceClassComponent: SelectResourceClassComponent;
    propertyComponents: QueryList<SelectPropertyComponent>;
    form: FormGroup;
    formValid: boolean;
    constructor(fb: FormBuilder, _route: ActivatedRoute, _router: Router, _cacheService: OntologyCacheService, _gravSearchService: GravsearchGenerationService);
    ngOnInit(): void;
    /**
     * @ignore
     * Add a property to the search form.
     * @returns void
     */
    addProperty(): void;
    /**
     * @ignore
     * Remove the last property from the search form.
     * @returns void
     */
    removeProperty(): void;
    /**
     * @ignore
     * Gets all available ontologies for the search form.
     * @returns void
     */
    initializeOntologies(): void;
    /**
     * @ignore
     * Once an ontology has been selected, gets its classes and properties.
     * The classes and properties will be made available to the user for selection.
     *
     * @param ontologyIri Iri of the ontology chosen by the user.
     * @returns void
     */
    getResourceClassesAndPropertiesForOntology(ontologyIri: string): void;
    /**
     * @ignore
     * Once a resource class has been selected, gets its properties.
     * The properties will be made available to the user for selection.
     *
     * @param resourceClassIri
     * @returns void
     */
    getPropertiesForResourceClass(resourceClassIri: string): void;
    /**
     * @ignore
     * Validates form and returns its status (boolean).
     */
    private validateForm;
    /**
     * @ignore
     * Resets the form (selected resource class and specified properties) preserving the active ontology.
     */
    resetForm(): void;
    /**
     * @ignore
     * Creates a GravSearch query with the given form values and calls the extended search route.
     */
    submit(): void;
}
