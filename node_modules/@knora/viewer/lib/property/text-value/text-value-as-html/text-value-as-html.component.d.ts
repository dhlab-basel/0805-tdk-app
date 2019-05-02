import { ElementRef, EventEmitter } from '@angular/core';
import { OntologyInformation, ReadTextValueAsHtml } from '@knora/core';
export declare class TextValueAsHtmlComponent {
    private el;
    referredResourceClicked: EventEmitter<string>;
    ontologyInfo: OntologyInformation;
    bindEvents: Boolean;
    valueObject: ReadTextValueAsHtml;
    html: string;
    private _htmlValueObj;
    private _ontoInfo;
    private _bindEvents;
    constructor(el: ElementRef);
    refResClicked(refResourceIri: string): void;
    /**
     * Binds a click event to standoff links that shows the referred resource.
     *
     * @param targetElement
     */
    onClick(targetElement: any): boolean;
}
