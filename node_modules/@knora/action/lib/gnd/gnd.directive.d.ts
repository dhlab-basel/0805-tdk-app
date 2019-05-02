import { ElementRef, OnChanges } from '@angular/core';
/**
 * This directive renders a GND/IAF or a VIAF identifier as a link to the respective resolver.
 */
export declare class GndDirective implements OnChanges {
    private el;
    kuiGnd: string;
    private _gnd;
    constructor(el: ElementRef);
    ngOnChanges(): void;
}
