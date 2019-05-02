import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Group, User } from '../../declarations/';
/**
 * This service uses the Knora admin API and handles all user data.
 */
export declare class UsersService extends ApiService {
    /**
     * Returns a list of all users.
     *
     * @returns Observable<User[]>
     */
    getAllUsers(): Observable<User[]>;
    /**
     * Get user by username, email or by iri.
     * @ignore
     *
     * @param  {string} identifier username, email or by iri
     * @param  {String} identifierType
     * @returns Observable<User>
     */
    private getUser;
    /**
     * Get user by IRI
     *
     * @param  {string} iri
     * @returns Observable<User>
     */
    getUserByIri(iri: string): Observable<User>;
    /**
     * Get user by email
     *
     * @param  {string} email
     * @returns Observable<User>
     */
    getUserByEmail(email: string): Observable<User>;
    /**
     * Get user by username.
     *
     * @param  {string} username
     * @returns Observable<User>
     */
    getUserByUsername(username: string): Observable<User>;
    /**
     * Get all groups, where the user is member of
     *
     * @param  {string} userIri
     * @returns Observable<Group[]>
     */
    getUsersGroupMemberships(userIri: string): Observable<Group[]>;
    /**
     * Create new user.
     *
     * @param {any} data
     * @returns Observable<User>
     */
    createUser(data: any): Observable<User>;
    /**
     * Add user to a project.
     *
     * @param {string} userIri
     * @param {string} projectIri
     * @returns Observable<User>
     */
    addUserToProject(userIri: string, projectIri: string): Observable<User>;
    /**
     * Remove user from project.
     *
     * @param {string} userIri
     * @param {string} projectIri
     * @returns Observable<User>
     */
    removeUserFromProject(userIri: string, projectIri: string): Observable<User>;
    /**
     * Add user to the admin group of a project.
     *
     * @param {string} userIri
     * @param {string} projectIri
     * @returns Observable<User>
     */
    addUserToProjectAdmin(userIri: string, projectIri: string): Observable<User>;
    /**
     * Delete user from the admin group of a project.
     *
     * @param {string} userIri
     * @param {string} projectIri
     * @returns Observable<User>
     */
    removeUserFromProjectAdmin(userIri: string, projectIri: string): Observable<User>;
    /**
     * Add user to project specific group
     *
     * @param {string} userIri
     * @param {string} groupIri
     * @returns Observable<User>
     */
    addUserToGroup(userIri: string, groupIri: string): Observable<User>;
    /**
     * remove user from project specific group
     *
     * @param {string} userIri
     * @param {string} groupIri
     * @returns Observable<User>
     */
    removeUserFromGroup(userIri: string, groupIri: string): Observable<User>;
    /**
     * Add user to the admin system.
     *
     * @param {string} userIri
     * @returns Observable<User>
     */
    addUserToSystemAdmin(userIri: string): Observable<User>;
    /**
     * Remove user from the admin system.
     * @param {string} userIri
     * @returns Observable<User>
     */
    removeUserFromSystemAdmin(userIri: string): Observable<User>;
    /**
     * Update user system admin membership
     * @ignore
     *
     * @param {string} userIri
     * @param {any} data
     *
     * @returns Observable<User>
     */
    private updateUserSystemAdmin;
    /**
     * Activate user.
     *
     * @param {string} userIri
     * @returns Observable<User>
     */
    activateUser(userIri: string): Observable<User>;
    /**
     * Update own password.
     *
     * @param {string} userIri
     * @param {string} oldPassword
     * @param {string} newPassword
     * @returns Observable<User>
     */
    updateOwnPassword(userIri: string, oldPassword: string, newPassword: string): Observable<User>;
    /**
     * Update password of another user (not own).
     *
     * @param {string} userIri
     * @param {string} requesterPassword
     * @param {string} newPassword
     * @returns Observable<User>
     */
    updateUsersPassword(userIri: string, requesterPassword: string, newPassword: string): Observable<User>;
    /**
     * Update basic user information: given name, family name
     * @param userIri
     * @param data
     * @returns Observable<User>
     */
    updateBasicUserInformation(userIri: string, data: any): Observable<User>;
    /**
     * Delete / deactivate user.
     *
     * @param {string} userIri
     * @returns Observable<User>
     */
    deleteUser(userIri: string): Observable<User>;
}
