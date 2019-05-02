import * as tslib_1 from "tslib";
import { JsonObject, JsonProperty } from 'json2typescript';
import { StringLiteral } from '../../shared/strings';
var Project = /** @class */ (function () {
    function Project() {
        this.id = undefined;
        this.shortname = undefined;
        this.shortcode = undefined;
        this.longname = undefined;
        this.description = [new StringLiteral()];
        this.keywords = undefined;
        this.logo = undefined;
        this.institution = undefined;
        this.ontologies = undefined;
        this.status = undefined;
        this.selfjoin = undefined;
    }
    tslib_1.__decorate([
        JsonProperty('id', String),
        tslib_1.__metadata("design:type", String)
    ], Project.prototype, "id", void 0);
    tslib_1.__decorate([
        JsonProperty('shortname', String),
        tslib_1.__metadata("design:type", String)
    ], Project.prototype, "shortname", void 0);
    tslib_1.__decorate([
        JsonProperty('shortcode', String, true),
        tslib_1.__metadata("design:type", String)
    ], Project.prototype, "shortcode", void 0);
    tslib_1.__decorate([
        JsonProperty('longname', String, true),
        tslib_1.__metadata("design:type", String)
    ], Project.prototype, "longname", void 0);
    tslib_1.__decorate([
        JsonProperty('description', [StringLiteral], true),
        tslib_1.__metadata("design:type", Array)
    ], Project.prototype, "description", void 0);
    tslib_1.__decorate([
        JsonProperty('keywords', [String], true),
        tslib_1.__metadata("design:type", Array)
    ], Project.prototype, "keywords", void 0);
    tslib_1.__decorate([
        JsonProperty('logo', String, true),
        tslib_1.__metadata("design:type", String)
    ], Project.prototype, "logo", void 0);
    tslib_1.__decorate([
        JsonProperty('institution', String, true),
        tslib_1.__metadata("design:type", String)
    ], Project.prototype, "institution", void 0);
    tslib_1.__decorate([
        JsonProperty('ontologies', [String]),
        tslib_1.__metadata("design:type", Array)
    ], Project.prototype, "ontologies", void 0);
    tslib_1.__decorate([
        JsonProperty('status', Boolean),
        tslib_1.__metadata("design:type", Boolean)
    ], Project.prototype, "status", void 0);
    tslib_1.__decorate([
        JsonProperty('selfjoin', Boolean),
        tslib_1.__metadata("design:type", Boolean)
    ], Project.prototype, "selfjoin", void 0);
    Project = tslib_1.__decorate([
        JsonObject('Project')
    ], Project);
    return Project;
}());
export { Project };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmF0aW9ucy9hcGkvYWRtaW4vcHJvamVjdHMvcHJvamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBR3JEO1FBSVcsT0FBRSxHQUFXLFNBQVMsQ0FBQztRQUd2QixjQUFTLEdBQVcsU0FBUyxDQUFDO1FBRzlCLGNBQVMsR0FBVyxTQUFTLENBQUM7UUFHOUIsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUc3QixnQkFBVyxHQUFvQixDQUFDLElBQUksYUFBYSxFQUFFLENBQUMsQ0FBQztRQUdyRCxhQUFRLEdBQWEsU0FBUyxDQUFDO1FBRy9CLFNBQUksR0FBVyxTQUFTLENBQUM7UUFHekIsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFHaEMsZUFBVSxHQUFhLFNBQVMsQ0FBQztRQUdqQyxXQUFNLEdBQVksU0FBUyxDQUFDO1FBRzVCLGFBQVEsR0FBWSxTQUFTLENBQUM7SUFFekMsQ0FBQztJQWhDRztRQURDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDOzt1Q0FDRztJQUc5QjtRQURDLFlBQVksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDOzs4Q0FDRztJQUdyQztRQURDLFlBQVksQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQzs7OENBQ0g7SUFHckM7UUFEQyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7OzZDQUNIO0lBR3BDO1FBREMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQzs7Z0RBQ1M7SUFHNUQ7UUFEQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDOzs2Q0FDSDtJQUd0QztRQURDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQzs7eUNBQ0g7SUFHaEM7UUFEQyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7O2dEQUNIO0lBR3ZDO1FBREMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzsrQ0FDRztJQUd4QztRQURDLFlBQVksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDOzsyQ0FDRztJQUduQztRQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDOzs2Q0FDRztJQWpDNUIsT0FBTztRQURuQixVQUFVLENBQUMsU0FBUyxDQUFDO09BQ1QsT0FBTyxDQW1DbkI7SUFBRCxjQUFDO0NBQUEsSUFBQTtTQW5DWSxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbk9iamVjdCwgSnNvblByb3BlcnR5IH0gZnJvbSAnanNvbjJ0eXBlc2NyaXB0JztcbmltcG9ydCB7IFN0cmluZ0xpdGVyYWwgfSBmcm9tICcuLi8uLi9zaGFyZWQvc3RyaW5ncyc7XG5cblxuQEpzb25PYmplY3QoJ1Byb2plY3QnKVxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnaWQnLCBTdHJpbmcpXG4gICAgcHVibGljIGlkOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdzaG9ydG5hbWUnLCBTdHJpbmcpXG4gICAgcHVibGljIHNob3J0bmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnc2hvcnRjb2RlJywgU3RyaW5nLCB0cnVlKVxuICAgIHB1YmxpYyBzaG9ydGNvZGU6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ2xvbmduYW1lJywgU3RyaW5nLCB0cnVlKVxuICAgIHB1YmxpYyBsb25nbmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnZGVzY3JpcHRpb24nLCBbU3RyaW5nTGl0ZXJhbF0sIHRydWUpXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBTdHJpbmdMaXRlcmFsW10gPSBbbmV3IFN0cmluZ0xpdGVyYWwoKV07XG5cbiAgICBASnNvblByb3BlcnR5KCdrZXl3b3JkcycsIFtTdHJpbmddLCB0cnVlKVxuICAgIHB1YmxpYyBrZXl3b3Jkczogc3RyaW5nW10gPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdsb2dvJywgU3RyaW5nLCB0cnVlKVxuICAgIHB1YmxpYyBsb2dvOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdpbnN0aXR1dGlvbicsIFN0cmluZywgdHJ1ZSlcbiAgICBwdWJsaWMgaW5zdGl0dXRpb246IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ29udG9sb2dpZXMnLCBbU3RyaW5nXSlcbiAgICBwdWJsaWMgb250b2xvZ2llczogc3RyaW5nW10gPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdzdGF0dXMnLCBCb29sZWFuKVxuICAgIHB1YmxpYyBzdGF0dXM6IGJvb2xlYW4gPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdzZWxmam9pbicsIEJvb2xlYW4pXG4gICAgcHVibGljIHNlbGZqb2luOiBib29sZWFuID0gdW5kZWZpbmVkO1xuXG59XG4iXX0=