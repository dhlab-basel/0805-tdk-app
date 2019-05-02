import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class StatusMsgService {
    private _http;
    config: any;
    constructor(_http: HttpClient, config: any);
    /**
    * this method get the status messages from the statusMsg.json file
    * which are defined here: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
    * and here: http://www.w3schools.com/tags/ref_httpmessages.asp
    *
    */
    getStatusMsg(): Observable<any>;
}
