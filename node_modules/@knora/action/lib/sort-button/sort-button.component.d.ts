import { EventEmitter, OnInit } from '@angular/core';
export interface SortProp {
    key: string;
    label: string;
}
/**
 * A component with a list of properties to sort a list by one of them.
 * It can be used together with the KuiSortBy pipe.
 */
export declare class SortButtonComponent implements OnInit {
    /**
     * @ignore {string} sortKeyChange
     * @emits TODO: this would be the correct syntax for Output eventEmitter
     *
     * EventEmitter when a user selected a sort property;
     * This is the selected key
     */
    sortKeyChange: EventEmitter<string>;
    menuXPos: string;
    activeKey: string;
    /**
     * @param {SortProp[]} sortProps
     * An array of SortProp objects for the selection menu:
     * SortProp: { key: string, label: string }
     */
    sortProps: SortProp[];
    /**
     * @param {string} [position='left']
     * Optional position of the sort menu: right or left
     */
    position?: string;
    /**
     * @param  {string} [icon='sort']
     * Default icon is "sort" from material design.
     * But you can replace it with another one
     * e.g. sort_by_alpha
     */
    icon?: string;
    /**
     * @param {string} sortKey
     * set and get (two-way data binding) of current sort key
     */
    sortKey(sortKey: string): void;
    constructor();
    ngOnInit(): void;
    /**
     * @ignore
     *
     * @param {string} key
     */
    sortBy(key: string): void;
}
