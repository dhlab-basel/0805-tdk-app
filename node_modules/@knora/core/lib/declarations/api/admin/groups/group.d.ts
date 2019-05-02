import { Project } from '../projects/project';
export declare class Group {
    id: string;
    name: string;
    description: string;
    project: Project;
    status: boolean;
    selfjoin: boolean;
}
