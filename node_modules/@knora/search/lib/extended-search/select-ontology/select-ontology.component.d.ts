import { EventEmitter, OnInit } from '@angular/core';
import { OntologyMetadata } from '@knora/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class SelectOntologyComponent implements OnInit {
    private fb;
    formGroup: FormGroup;
    ontologies: Array<OntologyMetadata>;
    ontologySelected: EventEmitter<string>;
    form: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
}
