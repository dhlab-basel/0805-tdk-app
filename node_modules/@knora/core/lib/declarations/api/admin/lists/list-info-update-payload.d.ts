import { StringLiteral } from '../../../';
export interface ListInfoUpdatePayload {
    listIri: string;
    projectIri: string;
    labels: StringLiteral[];
    comments: StringLiteral[];
}
