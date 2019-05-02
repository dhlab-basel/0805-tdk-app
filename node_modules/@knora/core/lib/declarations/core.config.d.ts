/**
 * Knora-ui core configuration with the server definitions of:
 *  - api: URL of data service e.g. knora: http://localhost:3333
 *  - media: URL of media server service e.g. sipi: http://localhost:1024
 *  - app: URL of the app e.g. salsah: http://localhost:4200
 */
export declare class KuiCoreConfig {
    /**
     * name of the app e.g. 'SALSAH'
     * @type {string}
     */
    name: string;
    /**
     * url of the app e.g. 'https://salsah.org'
     * @type {undefined}
     */
    app: string;
    /**
     * url of the api e.g. 'https://api.knora.org'
     * @type {string}
     */
    api: string;
    /**
     * url of media/file server e.g. 'https://iiif.sipi.io'
     * @type {string}
     */
    media: string;
}
