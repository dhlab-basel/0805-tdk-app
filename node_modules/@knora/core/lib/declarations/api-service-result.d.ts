/**
 * Result class used as API url response in ApiService
 */
export declare class ApiServiceResult {
    private static jsonConvert;
    /**
     * Status number
     */
    status: number;
    /**
     * Status text
     */
    statusText: string;
    /**
     * API url
     */
    url: string;
    /**
     * Body as JSON
     */
    body: any;
    /**
     * Gets the result body as instance of classObject.
     * @param classObject
     * @returns {any}
     * @throws
     */
    getBody(classObject?: {
        new (): any;
    }): any;
}
