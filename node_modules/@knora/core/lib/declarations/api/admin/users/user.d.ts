import { Group } from '../groups/group';
import { PermissionData } from '../permissions/permission-data';
import { Project } from '../projects/project';
export declare class User {
    id: string;
    email: string;
    username: string;
    password: string;
    token: string;
    givenName: string;
    familyName: string;
    status: boolean;
    lang: string;
    groups: Group[];
    projects: Project[];
    sessionId: string;
    permissions: PermissionData;
    systemAdmin?: boolean;
}
