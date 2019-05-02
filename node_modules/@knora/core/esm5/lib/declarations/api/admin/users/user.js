import * as tslib_1 from "tslib";
import { JsonObject, JsonProperty } from 'json2typescript';
import { Group } from '../groups/group';
import { PermissionData } from '../permissions/permission-data';
import { Project } from '../projects/project';
var User = /** @class */ (function () {
    function User() {
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
    return User;
}());
export { User };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmF0aW9ucy9hcGkvYWRtaW4vdXNlcnMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUFFOUM7UUFJVyxPQUFFLEdBQVcsU0FBUyxDQUFDO1FBR3ZCLFVBQUssR0FBVyxTQUFTLENBQUM7UUFHMUIsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUc3QixhQUFRLEdBQVcsU0FBUyxDQUFDO1FBRzdCLFVBQUssR0FBVyxTQUFTLENBQUM7UUFHMUIsY0FBUyxHQUFXLFNBQVMsQ0FBQztRQUc5QixlQUFVLEdBQVcsU0FBUyxDQUFDO1FBRy9CLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFHNUIsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUd6QixXQUFNLEdBQVksU0FBUyxDQUFDO1FBRzVCLGFBQVEsR0FBYyxTQUFTLENBQUM7UUFHaEMsY0FBUyxHQUFXLFNBQVMsQ0FBQztRQUc5QixnQkFBVyxHQUFtQixTQUFTLENBQUM7UUFHeEMsZ0JBQVcsR0FBYSxLQUFLLENBQUM7SUFFekMsQ0FBQztJQXpDRztRQURDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDOztvQ0FDRztJQUc5QjtRQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDOzt1Q0FDRztJQUdqQztRQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDOzswQ0FDRztJQUdwQztRQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQzs7MENBQ0g7SUFHcEM7UUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7O3VDQUNIO0lBR2pDO1FBREMsWUFBWSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUM7OzJDQUNHO0lBR3JDO1FBREMsWUFBWSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7OzRDQUNHO0lBR3RDO1FBREMsWUFBWSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7O3dDQUNHO0lBR25DO1FBREMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7O3NDQUNHO0lBR2hDO1FBREMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDOzt3Q0FDRztJQUduQztRQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7MENBQ0c7SUFHdkM7UUFEQyxZQUFZLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7OzJDQUNIO0lBR3JDO1FBREMsWUFBWSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7MENBQ3hCLGNBQWM7NkNBQWE7SUFHL0M7UUFEQyxZQUFZLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7OzZDQUNOO0lBMUM1QixJQUFJO1FBRGhCLFVBQVUsQ0FBQyxNQUFNLENBQUM7T0FDTixJQUFJLENBNENoQjtJQUFELFdBQUM7Q0FBQSxJQUFBO1NBNUNZLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uT2JqZWN0LCBKc29uUHJvcGVydHkgfSBmcm9tICdqc29uMnR5cGVzY3JpcHQnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi9ncm91cHMvZ3JvdXAnO1xuaW1wb3J0IHsgUGVybWlzc2lvbkRhdGEgfSBmcm9tICcuLi9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLWRhdGEnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL3Byb2plY3RzL3Byb2plY3QnO1xuXG5ASnNvbk9iamVjdCgnVXNlcicpXG5leHBvcnQgY2xhc3MgVXNlciB7XG5cbiAgICBASnNvblByb3BlcnR5KCdpZCcsIFN0cmluZylcbiAgICBwdWJsaWMgaWQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ2VtYWlsJywgU3RyaW5nKVxuICAgIHB1YmxpYyBlbWFpbDogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgndXNlcm5hbWUnLCBTdHJpbmcpXG4gICAgcHVibGljIHVzZXJuYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdwYXNzd29yZCcsIFN0cmluZywgdHJ1ZSlcbiAgICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ3Rva2VuJywgU3RyaW5nLCB0cnVlKVxuICAgIHB1YmxpYyB0b2tlbjogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnZ2l2ZW5OYW1lJywgU3RyaW5nKVxuICAgIHB1YmxpYyBnaXZlbk5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ2ZhbWlseU5hbWUnLCBTdHJpbmcpXG4gICAgcHVibGljIGZhbWlseU5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ3N0YXR1cycsIEJvb2xlYW4pXG4gICAgcHVibGljIHN0YXR1czogYm9vbGVhbiA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ2xhbmcnLCBTdHJpbmcpXG4gICAgcHVibGljIGxhbmc6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ2dyb3VwcycsIFtHcm91cF0pXG4gICAgcHVibGljIGdyb3VwczogR3JvdXBbXSA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ3Byb2plY3RzJywgW1Byb2plY3RdKVxuICAgIHB1YmxpYyBwcm9qZWN0czogUHJvamVjdFtdID0gdW5kZWZpbmVkO1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnc2Vzc2lvbklkJywgU3RyaW5nLCB0cnVlKVxuICAgIHB1YmxpYyBzZXNzaW9uSWQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ3Blcm1pc3Npb25zJywgUGVybWlzc2lvbkRhdGEpXG4gICAgcHVibGljIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uRGF0YSA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ3N5c3RlbUFkbWluJywgQm9vbGVhbiwgdHJ1ZSlcbiAgICBwdWJsaWMgc3lzdGVtQWRtaW4/OiBib29sZWFuID0gZmFsc2U7XG5cbn1cbiJdfQ==