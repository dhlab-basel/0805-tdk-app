import * as tslib_1 from "tslib";
import { JsonObject, JsonProperty } from 'json2typescript';
import { Project } from '../projects/project';
let Group = class Group {
    constructor() {
        this.id = undefined;
        this.name = undefined;
        this.description = undefined;
        this.project = undefined;
        this.status = undefined;
        this.selfjoin = undefined;
    }
};
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
export { Group };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhdGlvbnMvYXBpL2FkbWluL2dyb3Vwcy9ncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7SUFHakMsS0FBSyxTQUFMLEtBQUs7SUFEbEI7UUFJVyxPQUFFLEdBQVcsU0FBUyxDQUFDO1FBR3ZCLFNBQUksR0FBVyxTQUFTLENBQUM7UUFHekIsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFHaEMsWUFBTyxHQUFZLFNBQVMsQ0FBQztRQUc3QixXQUFNLEdBQVksU0FBUyxDQUFDO1FBRzVCLGFBQVEsR0FBWSxTQUFTLENBQUM7SUFFekMsQ0FBQztDQUFBLENBQUE7QUFqQkc7SUFEQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQzs7aUNBQ0c7QUFHOUI7SUFEQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQzs7bUNBQ0c7QUFHaEM7SUFEQyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQzs7MENBQ0c7QUFHdkM7SUFEQyxZQUFZLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7c0NBQ3hCLE9BQU87c0NBQWE7QUFHcEM7SUFEQyxZQUFZLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQzs7cUNBQ0c7QUFHbkM7SUFEQyxZQUFZLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQzs7dUNBQ0c7QUFsQjVCLEtBQUs7SUFEakIsVUFBVSxDQUFDLE9BQU8sQ0FBQztHQUNQLEtBQUssQ0FvQmpCO1NBcEJZLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uT2JqZWN0LCBKc29uUHJvcGVydHkgfSBmcm9tICdqc29uMnR5cGVzY3JpcHQnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL3Byb2plY3RzL3Byb2plY3QnO1xuXG5ASnNvbk9iamVjdCgnR3JvdXAnKVxuZXhwb3J0IGNsYXNzIEdyb3VwIHtcblxuICAgIEBKc29uUHJvcGVydHkoJ2lkJywgU3RyaW5nKVxuICAgIHB1YmxpYyBpZDogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnbmFtZScsIFN0cmluZylcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnZGVzY3JpcHRpb24nLCBTdHJpbmcpXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdwcm9qZWN0JywgUHJvamVjdCwgZmFsc2UpXG4gICAgcHVibGljIHByb2plY3Q6IFByb2plY3QgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdzdGF0dXMnLCBCb29sZWFuKVxuICAgIHB1YmxpYyBzdGF0dXM6IGJvb2xlYW4gPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdzZWxmam9pbicsIEJvb2xlYW4pXG4gICAgcHVibGljIHNlbGZqb2luOiBib29sZWFuID0gdW5kZWZpbmVkO1xuXG59XG4iXX0=