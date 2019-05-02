import * as tslib_1 from "tslib";
import { JsonObject, JsonProperty } from 'json2typescript';
import { Project } from './project';
var ProjectsResponse = /** @class */ (function () {
    function ProjectsResponse() {
        this.projects = undefined;
    }
    tslib_1.__decorate([
        JsonProperty('projects', [Project]),
        tslib_1.__metadata("design:type", Array)
    ], ProjectsResponse.prototype, "projects", void 0);
    ProjectsResponse = tslib_1.__decorate([
        JsonObject('ProjectsResponse')
    ], ProjectsResponse);
    return ProjectsResponse;
}());
export { ProjectsResponse };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMtcmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhdGlvbnMvYXBpL2FkbWluL3Byb2plY3RzL3Byb2plY3RzLXJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7O0lBRXBDO1FBSVcsYUFBUSxHQUFjLFNBQVMsQ0FBQztJQUUzQyxDQUFDO0lBRkc7UUFEQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7O3NEQUNHO0lBSDlCLGdCQUFnQjtRQUQ1QixVQUFVLENBQUMsa0JBQWtCLENBQUM7T0FDbEIsZ0JBQWdCLENBSzVCO0lBQUQsdUJBQUM7Q0FBQSxJQUFBO1NBTFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbk9iamVjdCwgSnNvblByb3BlcnR5IH0gZnJvbSAnanNvbjJ0eXBlc2NyaXB0JztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xuXG5ASnNvbk9iamVjdCgnUHJvamVjdHNSZXNwb25zZScpXG5leHBvcnQgY2xhc3MgUHJvamVjdHNSZXNwb25zZSB7XG5cbiAgICBASnNvblByb3BlcnR5KCdwcm9qZWN0cycsIFtQcm9qZWN0XSlcbiAgICBwdWJsaWMgcHJvamVjdHM6IFByb2plY3RbXSA9IHVuZGVmaW5lZDtcblxufVxuIl19