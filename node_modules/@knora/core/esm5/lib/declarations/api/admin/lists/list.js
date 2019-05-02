import * as tslib_1 from "tslib";
import { JsonObject, JsonProperty } from 'json2typescript';
import { ListInfo } from './list-info';
import { ListNode } from './list-node';
var List = /** @class */ (function () {
    function List() {
        this.listinfo = undefined;
        this.children = undefined;
    }
    tslib_1.__decorate([
        JsonProperty('listinfo', ListInfo, false),
        tslib_1.__metadata("design:type", ListInfo)
    ], List.prototype, "listinfo", void 0);
    tslib_1.__decorate([
        JsonProperty('children', [ListNode], false),
        tslib_1.__metadata("design:type", Array)
    ], List.prototype, "children", void 0);
    List = tslib_1.__decorate([
        JsonObject('List')
    ], List);
    return List;
}());
export { List };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmF0aW9ucy9hcGkvYWRtaW4vbGlzdHMvbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBRXZDO1FBSVcsYUFBUSxHQUFhLFNBQVMsQ0FBQztRQUcvQixhQUFRLEdBQWUsU0FBUyxDQUFDO0lBQzVDLENBQUM7SUFKRztRQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQzswQ0FDekIsUUFBUTswQ0FBYTtJQUd0QztRQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUM7OzBDQUNKO0lBTi9CLElBQUk7UUFEaEIsVUFBVSxDQUFDLE1BQU0sQ0FBQztPQUNOLElBQUksQ0FPaEI7SUFBRCxXQUFDO0NBQUEsSUFBQTtTQVBZLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uT2JqZWN0LCBKc29uUHJvcGVydHkgfSBmcm9tICdqc29uMnR5cGVzY3JpcHQnO1xuaW1wb3J0IHsgTGlzdEluZm8gfSBmcm9tICcuL2xpc3QtaW5mbyc7XG5pbXBvcnQgeyBMaXN0Tm9kZSB9IGZyb20gJy4vbGlzdC1ub2RlJztcblxuQEpzb25PYmplY3QoJ0xpc3QnKVxuZXhwb3J0IGNsYXNzIExpc3Qge1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnbGlzdGluZm8nLCBMaXN0SW5mbywgZmFsc2UpXG4gICAgcHVibGljIGxpc3RpbmZvOiBMaXN0SW5mbyA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ2NoaWxkcmVuJywgW0xpc3ROb2RlXSwgZmFsc2UpXG4gICAgcHVibGljIGNoaWxkcmVuOiBMaXN0Tm9kZVtdID0gdW5kZWZpbmVkO1xufVxuXG5cbiJdfQ==