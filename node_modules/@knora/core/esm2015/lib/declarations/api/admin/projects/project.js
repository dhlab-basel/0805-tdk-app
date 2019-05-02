import * as tslib_1 from "tslib";
import { JsonObject, JsonProperty } from 'json2typescript';
import { StringLiteral } from '../../shared/strings';
let Project = class Project {
    constructor() {
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
};
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
export { Project };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RlY2xhcmF0aW9ucy9hcGkvYWRtaW4vcHJvamVjdHMvcHJvamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7SUFJeEMsT0FBTyxTQUFQLE9BQU87SUFEcEI7UUFJVyxPQUFFLEdBQVcsU0FBUyxDQUFDO1FBR3ZCLGNBQVMsR0FBVyxTQUFTLENBQUM7UUFHOUIsY0FBUyxHQUFXLFNBQVMsQ0FBQztRQUc5QixhQUFRLEdBQVcsU0FBUyxDQUFDO1FBRzdCLGdCQUFXLEdBQW9CLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBR3JELGFBQVEsR0FBYSxTQUFTLENBQUM7UUFHL0IsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUd6QixnQkFBVyxHQUFXLFNBQVMsQ0FBQztRQUdoQyxlQUFVLEdBQWEsU0FBUyxDQUFDO1FBR2pDLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFHNUIsYUFBUSxHQUFZLFNBQVMsQ0FBQztJQUV6QyxDQUFDO0NBQUEsQ0FBQTtBQWhDRztJQURDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDOzttQ0FDRztBQUc5QjtJQURDLFlBQVksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDOzswQ0FDRztBQUdyQztJQURDLFlBQVksQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQzs7MENBQ0g7QUFHckM7SUFEQyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7O3lDQUNIO0FBR3BDO0lBREMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQzs7NENBQ1M7QUFHNUQ7SUFEQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDOzt5Q0FDSDtBQUd0QztJQURDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQzs7cUNBQ0g7QUFHaEM7SUFEQyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7OzRDQUNIO0FBR3ZDO0lBREMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzsyQ0FDRztBQUd4QztJQURDLFlBQVksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDOzt1Q0FDRztBQUduQztJQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDOzt5Q0FDRztBQWpDNUIsT0FBTztJQURuQixVQUFVLENBQUMsU0FBUyxDQUFDO0dBQ1QsT0FBTyxDQW1DbkI7U0FuQ1ksT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25PYmplY3QsIEpzb25Qcm9wZXJ0eSB9IGZyb20gJ2pzb24ydHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBTdHJpbmdMaXRlcmFsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0cmluZ3MnO1xuXG5cbkBKc29uT2JqZWN0KCdQcm9qZWN0JylcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcblxuICAgIEBKc29uUHJvcGVydHkoJ2lkJywgU3RyaW5nKVxuICAgIHB1YmxpYyBpZDogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnc2hvcnRuYW1lJywgU3RyaW5nKVxuICAgIHB1YmxpYyBzaG9ydG5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ3Nob3J0Y29kZScsIFN0cmluZywgdHJ1ZSlcbiAgICBwdWJsaWMgc2hvcnRjb2RlOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdsb25nbmFtZScsIFN0cmluZywgdHJ1ZSlcbiAgICBwdWJsaWMgbG9uZ25hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICAgIEBKc29uUHJvcGVydHkoJ2Rlc2NyaXB0aW9uJywgW1N0cmluZ0xpdGVyYWxdLCB0cnVlKVxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogU3RyaW5nTGl0ZXJhbFtdID0gW25ldyBTdHJpbmdMaXRlcmFsKCldO1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgna2V5d29yZHMnLCBbU3RyaW5nXSwgdHJ1ZSlcbiAgICBwdWJsaWMga2V5d29yZHM6IHN0cmluZ1tdID0gdW5kZWZpbmVkO1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnbG9nbycsIFN0cmluZywgdHJ1ZSlcbiAgICBwdWJsaWMgbG9nbzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnaW5zdGl0dXRpb24nLCBTdHJpbmcsIHRydWUpXG4gICAgcHVibGljIGluc3RpdHV0aW9uOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICBASnNvblByb3BlcnR5KCdvbnRvbG9naWVzJywgW1N0cmluZ10pXG4gICAgcHVibGljIG9udG9sb2dpZXM6IHN0cmluZ1tdID0gdW5kZWZpbmVkO1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnc3RhdHVzJywgQm9vbGVhbilcbiAgICBwdWJsaWMgc3RhdHVzOiBib29sZWFuID0gdW5kZWZpbmVkO1xuXG4gICAgQEpzb25Qcm9wZXJ0eSgnc2VsZmpvaW4nLCBCb29sZWFuKVxuICAgIHB1YmxpYyBzZWxmam9pbjogYm9vbGVhbiA9IHVuZGVmaW5lZDtcblxufVxuIl19