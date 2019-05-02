import * as tslib_1 from "tslib";
import { JsonObject, JsonProperty } from 'json2typescript';
import { User } from './user';
let UserResponse = class UserResponse {
    constructor() {
        this.user = undefined;
    }
};
tslib_1.__decorate([
    JsonProperty('user', User),
    tslib_1.__metadata("design:type", User)
], UserResponse.prototype, "user", void 0);
UserResponse = tslib_1.__decorate([
    JsonObject('UserResponse')
], UserResponse);
export { UserResponse };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmF0aW9ucy9hcGkvYWRtaW4vdXNlcnMvdXNlci1yZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0lBR2pCLFlBQVksU0FBWixZQUFZO0lBRHpCO1FBSVcsU0FBSSxHQUFTLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0NBQUEsQ0FBQTtBQURHO0lBREMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7c0NBQ2QsSUFBSTswQ0FBYTtBQUhyQixZQUFZO0lBRHhCLFVBQVUsQ0FBQyxjQUFjLENBQUM7R0FDZCxZQUFZLENBSXhCO1NBSlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25PYmplY3QsIEpzb25Qcm9wZXJ0eSB9IGZyb20gJ2pzb24ydHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyJztcblxuQEpzb25PYmplY3QoJ1VzZXJSZXNwb25zZScpXG5leHBvcnQgY2xhc3MgVXNlclJlc3BvbnNlIHtcblxuICAgIEBKc29uUHJvcGVydHkoJ3VzZXInLCBVc2VyKVxuICAgIHB1YmxpYyB1c2VyOiBVc2VyID0gdW5kZWZpbmVkO1xufVxuIl19