import { Observable } from 'rxjs';
import { Group } from '../../declarations/';
import { ApiService } from '../api.service';
/**
 * Request information about group from Knora.
 */
export declare class GroupsService extends ApiService {
    private path;
    /**
     * Return a list of all groups.
     *
     * @returns Observable<Group[]>
     */
    getAllGroups(): Observable<Group[]>;
    /**
     * Return a group object (filter by IRI).
     *
     * @param {string} iri
     * @returns Observable<Group>
     */
    getGroupByIri(iri: string): Observable<Group>;
}
