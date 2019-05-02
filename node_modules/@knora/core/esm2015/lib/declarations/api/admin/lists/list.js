import * as tslib_1 from "tslib";
import { JsonObject, JsonProperty } from 'json2typescript';
import { ListInfo } from './list-info';
import { ListNode } from './list-node';
let List = class List {
    constructor() {
        this.listinfo = undefined;
        this.children = undefined;
    }
};
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
export { List };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmF0aW9ucy9hcGkvYWRtaW4vbGlzdHMvbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7SUFHMUIsSUFBSSxTQUFKLElBQUk7SUFEakI7UUFJVyxhQUFRLEdBQWEsU0FBUyxDQUFDO1FBRy9CLGFBQVEsR0FBZSxTQUFTLENBQUM7SUFDNUMsQ0FBQztDQUFBLENBQUE7QUFKRztJQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQztzQ0FDekIsUUFBUTtzQ0FBYTtBQUd0QztJQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUM7O3NDQUNKO0FBTi9CLElBQUk7SUFEaEIsVUFBVSxDQUFDLE1BQU0sQ0FBQztHQUNOLElBQUksQ0FPaEI7U0FQWSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbk9iamVjdCwgSnNvblByb3BlcnR5IH0gZnJvbSAnanNvbjJ0eXBlc2NyaXB0JztcbmltcG9ydCB7IExpc3RJbmZvIH0gZnJvbSAnLi9saXN0LWluZm8nO1xuaW1wb3J0IHsgTGlzdE5vZGUgfSBmcm9tICcuL2xpc3Qtbm9kZSc7XG5cbkBKc29uT2JqZWN0KCdMaXN0JylcbmV4cG9ydCBjbGFzcyBMaXN0IHtcblxuICAgIEBKc29uUHJvcGVydHkoJ2xpc3RpbmZvJywgTGlzdEluZm8sIGZhbHNlKVxuICAgIHB1YmxpYyBsaXN0aW5mbzogTGlzdEluZm8gPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdjaGlsZHJlbicsIFtMaXN0Tm9kZV0sIGZhbHNlKVxuICAgIHB1YmxpYyBjaGlsZHJlbjogTGlzdE5vZGVbXSA9IHVuZGVmaW5lZDtcbn1cblxuXG4iXX0=