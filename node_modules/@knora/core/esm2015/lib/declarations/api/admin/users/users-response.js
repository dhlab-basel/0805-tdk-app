import * as tslib_1 from "tslib";
import { JsonObject, JsonProperty } from 'json2typescript';
import { User } from './user';
let UsersResponse = class UsersResponse {
    constructor() {
        this.users = undefined;
    }
};
tslib_1.__decorate([
    JsonProperty('users', [User]),
    tslib_1.__metadata("design:type", Array)
], UsersResponse.prototype, "users", void 0);
UsersResponse = tslib_1.__decorate([
    JsonObject('UsersResponse')
], UsersResponse);
export { UsersResponse };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMtcmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhdGlvbnMvYXBpL2FkbWluL3VzZXJzL3VzZXJzLXJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7SUFHakIsYUFBYSxTQUFiLGFBQWE7SUFEMUI7UUFJVyxVQUFLLEdBQVcsU0FBUyxDQUFDO0lBRXJDLENBQUM7Q0FBQSxDQUFBO0FBRkc7SUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7OzRDQUNHO0FBSHhCLGFBQWE7SUFEekIsVUFBVSxDQUFDLGVBQWUsQ0FBQztHQUNmLGFBQWEsQ0FLekI7U0FMWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbk9iamVjdCwgSnNvblByb3BlcnR5IH0gZnJvbSAnanNvbjJ0eXBlc2NyaXB0JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXInO1xuXG5ASnNvbk9iamVjdCgnVXNlcnNSZXNwb25zZScpXG5leHBvcnQgY2xhc3MgVXNlcnNSZXNwb25zZSB7XG5cbiAgICBASnNvblByb3BlcnR5KCd1c2VycycsIFtVc2VyXSlcbiAgICBwdWJsaWMgdXNlcnM6IFVzZXJbXSA9IHVuZGVmaW5lZDtcblxufVxuIl19