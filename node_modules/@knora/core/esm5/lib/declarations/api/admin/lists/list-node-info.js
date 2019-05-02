import * as tslib_1 from "tslib";
import { JsonObject, JsonProperty } from 'json2typescript';
import { StringLiteral } from '../../shared/strings';
var ListNodeInfo = /** @class */ (function () {
    function ListNodeInfo() {
        this.id = undefined;
        this.name = undefined;
        this.projectIri = undefined;
        this.isRootNode = undefined;
        this.labels = undefined;
        this.comments = undefined;
    }
    tslib_1.__decorate([
        JsonProperty('id', String),
        tslib_1.__metadata("design:type", String)
    ], ListNodeInfo.prototype, "id", void 0);
    tslib_1.__decorate([
        JsonProperty('name', String, true),
        tslib_1.__metadata("design:type", String)
    ], ListNodeInfo.prototype, "name", void 0);
    tslib_1.__decorate([
        JsonProperty('projectIri', String, true),
        tslib_1.__metadata("design:type", String)
    ], ListNodeInfo.prototype, "projectIri", void 0);
    tslib_1.__decorate([
        JsonProperty('isRootNode', Boolean, true),
        tslib_1.__metadata("design:type", Boolean)
    ], ListNodeInfo.prototype, "isRootNode", void 0);
    tslib_1.__decorate([
        JsonProperty('labels', [StringLiteral]),
        tslib_1.__metadata("design:type", Array)
    ], ListNodeInfo.prototype, "labels", void 0);
    tslib_1.__decorate([
        JsonProperty('comments', [StringLiteral]),
        tslib_1.__metadata("design:type", Array)
    ], ListNodeInfo.prototype, "comments", void 0);
    ListNodeInfo = tslib_1.__decorate([
        JsonObject('ListNodeInfo')
    ], ListNodeInfo);
    return ListNodeInfo;
}());
export { ListNodeInfo };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1ub2RlLWluZm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhdGlvbnMvYXBpL2FkbWluL2xpc3RzL2xpc3Qtbm9kZS1pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUFFckQ7UUFJVyxPQUFFLEdBQVcsU0FBUyxDQUFDO1FBR3ZCLFNBQUksR0FBVyxTQUFTLENBQUM7UUFHekIsZUFBVSxHQUFXLFNBQVMsQ0FBQztRQUcvQixlQUFVLEdBQVksU0FBUyxDQUFDO1FBR2hDLFdBQU0sR0FBb0IsU0FBUyxDQUFDO1FBR3BDLGFBQVEsR0FBb0IsU0FBUyxDQUFDO0lBQ2pELENBQUM7SUFoQkc7UUFEQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQzs7NENBQ0c7SUFHOUI7UUFEQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7OzhDQUNIO0lBR2hDO1FBREMsWUFBWSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDOztvREFDSDtJQUd0QztRQURDLFlBQVksQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQzs7b0RBQ0g7SUFHdkM7UUFEQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7O2dEQUNHO0lBRzNDO1FBREMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDOztrREFDRztJQWxCcEMsWUFBWTtRQUR4QixVQUFVLENBQUMsY0FBYyxDQUFDO09BQ2QsWUFBWSxDQW1CeEI7SUFBRCxtQkFBQztDQUFBLElBQUE7U0FuQlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25PYmplY3QsIEpzb25Qcm9wZXJ0eSB9IGZyb20gJ2pzb24ydHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBTdHJpbmdMaXRlcmFsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0cmluZ3MnO1xuXG5ASnNvbk9iamVjdCgnTGlzdE5vZGVJbmZvJylcbmV4cG9ydCBjbGFzcyBMaXN0Tm9kZUluZm8ge1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnaWQnLCBTdHJpbmcpXG4gICAgcHVibGljIGlkOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCduYW1lJywgU3RyaW5nLCB0cnVlKVxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdwcm9qZWN0SXJpJywgU3RyaW5nLCB0cnVlKVxuICAgIHB1YmxpYyBwcm9qZWN0SXJpOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdpc1Jvb3ROb2RlJywgQm9vbGVhbiwgdHJ1ZSlcbiAgICBwdWJsaWMgaXNSb290Tm9kZTogYm9vbGVhbiA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ2xhYmVscycsIFtTdHJpbmdMaXRlcmFsXSlcbiAgICBwdWJsaWMgbGFiZWxzOiBTdHJpbmdMaXRlcmFsW10gPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdjb21tZW50cycsIFtTdHJpbmdMaXRlcmFsXSlcbiAgICBwdWJsaWMgY29tbWVudHM6IFN0cmluZ0xpdGVyYWxbXSA9IHVuZGVmaW5lZDtcbn1cbiJdfQ==