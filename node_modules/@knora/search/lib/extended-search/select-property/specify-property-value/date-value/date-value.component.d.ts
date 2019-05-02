import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyValue, Value } from '@knora/core';
import { HeaderComponent } from './header-calendar/header-calendar.component';
export declare class DateValueComponent implements OnInit, OnDestroy, PropertyValue {
    private fb;
    formGroup: FormGroup;
    type: string;
    form: FormGroup;
    headerComponent: typeof HeaderComponent;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getValue(): Value;
}
