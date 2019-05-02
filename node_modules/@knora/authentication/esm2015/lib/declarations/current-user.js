import * as tslib_1 from "tslib";
import { JsonObject, JsonProperty } from 'json2typescript';
/**
 * currently logged-in user
 */
let CurrentUser = class CurrentUser {
    constructor() {
        /**
         * username
         */
        this.name = undefined;
        /**
         * json web token
         */
        this.jwt = undefined;
        /**
         * language for the user interface
         */
        this.lang = undefined;
        /**
         * is system administrator?
         */
        this.sysAdmin = undefined;
        /**
         * list of project shortcodes, where the user is project admin
         */
        this.projectAdmin = undefined;
    }
};
tslib_1.__decorate([
    JsonProperty('name', String),
    tslib_1.__metadata("design:type", String)
], CurrentUser.prototype, "name", void 0);
tslib_1.__decorate([
    JsonProperty('jwt', String, true),
    tslib_1.__metadata("design:type", String)
], CurrentUser.prototype, "jwt", void 0);
tslib_1.__decorate([
    JsonProperty('lang', String, true),
    tslib_1.__metadata("design:type", String)
], CurrentUser.prototype, "lang", void 0);
tslib_1.__decorate([
    JsonProperty('sysAdmin', Boolean),
    tslib_1.__metadata("design:type", Boolean)
], CurrentUser.prototype, "sysAdmin", void 0);
tslib_1.__decorate([
    JsonProperty('projectAdmin', [String], true),
    tslib_1.__metadata("design:type", Array)
], CurrentUser.prototype, "projectAdmin", void 0);
CurrentUser = tslib_1.__decorate([
    JsonObject
], CurrentUser);
export { CurrentUser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC11c2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmF0aW9ucy9jdXJyZW50LXVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0Q7O0dBRUc7SUFFVSxXQUFXLFNBQVgsV0FBVztJQUR4QjtRQUdJOztXQUVHO1FBRUksU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUVoQzs7V0FFRztRQUVJLFFBQUcsR0FBVyxTQUFTLENBQUM7UUFFL0I7O1dBRUc7UUFFSSxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBRWhDOztXQUVHO1FBRUksYUFBUSxHQUFZLFNBQVMsQ0FBQztRQUVyQzs7V0FFRztRQUVJLGlCQUFZLEdBQWEsU0FBUyxDQUFDO0lBRTlDLENBQUM7Q0FBQSxDQUFBO0FBMUJHO0lBREMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7O3lDQUNHO0FBTWhDO0lBREMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDOzt3Q0FDSDtBQU0vQjtJQURDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQzs7eUNBQ0g7QUFNaEM7SUFEQyxZQUFZLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQzs7NkNBQ0c7QUFNckM7SUFEQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDOztpREFDSDtBQTlCakMsV0FBVztJQUR2QixVQUFVO0dBQ0UsV0FBVyxDQWdDdkI7U0FoQ1ksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25PYmplY3QsIEpzb25Qcm9wZXJ0eSB9IGZyb20gJ2pzb24ydHlwZXNjcmlwdCc7XG5cbi8qKlxuICogY3VycmVudGx5IGxvZ2dlZC1pbiB1c2VyXG4gKi9cbkBKc29uT2JqZWN0XG5leHBvcnQgY2xhc3MgQ3VycmVudFVzZXIge1xuXG4gICAgLyoqXG4gICAgICogdXNlcm5hbWVcbiAgICAgKi9cbiAgICBASnNvblByb3BlcnR5KCduYW1lJywgU3RyaW5nKVxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBqc29uIHdlYiB0b2tlblxuICAgICAqL1xuICAgIEBKc29uUHJvcGVydHkoJ2p3dCcsIFN0cmluZywgdHJ1ZSlcbiAgICBwdWJsaWMgand0OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBsYW5ndWFnZSBmb3IgdGhlIHVzZXIgaW50ZXJmYWNlXG4gICAgICovXG4gICAgQEpzb25Qcm9wZXJ0eSgnbGFuZycsIFN0cmluZywgdHJ1ZSlcbiAgICBwdWJsaWMgbGFuZzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogaXMgc3lzdGVtIGFkbWluaXN0cmF0b3I/XG4gICAgICovXG4gICAgQEpzb25Qcm9wZXJ0eSgnc3lzQWRtaW4nLCBCb29sZWFuKVxuICAgIHB1YmxpYyBzeXNBZG1pbjogYm9vbGVhbiA9IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIGxpc3Qgb2YgcHJvamVjdCBzaG9ydGNvZGVzLCB3aGVyZSB0aGUgdXNlciBpcyBwcm9qZWN0IGFkbWluXG4gICAgICovXG4gICAgQEpzb25Qcm9wZXJ0eSgncHJvamVjdEFkbWluJywgW1N0cmluZ10sIHRydWUpXG4gICAgcHVibGljIHByb2plY3RBZG1pbjogc3RyaW5nW10gPSB1bmRlZmluZWQ7XG5cbn1cbiJdfQ==