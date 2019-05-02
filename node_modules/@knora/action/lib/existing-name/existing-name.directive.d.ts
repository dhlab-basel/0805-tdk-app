import { OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
export declare class ExistingNameDirective implements Validators, OnChanges {
    /**
     * @ignore
     */
    existingName: string;
    /**
     * @ignore
     */
    private valFn;
    /**
     * @ignore
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @ignore
     * @param control
     */
    validate(control: AbstractControl): {
        [key: string]: any;
    };
}
/**
 * Validation of existing name value. String method (only one value);
 * Use it in a "formbuilder" group as a validator property
 *
 * @param {RegExp} valRegexp Only one regular expression value
 * @returns ValidatorFn
 */
export declare function existingNameValidator(valRegexp: RegExp): ValidatorFn;
/**
 * Validation of existing name values. Array method (list of values)
 * Use it in a "formbuilder" group as a validator property
 *
 *
 * @param {RegExp} valArrayRegexp List of regular expression values
 * @returns ValidatorFn
 */
export declare function existingNamesValidator(valArrayRegexp: [RegExp]): ValidatorFn;
/**
 * @ignore
 *
 * @param {RegExp} pattern
 * @param {string} regType
 * @returns ValidatorFn
 */
export declare function notAllowed(pattern: RegExp, regType: string): ValidatorFn;
