import * as tslib_1 from "tslib";
import { JsonObject, JsonProperty } from 'json2typescript';
import { Group } from './group';
let GroupsResponse = class GroupsResponse {
    constructor() {
        this.groups = undefined;
    }
};
tslib_1.__decorate([
    JsonProperty('groups', [Group]),
    tslib_1.__metadata("design:type", Array)
], GroupsResponse.prototype, "groups", void 0);
GroupsResponse = tslib_1.__decorate([
    JsonObject('GroupsResponse')
], GroupsResponse);
export { GroupsResponse };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBzLXJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYXRpb25zL2FwaS9hZG1pbi9ncm91cHMvZ3JvdXBzLXJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7SUFHbkIsY0FBYyxTQUFkLGNBQWM7SUFEM0I7UUFJVyxXQUFNLEdBQVksU0FBUyxDQUFDO0lBRXZDLENBQUM7Q0FBQSxDQUFBO0FBRkc7SUFEQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7OzhDQUNHO0FBSDFCLGNBQWM7SUFEMUIsVUFBVSxDQUFDLGdCQUFnQixDQUFDO0dBQ2hCLGNBQWMsQ0FLMUI7U0FMWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbk9iamVjdCwgSnNvblByb3BlcnR5IH0gZnJvbSAnanNvbjJ0eXBlc2NyaXB0JztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi9ncm91cCc7XG5cbkBKc29uT2JqZWN0KCdHcm91cHNSZXNwb25zZScpXG5leHBvcnQgY2xhc3MgR3JvdXBzUmVzcG9uc2Uge1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnZ3JvdXBzJywgW0dyb3VwXSlcbiAgICBwdWJsaWMgZ3JvdXBzOiBHcm91cFtdID0gdW5kZWZpbmVkO1xuXG59XG4iXX0=