import { HttpClient } from '@angular/common/http';
import { UsersService } from '@knora/core';
import { Session } from '../declarations';
export declare class SessionService {
    private _http;
    config: any;
    private _users;
    session: Session;
    /**
     * max session time in milliseconds
     * default value (24h): 86400000
     *
     */
    readonly MAX_SESSION_TIME: number;
    constructor(_http: HttpClient, config: any, _users: UsersService);
    /**
     * set the session by using the json web token (jwt) and the user object;
     * it will be used in the login process
     *
     * @param jwt
     * @param username
     */
    setSession(jwt: string, username: string): void;
    private setTimestamp;
    getSession(): void;
    updateSession(): void;
    validateSession(): boolean;
    private authenticate;
    destroySession(): void;
}
