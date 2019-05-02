import * as tslib_1 from "tslib";
import { JsonObject, JsonProperty } from 'json2typescript';
import { Project } from '../projects/project';
var Group = /** @class */ (function () {
    function Group() {
        this.id = undefined;
        this.name = undefined;
        this.description = undefined;
        this.project = undefined;
        this.status = undefined;
        this.selfjoin = undefined;
    }
    tslib_1.__decorate([
        JsonProperty('id', String),
        tslib_1.__metadata("design:type", String)
    ], Group.prototype, "id", void 0);
    tslib_1.__decorate([
        JsonProperty('name', String),
        tslib_1.__metadata("design:type", String)
    ], Group.prototype, "name", void 0);
    tslib_1.__decorate([
        JsonProperty('description', String),
        tslib_1.__metadata("design:type", String)
    ], Group.prototype, "description", void 0);
    tslib_1.__decorate([
        JsonProperty('project', Project, false),
        tslib_1.__metadata("design:type", Project)
    ], Group.prototype, "project", void 0);
    tslib_1.__decorate([
        JsonProperty('status', Boolean),
        tslib_1.__metadata("design:type", Boolean)
    ], Group.prototype, "status", void 0);
    tslib_1.__decorate([
        JsonProperty('selfjoin', Boolean),
        tslib_1.__metadata("design:type", Boolean)
    ], Group.prototype, "selfjoin", void 0);
    Group = tslib_1.__decorate([
        JsonObject('Group')
    ], Group);
    return Group;
}());
export { Group };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhdGlvbnMvYXBpL2FkbWluL2dyb3Vwcy9ncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBRTlDO1FBSVcsT0FBRSxHQUFXLFNBQVMsQ0FBQztRQUd2QixTQUFJLEdBQVcsU0FBUyxDQUFDO1FBR3pCLGdCQUFXLEdBQVcsU0FBUyxDQUFDO1FBR2hDLFlBQU8sR0FBWSxTQUFTLENBQUM7UUFHN0IsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUc1QixhQUFRLEdBQVksU0FBUyxDQUFDO0lBRXpDLENBQUM7SUFqQkc7UUFEQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQzs7cUNBQ0c7SUFHOUI7UUFEQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQzs7dUNBQ0c7SUFHaEM7UUFEQyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQzs7OENBQ0c7SUFHdkM7UUFEQyxZQUFZLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7MENBQ3hCLE9BQU87MENBQWE7SUFHcEM7UUFEQyxZQUFZLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQzs7eUNBQ0c7SUFHbkM7UUFEQyxZQUFZLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQzs7MkNBQ0c7SUFsQjVCLEtBQUs7UUFEakIsVUFBVSxDQUFDLE9BQU8sQ0FBQztPQUNQLEtBQUssQ0FvQmpCO0lBQUQsWUFBQztDQUFBLElBQUE7U0FwQlksS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25PYmplY3QsIEpzb25Qcm9wZXJ0eSB9IGZyb20gJ2pzb24ydHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vcHJvamVjdHMvcHJvamVjdCc7XG5cbkBKc29uT2JqZWN0KCdHcm91cCcpXG5leHBvcnQgY2xhc3MgR3JvdXAge1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnaWQnLCBTdHJpbmcpXG4gICAgcHVibGljIGlkOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCduYW1lJywgU3RyaW5nKVxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdkZXNjcmlwdGlvbicsIFN0cmluZylcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ3Byb2plY3QnLCBQcm9qZWN0LCBmYWxzZSlcbiAgICBwdWJsaWMgcHJvamVjdDogUHJvamVjdCA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ3N0YXR1cycsIEJvb2xlYW4pXG4gICAgcHVibGljIHN0YXR1czogYm9vbGVhbiA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ3NlbGZqb2luJywgQm9vbGVhbilcbiAgICBwdWJsaWMgc2VsZmpvaW46IGJvb2xlYW4gPSB1bmRlZmluZWQ7XG5cbn1cbiJdfQ==