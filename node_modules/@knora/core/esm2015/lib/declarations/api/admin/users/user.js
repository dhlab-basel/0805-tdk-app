import * as tslib_1 from "tslib";
import { JsonObject, JsonProperty } from 'json2typescript';
import { Group } from '../groups/group';
import { PermissionData } from '../permissions/permission-data';
import { Project } from '../projects/project';
let User = class User {
    constructor() {
        this.id = undefined;
        this.email = undefined;
        this.username = undefined;
        this.password = undefined;
        this.token = undefined;
        this.givenName = undefined;
        this.familyName = undefined;
        this.status = undefined;
        this.lang = undefined;
        this.groups = undefined;
        this.projects = undefined;
        this.sessionId = undefined;
        this.permissions = undefined;
        this.systemAdmin = false;
    }
};
tslib_1.__decorate([
    JsonProperty('id', String),
    tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    JsonProperty('email', String),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    JsonProperty('username', String),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    JsonProperty('password', String, true),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    JsonProperty('token', String, true),
    tslib_1.__metadata("design:type", String)
], User.prototype, "token", void 0);
tslib_1.__decorate([
    JsonProperty('givenName', String),
    tslib_1.__metadata("design:type", String)
], User.prototype, "givenName", void 0);
tslib_1.__decorate([
    JsonProperty('familyName', String),
    tslib_1.__metadata("design:type", String)
], User.prototype, "familyName", void 0);
tslib_1.__decorate([
    JsonProperty('status', Boolean),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "status", void 0);
tslib_1.__decorate([
    JsonProperty('lang', String),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lang", void 0);
tslib_1.__decorate([
    JsonProperty('groups', [Group]),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "groups", void 0);
tslib_1.__decorate([
    JsonProperty('projects', [Project]),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "projects", void 0);
tslib_1.__decorate([
    JsonProperty('sessionId', String, true),
    tslib_1.__metadata("design:type", String)
], User.prototype, "sessionId", void 0);
tslib_1.__decorate([
    JsonProperty('permissions', PermissionData),
    tslib_1.__metadata("design:type", PermissionData)
], User.prototype, "permissions", void 0);
tslib_1.__decorate([
    JsonProperty('systemAdmin', Boolean, true),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "systemAdmin", void 0);
User = tslib_1.__decorate([
    JsonObject('User')
], User);
export { User };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmF0aW9ucy9hcGkvYWRtaW4vdXNlcnMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztJQUdqQyxJQUFJLFNBQUosSUFBSTtJQURqQjtRQUlXLE9BQUUsR0FBVyxTQUFTLENBQUM7UUFHdkIsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUcxQixhQUFRLEdBQVcsU0FBUyxDQUFDO1FBRzdCLGFBQVEsR0FBVyxTQUFTLENBQUM7UUFHN0IsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUcxQixjQUFTLEdBQVcsU0FBUyxDQUFDO1FBRzlCLGVBQVUsR0FBVyxTQUFTLENBQUM7UUFHL0IsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUc1QixTQUFJLEdBQVcsU0FBUyxDQUFDO1FBR3pCLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFHNUIsYUFBUSxHQUFjLFNBQVMsQ0FBQztRQUdoQyxjQUFTLEdBQVcsU0FBUyxDQUFDO1FBRzlCLGdCQUFXLEdBQW1CLFNBQVMsQ0FBQztRQUd4QyxnQkFBVyxHQUFhLEtBQUssQ0FBQztJQUV6QyxDQUFDO0NBQUEsQ0FBQTtBQXpDRztJQURDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDOztnQ0FDRztBQUc5QjtJQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDOzttQ0FDRztBQUdqQztJQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDOztzQ0FDRztBQUdwQztJQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQzs7c0NBQ0g7QUFHcEM7SUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7O21DQUNIO0FBR2pDO0lBREMsWUFBWSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUM7O3VDQUNHO0FBR3JDO0lBREMsWUFBWSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7O3dDQUNHO0FBR3RDO0lBREMsWUFBWSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7O29DQUNHO0FBR25DO0lBREMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7O2tDQUNHO0FBR2hDO0lBREMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDOztvQ0FDRztBQUduQztJQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7c0NBQ0c7QUFHdkM7SUFEQyxZQUFZLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7O3VDQUNIO0FBR3JDO0lBREMsWUFBWSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7c0NBQ3hCLGNBQWM7eUNBQWE7QUFHL0M7SUFEQyxZQUFZLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7O3lDQUNOO0FBMUM1QixJQUFJO0lBRGhCLFVBQVUsQ0FBQyxNQUFNLENBQUM7R0FDTixJQUFJLENBNENoQjtTQTVDWSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbk9iamVjdCwgSnNvblByb3BlcnR5IH0gZnJvbSAnanNvbjJ0eXBlc2NyaXB0JztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi4vZ3JvdXBzL2dyb3VwJztcbmltcG9ydCB7IFBlcm1pc3Npb25EYXRhIH0gZnJvbSAnLi4vcGVybWlzc2lvbnMvcGVybWlzc2lvbi1kYXRhJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9wcm9qZWN0cy9wcm9qZWN0JztcblxuQEpzb25PYmplY3QoJ1VzZXInKVxuZXhwb3J0IGNsYXNzIFVzZXIge1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnaWQnLCBTdHJpbmcpXG4gICAgcHVibGljIGlkOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdlbWFpbCcsIFN0cmluZylcbiAgICBwdWJsaWMgZW1haWw6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ3VzZXJuYW1lJywgU3RyaW5nKVxuICAgIHB1YmxpYyB1c2VybmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgncGFzc3dvcmQnLCBTdHJpbmcsIHRydWUpXG4gICAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCd0b2tlbicsIFN0cmluZywgdHJ1ZSlcbiAgICBwdWJsaWMgdG9rZW46IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ2dpdmVuTmFtZScsIFN0cmluZylcbiAgICBwdWJsaWMgZ2l2ZW5OYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdmYW1pbHlOYW1lJywgU3RyaW5nKVxuICAgIHB1YmxpYyBmYW1pbHlOYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdzdGF0dXMnLCBCb29sZWFuKVxuICAgIHB1YmxpYyBzdGF0dXM6IGJvb2xlYW4gPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdsYW5nJywgU3RyaW5nKVxuICAgIHB1YmxpYyBsYW5nOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdncm91cHMnLCBbR3JvdXBdKVxuICAgIHB1YmxpYyBncm91cHM6IEdyb3VwW10gPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdwcm9qZWN0cycsIFtQcm9qZWN0XSlcbiAgICBwdWJsaWMgcHJvamVjdHM6IFByb2plY3RbXSA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ3Nlc3Npb25JZCcsIFN0cmluZywgdHJ1ZSlcbiAgICBwdWJsaWMgc2Vzc2lvbklkOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdwZXJtaXNzaW9ucycsIFBlcm1pc3Npb25EYXRhKVxuICAgIHB1YmxpYyBwZXJtaXNzaW9uczogUGVybWlzc2lvbkRhdGEgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdzeXN0ZW1BZG1pbicsIEJvb2xlYW4sIHRydWUpXG4gICAgcHVibGljIHN5c3RlbUFkbWluPzogYm9vbGVhbiA9IGZhbHNlO1xuXG59XG4iXX0=