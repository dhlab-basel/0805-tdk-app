import { OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef } from '@angular/material';
export declare class ResourceDialogComponent implements OnInit {
    _dialogRef: MatDialogRef<ResourceDialogComponent>;
    data: any;
    fullSize: boolean;
    /**
     * Creates a configuration object for `MatDialog`.
     *
     * @param resourceIri the Iri of the resource to be displayed in a dialog.
     * @param widthPct width of the dialog in percentage.
     * @param heightPct height of the dialog in percentage.
     * @returns
     */
    static createConfiguration(resourceIri: string, widthPct?: number, heightPct?: number): MatDialogConfig<any>;
    constructor(_dialogRef: MatDialogRef<ResourceDialogComponent>, data: any);
    ngOnInit(): void;
    toggleFullSize(): void;
}
