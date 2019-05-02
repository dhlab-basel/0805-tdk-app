import { EventEmitter } from '@angular/core';
import { OntologyInformation, ReadLinkValue } from '@knora/core';
export declare class LinkValueComponent {
    ontologyInfo: OntologyInformation;
    valueObject: ReadLinkValue;
    referredResourceClicked: EventEmitter<ReadLinkValue>;
    private _linkValueObj;
    private _ontoInfo;
    referredResource: string;
    constructor();
    refResClicked(): void;
}
