import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
export declare class BasicOntologyService extends ApiService {
    /**
       * returns our list of a basic ontology
       *
       * @returns {Observable<any>}
       */
    getBasicOntology(): Observable<any>;
}
