import * as tslib_1 from "tslib";
import { JsonObject, JsonProperty } from 'json2typescript';
import { StringLiteral } from '../../shared/strings';
let ListInfo = class ListInfo {
    constructor() {
        this.id = undefined;
        this.projectIri = undefined;
        this.labels = undefined;
        this.comments = undefined;
    }
};
tslib_1.__decorate([
    JsonProperty('id', String, false),
    tslib_1.__metadata("design:type", String)
], ListInfo.prototype, "id", void 0);
tslib_1.__decorate([
    JsonProperty('projectIri', String, false),
    tslib_1.__metadata("design:type", String)
], ListInfo.prototype, "projectIri", void 0);
tslib_1.__decorate([
    JsonProperty('labels', [StringLiteral], true),
    tslib_1.__metadata("design:type", Array)
], ListInfo.prototype, "labels", void 0);
tslib_1.__decorate([
    JsonProperty('comments', [StringLiteral], true),
    tslib_1.__metadata("design:type", Array)
], ListInfo.prototype, "comments", void 0);
ListInfo = tslib_1.__decorate([
    JsonObject('ListInfo')
], ListInfo);
export { ListInfo };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pbmZvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYXRpb25zL2FwaS9hZG1pbi9saXN0cy9saXN0LWluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0lBR3hDLFFBQVEsU0FBUixRQUFRO0lBRHJCO1FBSVcsT0FBRSxHQUFXLFNBQVMsQ0FBQztRQUd2QixlQUFVLEdBQVcsU0FBUyxDQUFDO1FBRy9CLFdBQU0sR0FBb0IsU0FBUyxDQUFDO1FBR3BDLGFBQVEsR0FBb0IsU0FBUyxDQUFDO0lBQ2pELENBQUM7Q0FBQSxDQUFBO0FBVkc7SUFEQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUM7O29DQUNKO0FBRzlCO0lBREMsWUFBWSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDOzs0Q0FDSjtBQUd0QztJQURDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUM7O3dDQUNIO0FBRzNDO0lBREMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQzs7MENBQ0g7QUFacEMsUUFBUTtJQURwQixVQUFVLENBQUMsVUFBVSxDQUFDO0dBQ1YsUUFBUSxDQWFwQjtTQWJZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uT2JqZWN0LCBKc29uUHJvcGVydHkgfSBmcm9tICdqc29uMnR5cGVzY3JpcHQnO1xuaW1wb3J0IHsgU3RyaW5nTGl0ZXJhbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9zdHJpbmdzJztcblxuQEpzb25PYmplY3QoJ0xpc3RJbmZvJylcbmV4cG9ydCBjbGFzcyBMaXN0SW5mbyB7XG5cbiAgICBASnNvblByb3BlcnR5KCdpZCcsIFN0cmluZywgZmFsc2UpXG4gICAgcHVibGljIGlkOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdwcm9qZWN0SXJpJywgU3RyaW5nLCBmYWxzZSlcbiAgICBwdWJsaWMgcHJvamVjdElyaTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnbGFiZWxzJywgW1N0cmluZ0xpdGVyYWxdLCB0cnVlKVxuICAgIHB1YmxpYyBsYWJlbHM6IFN0cmluZ0xpdGVyYWxbXSA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ2NvbW1lbnRzJywgW1N0cmluZ0xpdGVyYWxdLCB0cnVlKVxuICAgIHB1YmxpYyBjb21tZW50czogU3RyaW5nTGl0ZXJhbFtdID0gdW5kZWZpbmVkO1xufVxuIl19