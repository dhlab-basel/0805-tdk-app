/**
 * currently logged-in user
 */
export declare class CurrentUser {
    /**
     * username
     */
    name: string;
    /**
     * json web token
     */
    jwt: string;
    /**
     * language for the user interface
     */
    lang: string;
    /**
     * is system administrator?
     */
    sysAdmin: boolean;
    /**
     * list of project shortcodes, where the user is project admin
     */
    projectAdmin: string[];
}
