import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyValue, Value } from '@knora/core';
export declare class IntegerValueComponent implements OnInit, OnDestroy, PropertyValue {
    private fb;
    formGroup: FormGroup;
    type: string;
    form: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getValue(): Value;
}
