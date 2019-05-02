import * as tslib_1 from "tslib";
import { JsonObject, JsonProperty } from 'json2typescript';
import { ListNodeInfo } from './list-node-info';
var ListNodeInfoResponse = /** @class */ (function () {
    function ListNodeInfoResponse() {
        this.nodeinfo = undefined;
    }
    tslib_1.__decorate([
        JsonProperty('nodeinfo', ListNodeInfo, false),
        tslib_1.__metadata("design:type", ListNodeInfo)
    ], ListNodeInfoResponse.prototype, "nodeinfo", void 0);
    ListNodeInfoResponse = tslib_1.__decorate([
        JsonObject('ListNodeInfoResponse')
    ], ListNodeInfoResponse);
    return ListNodeInfoResponse;
}());
export { ListNodeInfoResponse };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1ub2RlLWluZm8tcmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhdGlvbnMvYXBpL2FkbWluL2xpc3RzL2xpc3Qtbm9kZS1pbmZvLXJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFFaEQ7UUFJVyxhQUFRLEdBQWlCLFNBQVMsQ0FBQztJQUM5QyxDQUFDO0lBREc7UUFEQyxZQUFZLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7MENBQzdCLFlBQVk7MERBQWE7SUFIakMsb0JBQW9CO1FBRGhDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztPQUN0QixvQkFBb0IsQ0FJaEM7SUFBRCwyQkFBQztDQUFBLElBQUE7U0FKWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uT2JqZWN0LCBKc29uUHJvcGVydHkgfSBmcm9tICdqc29uMnR5cGVzY3JpcHQnO1xuaW1wb3J0IHsgTGlzdE5vZGVJbmZvIH0gZnJvbSAnLi9saXN0LW5vZGUtaW5mbyc7XG5cbkBKc29uT2JqZWN0KCdMaXN0Tm9kZUluZm9SZXNwb25zZScpXG5leHBvcnQgY2xhc3MgTGlzdE5vZGVJbmZvUmVzcG9uc2Uge1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnbm9kZWluZm8nLCBMaXN0Tm9kZUluZm8sIGZhbHNlKVxuICAgIHB1YmxpYyBub2RlaW5mbzogTGlzdE5vZGVJbmZvID0gdW5kZWZpbmVkO1xufVxuXG5cbiJdfQ==