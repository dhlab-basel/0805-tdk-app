/**
 * Represents the parameters of an extended search.
 */
export declare class ExtendedSearchParams {
    generateGravsearch: (offset: number) => string | boolean;
    /**
     *
     * @param generateGravsearch a function that generates a Gravsearch query.
     *
     *                           The function takes the offset
     *                           as a parameter and returns a Gravsearch query string.
     *                           Returns false if not set correctly (init state).
     */
    constructor(generateGravsearch: (offset: number) => string | boolean);
}
export declare class SearchParamsService {
    private _currentSearchParams;
    constructor();
    /**
     * Updates the parameters of an extended search.
     *
     * @param {ExtendedSearchParams} searchParams
     * @returns void
     */
    changeSearchParamsMsg(searchParams: ExtendedSearchParams): void;
    /**
     * Gets the search params of an extended search.
     *
     * @returns ExtendedSearchParams - search parameters
     */
    getSearchParams(): ExtendedSearchParams;
}
