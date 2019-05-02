import { StringLiteral } from '../../shared/strings';
export declare class Project {
    id: string;
    shortname: string;
    shortcode: string;
    longname: string;
    description: StringLiteral[];
    keywords: string[];
    logo: string;
    institution: string;
    ontologies: string[];
    status: boolean;
    selfjoin: boolean;
}
