import { StringLiteral } from '../../../';
export interface ListCreatePayload {
    projectIri: string;
    labels: StringLiteral[];
    comments: StringLiteral[];
}
