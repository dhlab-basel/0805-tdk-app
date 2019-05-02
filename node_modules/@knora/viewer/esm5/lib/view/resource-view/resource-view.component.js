import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageRegion, IncomingService, KnoraConstants, ResourceService, StillImageRepresentation } from '@knora/core';
var jsonld = require('jsonld');
var ResourceViewComponent = /** @class */ (function () {
    function ResourceViewComponent(_route, _router, _resourceService, _incomingService) {
        this._route = _route;
        this._router = _router;
        this._resourceService = _resourceService;
        this._incomingService = _incomingService;
        this.KnoraConstants = KnoraConstants;
    }
    ResourceViewComponent.prototype.ngOnInit = function () {
        this.getResource(this.iri);
    };
    ResourceViewComponent.prototype.ngOnChanges = function () {
        this.getResource(this.iri);
    };
    /**
     * Get a read resource sequence with ontology information and incoming resources.
     *
     * @param {string} id Resource iri
     */
    ResourceViewComponent.prototype.getResource = function (id) {
        var _this = this;
        this.loading = true;
        this._resourceService.getReadResource(decodeURIComponent(id)).subscribe(function (result) {
            _this.sequence = result;
            _this.ontologyInfo = result.ontologyInformation;
            var resType = _this.sequence.resources[0].type;
            _this.guiOrder = result.ontologyInformation.getResourceClasses()[resType].guiOrder;
            // collect images and regions
            _this.collectImagesAndRegionsForResource(_this.sequence.resources[0]);
            // get incoming resources
            _this.requestIncomingResources();
            // this.fileRepresentation = this.sequence.resources[0].properties.indexOf(KnoraConstants.hasStillImageFileValue) > -1;
            // console.log(this.fileRepresentation);
            // wait until the resource is ready
            setTimeout(function () {
                // console.log(this.sequence);
                _this.loading = false;
            }, 1000);
        }, function (error) {
            console.error(error);
        });
    };
    /**
     * Collect all file representations (stillImage, movingImage, audio etc.) and annotations (region, sequence etc.)
     *
     * @param resource
     */
    ResourceViewComponent.prototype.collectFileRepresentationsAndFileAnnotations = function (resource) {
        var fileRepresentations = [];
    };
    ResourceViewComponent.prototype.collectImagesAndRegionsForResource = function (resource) {
        var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
        var imgRepresentations = [];
        if (resource.properties[KnoraConstants.hasStillImageFileValue] !== undefined) {
            // TODO: check if resources is a StillImageRepresentation using the ontology responder (support for subclass relations required)
            // resource has StillImageFileValues that are directly attached to it (properties)
            var fileValues = resource.properties[KnoraConstants.hasStillImageFileValue];
            var imagesToDisplay = fileValues.filter(function (image) {
                return !image.isPreview;
            });
            try {
                for (var imagesToDisplay_1 = tslib_1.__values(imagesToDisplay), imagesToDisplay_1_1 = imagesToDisplay_1.next(); !imagesToDisplay_1_1.done; imagesToDisplay_1_1 = imagesToDisplay_1.next()) {
                    var img = imagesToDisplay_1_1.value;
                    var regions = [];
                    try {
                        for (var _e = tslib_1.__values(resource.incomingRegions), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var incomingRegion = _f.value;
                            var region = new ImageRegion(incomingRegion);
                            regions.push(region);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    var stillImage = new StillImageRepresentation(img, regions);
                    imgRepresentations.push(stillImage);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (imagesToDisplay_1_1 && !imagesToDisplay_1_1.done && (_a = imagesToDisplay_1.return)) _a.call(imagesToDisplay_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else if (resource.incomingStillImageRepresentations.length > 0) {
            // there are StillImageRepresentations pointing to this resource (incoming)
            var readStillImageFileValues = resource.incomingStillImageRepresentations.map(function (stillImageRes) {
                var fileValues = stillImageRes.properties[KnoraConstants.hasStillImageFileValue];
                // TODO: check if resources is a StillImageRepresentation using the ontology responder (support for subclass relations required)
                var imagesToDisplay = fileValues.filter(function (image) {
                    return !image.isPreview;
                });
                return imagesToDisplay;
            }).reduce(function (prev, curr) {
                // transform ReadStillImageFileValue[][] to ReadStillImageFileValue[]
                return prev.concat(curr);
            });
            try {
                for (var readStillImageFileValues_1 = tslib_1.__values(readStillImageFileValues), readStillImageFileValues_1_1 = readStillImageFileValues_1.next(); !readStillImageFileValues_1_1.done; readStillImageFileValues_1_1 = readStillImageFileValues_1.next()) {
                    var img = readStillImageFileValues_1_1.value;
                    var regions = [];
                    try {
                        for (var _g = tslib_1.__values(resource.incomingRegions), _h = _g.next(); !_h.done; _h = _g.next()) {
                            var incomingRegion = _h.value;
                            var region = new ImageRegion(incomingRegion);
                            regions.push(region);
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_h && !_h.done && (_d = _g.return)) _d.call(_g);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    var stillImage = new StillImageRepresentation(img, regions);
                    imgRepresentations.push(stillImage);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (readStillImageFileValues_1_1 && !readStillImageFileValues_1_1.done && (_c = readStillImageFileValues_1.return)) _c.call(readStillImageFileValues_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        resource.stillImageRepresentationsToDisplay = imgRepresentations;
    };
    /**
     * Get incoming resources: incoming links, incoming regions, incoming still image representations.
     */
    ResourceViewComponent.prototype.requestIncomingResources = function () {
        // make sure that this.sequence has been initialized correctly
        if (this.sequence === undefined) {
            return;
        }
        // request incoming regions
        if (this.sequence.resources[0].properties[KnoraConstants.hasStillImageFileValue]) {
            // TODO: check if resources is a StillImageRepresentation using the ontology responder (support for subclass relations required)
            // the resource is a StillImageRepresentation, check if there are regions pointing to it
            this.getIncomingRegions(0);
        }
        else {
            // this resource is not a StillImageRepresentation
            // check if there are StillImageRepresentations pointing to this resource
            // this gets the first page of incoming StillImageRepresentations
            // more pages may be requested by [[this.viewer]].
            // TODO: for now, we begin with offset 0. This may have to be changed later (beginning somewhere in a collection)
            // this.getIncomingStillImageRepresentations(0);
        }
        // check for incoming links for the current resource
        this.getIncomingLinks(0);
    };
    /**
     * Get incoming regions for the resource.
     *
     * @param offset
     * @param callback
     */
    ResourceViewComponent.prototype.getIncomingRegions = function (offset, callback) {
        var _this = this;
        this._incomingService.getIncomingRegions(this.sequence.resources[0].id, offset).subscribe(function (regions) {
            // update ontology information
            _this.ontologyInfo.updateOntologyInformation(regions.ontologyInformation);
            // Append elements of regions.resources to resource.incoming
            Array.prototype.push.apply(_this.sequence.resources[0].incomingRegions, regions.resources);
            // prepare regions to be displayed
            _this.collectImagesAndRegionsForResource(_this.sequence.resources[0]);
            // TODO: implement osdViewer
            /* if (this.osdViewer) {
              this.osdViewer.updateRegions();
            } */
            // if callback is given, execute function with the amount of new images as the parameter
            if (callback !== undefined) {
                callback(regions.resources.length);
            }
        }, function (error) {
            console.error(error);
            _this.loading = false;
        });
    };
    /**
     * Get incoming links for a resource.
     *
     * @param offset
     * @param callback
     */
    ResourceViewComponent.prototype.getIncomingLinks = function (offset, callback) {
        var _this = this;
        this.loading = true;
        this._incomingService.getIncomingLinksForResource(this.sequence.resources[0].id, offset).subscribe(function (incomingResources) {
            // update ontology information
            _this.ontologyInfo.updateOntologyInformation(incomingResources.ontologyInformation);
            // Append elements incomingResources to this.sequence.incomingLinks
            Array.prototype.push.apply(_this.sequence.resources[0].incomingLinks, incomingResources.resources);
            // if callback is given, execute function with the amount of incoming resources as the parameter
            if (callback !== undefined) {
                callback(incomingResources.resources.length);
            }
            _this.loading = false;
        }, function (error) {
            console.error(error);
            _this.loading = false;
        });
    };
    /**
     * Navigate to the incoming resource view.
     *
     * @param {string} id Incoming resource iri
     */
    ResourceViewComponent.prototype.openLink = function (id) {
        this.loading = true;
        this._router.navigate(['/resource/' + encodeURIComponent(id)]);
    };
    ResourceViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-resource-view',
                    template: "<div class=\"resource-view\">\n\n    <kui-progress-indicator *ngIf=\"loading\"></kui-progress-indicator>\n\n    <div *ngIf=\"!loading\">\n\n        <div class=\"resource\" *ngFor=\"let resource of sequence.resources; let last = last\">\n\n            <!-- 0) Title first? -->\n            <mat-list>\n\n                <h3 class=\"mat-subheader\">\n                    {{sequence.ontologyInformation.getLabelForResourceClass(resource.type)}}\n                </h3>\n\n                <mat-list-item>\n                    <h2 class=\"mat-headline\">{{resource.label}}</h2>\n                </mat-list-item>\n\n            </mat-list>\n\n            <!-- 1) show fileRepresentation first-->\n            <div *ngFor=\"let prop of resource.properties | kuiKey\">\n                <div [ngSwitch]=\"prop.key\">\n\n                    <div *ngSwitchCase=\"KnoraConstants.hasStillImageFileValue\" class=\"media\">\n                        <!-- if the property is of type stillImageFileValue, show the image with osd viewer from @knora/viewer TODO: the fileValue will be part of an own resource property -->\n                        <kui-still-image *ngIf=\"resource.stillImageRepresentationsToDisplay.length > 0\" class=\"osd-viewer\" [imageCaption]=\"sequence.ontologyInformation.getLabelForProperty(prop.key)\" [images]=\"resource.stillImageRepresentationsToDisplay\">\n                        </kui-still-image>\n                    </div>\n\n                    <!-- TODO: switch through all other media type -->\n                    <!--\n                    <kui-moving-image></kui-moving-image>\n                    <kui-audio></kui-audio>\n                    <kui-ddd></kui-ddd>\n                    <kui-document></kui-document>\n  \n                    <kui-collection></kui-collection>\n  \n                    <kui-annotation></kui-annotation>\n                    <kui-link-obj></kui-link-obj>\n                    <kui-object></kui-object>\n                    <kui-region></kui-region>\n                    <kui-text></kui-text>\n                    -->\n\n                    <div *ngSwitchDefault class=\"hidden\">\n                        <!--<p>This media type ({{prop.key}}) is not yet implemented</p>-->\n                    </div>\n                </div>\n            </div>\n\n            <!-- 2) show properties, annotations (list of regions, sequences etc.), incomming resources (links, files) -->\n            <div class=\"data\">\n\n                <mat-tab-group class=\"full-width\">\n                    <mat-tab label=\"Metadata\">\n                        <mat-list>\n                            <div *ngFor=\"let prop of guiOrder; let last = last\" class=\"property\">\n                                <div *ngIf=\"resource.properties[prop?.property]\">\n                                    <!-- label of the property -->\n                                    <h3 mat-subheader class=\"property-label\">\n                                        {{sequence.ontologyInformation.getLabelForProperty(prop?.property)}}\n                                    </h3>\n                                    <!-- the value(s) of the property -->\n                                    <mat-list-item class=\"property-value-item\" *ngFor=\"let val of resource.properties[prop?.property]; let lastItem = last\">\n                                        <li [ngSwitch]=\"val.getClassName()\" [class.list]=\"resource.properties[prop?.property].length > 1\" [class.lastItem]=\"lastItem\">\n                                            <kui-text-value-as-string *ngSwitchCase=\"KnoraConstants.ReadTextValueAsString\" [valueObject]=\"val\"></kui-text-value-as-string>\n                                            <kui-text-value-as-xml *ngSwitchCase=\"KnoraConstants.ReadTextValueAsXml\" [valueObject]=\"val\"></kui-text-value-as-xml>\n                                            <kui-date-value *ngSwitchCase=\"KnoraConstants.ReadDateValue\" [valueObject]=\"val\" [calendar]=\"true\" [era]=\"true\"></kui-date-value>\n                                            <kui-link-value class=\"app-link\" *ngSwitchCase=\"KnoraConstants.ReadLinkValue\" [valueObject]=\"val\" [ontologyInfo]=\"ontologyInfo\" (referredResourceClicked)=\"openLink(val.referredResourceIri)\">\n                                            </kui-link-value>\n                                            <kui-integer-value *ngSwitchCase=\"KnoraConstants.ReadIntegerValue\" [valueObject]=\"val\"></kui-integer-value>\n                                            <kui-decimal-value *ngSwitchCase=\"KnoraConstants.ReadDecimalValue\" [valueObject]=\"val\"></kui-decimal-value>\n                                            <kui-geometry-value *ngSwitchCase=\"KnoraConstants.ReadGeomValue\" [valueObject]=\"val\"></kui-geometry-value>\n                                            <kui-color-value *ngSwitchCase=\"KnoraConstants.ReadColorValue\" [valueObject]=\"val\"></kui-color-value>\n                                            <kui-uri-value *ngSwitchCase=\"KnoraConstants.ReadUriValue\" [valueObject]=\"val\"></kui-uri-value>\n                                            <kui-boolean-value *ngSwitchCase=\"KnoraConstants.ReadBooleanValue\" [valueObject]=\"val\"></kui-boolean-value>\n                                            <kui-interval-value *ngSwitchCase=\"KnoraConstants.ReadIntervalValue\" [valueObject]=\"val\"></kui-interval-value>\n                                            <kui-list-value *ngSwitchCase=\"KnoraConstants.ReadListValue\" [valueObject]=\"val\"></kui-list-value>\n                                            <kui-textfile-value *ngSwitchCase=\"KnoraConstants.TextFileValue\" [valueObject]=\"val\"></kui-textfile-value>\n                                            <span *ngSwitchDefault>Not supported {{val.getClassName()}}</span>\n                                        </li>\n                                    </mat-list-item>\n                                </div>\n                            </div>\n                        </mat-list>\n                    </mat-tab>\n\n                    <mat-tab label=\"Annotations\" *ngIf=\"resource.annotations?.length > 0\">\n\n                    </mat-tab>\n\n                    <mat-tab label=\"Links / Connections\" *ngIf=\"resource.incomingLinks?.length > 0\">\n                        <div>\n                            <mat-list *ngFor=\"let incoming of resource.incomingLinks\">\n                                <mat-list-item class=\"app-link\" (click)=\"openLink(incoming.id)\">\n                                    <span>{{incoming.label}}</span>\n                                </mat-list-item>\n                            </mat-list>\n                        </div>\n                    </mat-tab>\n\n                </mat-tab-group>\n\n            </div>\n\n            <!-- in case of more than one resource -->\n            <mat-divider *ngIf=\"!last\"></mat-divider>\n\n        </div>\n\n    </div>\n</div>\n\n\n<!-- OLD / first template\n  <mat-card>\n  \n  \n    <h2>metadata for resource {{ resource?.label}} ({{ resource?.id }})</h2>\n    <h3>type: {{ontologyInfo?.getLabelForResourceClass(resource?.type)}}</h3>\n  \n    <div *ngFor=\"let prop of resource?.properties | kuiKey\">\n        <mat-list>\n            <span>{{ontologyInfo?.getLabelForProperty(prop.key)}}</span>\n            <mat-list-item *ngFor=\"let val of prop.value\">\n                <span [ngSwitch]=\"val.getClassName()\">\n                    <kui-color-value *ngSwitchCase=\"KnoraConstants.ReadColorValue\"\n                                     [valueObject]=\"val\"></kui-color-value>\n                    <kui-text-value-as-html *ngSwitchCase=\"KnoraConstants.ReadTextValueAsHtml\" [valueObject]=\"val\"\n                                            [ontologyInfo]=\"ontologyInfo\" [bindEvents]=\"true\"></kui-text-value-as-html>\n                    <kui-text-value-as-string *ngSwitchCase=\"KnoraConstants.ReadTextValueAsString\"\n                                              [valueObject]=\"val\"></kui-text-value-as-string>\n                    <kui-text-value-as-xml *ngSwitchCase=\"KnoraConstants.ReadTextValueAsXml\"\n                                           [valueObject]=\"val\"></kui-text-value-as-xml>\n                    <kui-date-value *ngSwitchCase=\"KnoraConstants.ReadDateValue\" [valueObject]=\"val\"></kui-date-value>\n                    <kui-link-value *ngSwitchCase=\"KnoraConstants.ReadLinkValue\" [valueObject]=\"val\"\n                                    [ontologyInfo]=\"ontologyInfo\"></kui-link-value>\n                    <kui-integer-value *ngSwitchCase=\"KnoraConstants.ReadIntegerValue\"\n                                       [valueObject]=\"val\"></kui-integer-value>\n                    <kui-decimal-value *ngSwitchCase=\"KnoraConstants.ReadDecimalValue\"\n                                       [valueObject]=\"val\"></kui-decimal-value>\n                    <kui-geometry-value *ngSwitchCase=\"KnoraConstants.ReadGeomValue\"\n                                        [valueObject]=\"val\"></kui-geometry-value>\n                    <kui-uri-value *ngSwitchCase=\"KnoraConstants.ReadUriValue\" [valueObject]=\"val\"></kui-uri-value>\n                    <kui-boolean-value *ngSwitchCase=\"KnoraConstants.ReadBooleanValue\"\n                                       [valueObject]=\"val\"></kui-boolean-value>\n                    <kui-interval-value *ngSwitchCase=\"KnoraConstants.ReadIntervalValue\"\n                                        [valueObject]=\"val\"></kui-interval-value>\n                    <kui-list-value *ngSwitchCase=\"KnoraConstants.ReadListValue\" [valueObject]=\"val\"></kui-list-value>\n                    <kui-textfile-value *ngSwitchCase=\"KnoraConstants.TextFileValue\"\n                                        [valueObject]=\"val\"></kui-textfile-value>\n                    <span *ngSwitchDefault=\"\">Not supported {{val.getClassName()}}</span>\n                </span>\n            </mat-list-item>\n        </mat-list>\n    </div>\n  \n  </mat-card>\n  -->\n",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-read-more{position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:30px 0;border-radius:3px}.resource-view{max-width:720px;margin:0 auto}.resource-view .resource .media{width:720px;height:calc(720px / (4 / 3))}.resource-view .resource .data{min-height:700px;padding:24px 36px}.hidden{display:none}.property{margin-bottom:12px}.property .property-value-item{min-height:48px;height:auto}.property .property-value-item li{list-style-type:none}.property .property-value-item li.list:before{content:'-    '}.property .property-value-item li.lastItem{margin-bottom:12px}"]
                }] }
    ];
    /** @nocollapse */
    ResourceViewComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: Router },
        { type: ResourceService },
        { type: IncomingService }
    ]; };
    ResourceViewComponent.propDecorators = {
        iri: [{ type: Input }]
    };
    return ResourceViewComponent;
}());
export { ResourceViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2Utdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3ZpZXcvcmVzb3VyY2Utdmlldy9yZXNvdXJjZS12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQThDLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUdILFdBQVcsRUFDWCxlQUFlLEVBQ2YsY0FBYyxFQUtkLGVBQWUsRUFDZix3QkFBd0IsRUFDM0IsTUFBTSxhQUFhLENBQUM7QUFLckIsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpDO0lBdUJJLCtCQUFzQixNQUFzQixFQUM5QixPQUFlLEVBQ2YsZ0JBQWlDLEVBQ2pDLGdCQUFpQztRQUh6QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUM5QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBUi9DLG1CQUFjLEdBQUcsY0FBYyxDQUFDO0lBV2hDLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDJDQUFXLEdBQVgsVUFBWSxFQUFVO1FBQXRCLGlCQWdDQztRQS9CRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFD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SSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEdBQUcsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5FLENBQUM7O2dCQTdRSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsdTJUQUE2Qzs7aUJBRWhEOzs7O2dCQXhCUSxjQUFjO2dCQUFFLE1BQU07Z0JBVzNCLGVBQWU7Z0JBTmYsZUFBZTs7O3NCQXlCZCxLQUFLOztJQXFRViw0QkFBQztDQUFBLEFBL1FELElBK1FDO1NBMVFZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICAgIEFwaVNlcnZpY2VFcnJvcixcbiAgICBHdWlPcmRlcixcbiAgICBJbWFnZVJlZ2lvbixcbiAgICBJbmNvbWluZ1NlcnZpY2UsXG4gICAgS25vcmFDb25zdGFudHMsXG4gICAgT250b2xvZ3lJbmZvcm1hdGlvbixcbiAgICBSZWFkUmVzb3VyY2UsXG4gICAgUmVhZFJlc291cmNlc1NlcXVlbmNlLFxuICAgIFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlLFxuICAgIFJlc291cmNlU2VydmljZSxcbiAgICBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25cbn0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG4vLyBpbXBvcnQgeyBJbWFnZVJlZ2lvbiwgU3RpbGxJbWFnZVJlcHJlc2VudGF0aW9uIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2UnO1xuXG5kZWNsYXJlIGxldCByZXF1aXJlOiBhbnk7XG5jb25zdCBqc29ubGQgPSByZXF1aXJlKCdqc29ubGQnKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktcmVzb3VyY2UtdmlldycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Jlc291cmNlLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3Jlc291cmNlLXZpZXcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2lyaV0gUmVzb3VyY2UgaXJpXG4gICAgICovXG4gICAgQElucHV0KCkgaXJpPzogc3RyaW5nO1xuXG4gICAgc2VxdWVuY2U6IFJlYWRSZXNvdXJjZXNTZXF1ZW5jZTtcblxuICAgIG9udG9sb2d5SW5mbzogT250b2xvZ3lJbmZvcm1hdGlvbjtcbiAgICBndWlPcmRlcjogR3VpT3JkZXJbXTtcbiAgICBsb2FkaW5nOiBib29sZWFuO1xuICAgIGVycm9yOiBhbnk7XG4gICAgS25vcmFDb25zdGFudHMgPSBLbm9yYUNvbnN0YW50cztcblxuICAgIC8vIGRvZXMgdGhlIHJlc291cmNlIGhhcyBhIGZpbGUgcmVwcmVzZW50YXRpb24gKG1lZGlhIGZpbGUpP1xuICAgIGZpbGVSZXByZXNlbnRhdGlvbjogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcm90ZWN0ZWQgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgX3Jlc291cmNlU2VydmljZTogUmVzb3VyY2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgX2luY29taW5nU2VydmljZTogSW5jb21pbmdTZXJ2aWNlXG4gICAgKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRSZXNvdXJjZSh0aGlzLmlyaSk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMuZ2V0UmVzb3VyY2UodGhpcy5pcmkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIHJlYWQgcmVzb3VyY2Ugc2VxdWVuY2Ugd2l0aCBvbnRvbG9neSBpbmZvcm1hdGlvbiBhbmQgaW5jb21pbmcgcmVzb3VyY2VzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFJlc291cmNlIGlyaVxuICAgICAqL1xuICAgIGdldFJlc291cmNlKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVzb3VyY2VTZXJ2aWNlLmdldFJlYWRSZXNvdXJjZShkZWNvZGVVUklDb21wb25lbnQoaWQpKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzdWx0OiBSZWFkUmVzb3VyY2VzU2VxdWVuY2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcXVlbmNlID0gcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5vbnRvbG9neUluZm8gPSByZXN1bHQub250b2xvZ3lJbmZvcm1hdGlvbjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc1R5cGUgPSB0aGlzLnNlcXVlbmNlLnJlc291cmNlc1swXS50eXBlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ndWlPcmRlciA9IHJlc3VsdC5vbnRvbG9neUluZm9ybWF0aW9uLmdldFJlc291cmNlQ2xhc3NlcygpW3Jlc1R5cGVdLmd1aU9yZGVyO1xuXG4gICAgICAgICAgICAgICAgLy8gY29sbGVjdCBpbWFnZXMgYW5kIHJlZ2lvbnNcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3RJbWFnZXNBbmRSZWdpb25zRm9yUmVzb3VyY2UodGhpcy5zZXF1ZW5jZS5yZXNvdXJjZXNbMF0pO1xuXG4gICAgICAgICAgICAgICAgLy8gZ2V0IGluY29taW5nIHJlc291cmNlc1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdEluY29taW5nUmVzb3VyY2VzKCk7XG5cblxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZmlsZVJlcHJlc2VudGF0aW9uID0gdGhpcy5zZXF1ZW5jZS5yZXNvdXJjZXNbMF0ucHJvcGVydGllcy5pbmRleE9mKEtub3JhQ29uc3RhbnRzLmhhc1N0aWxsSW1hZ2VGaWxlVmFsdWUpID4gLTE7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlUmVwcmVzZW50YXRpb24pO1xuXG4gICAgICAgICAgICAgICAgLy8gd2FpdCB1bnRpbCB0aGUgcmVzb3VyY2UgaXMgcmVhZHlcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZXF1ZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcjogQXBpU2VydmljZUVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb2xsZWN0IGFsbCBmaWxlIHJlcHJlc2VudGF0aW9ucyAoc3RpbGxJbWFnZSwgbW92aW5nSW1hZ2UsIGF1ZGlvIGV0Yy4pIGFuZCBhbm5vdGF0aW9ucyAocmVnaW9uLCBzZXF1ZW5jZSBldGMuKVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlc291cmNlXG4gICAgICovXG4gICAgY29sbGVjdEZpbGVSZXByZXNlbnRhdGlvbnNBbmRGaWxlQW5ub3RhdGlvbnMocmVzb3VyY2U6IFJlYWRSZXNvdXJjZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBmaWxlUmVwcmVzZW50YXRpb25zOiBhbnlbXSA9IFtdO1xuICAgIH1cblxuXG4gICAgY29sbGVjdEltYWdlc0FuZFJlZ2lvbnNGb3JSZXNvdXJjZShyZXNvdXJjZTogUmVhZFJlc291cmNlKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgaW1nUmVwcmVzZW50YXRpb25zOiBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25bXSA9IFtdO1xuXG4gICAgICAgIGlmIChyZXNvdXJjZS5wcm9wZXJ0aWVzW0tub3JhQ29uc3RhbnRzLmhhc1N0aWxsSW1hZ2VGaWxlVmFsdWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGNoZWNrIGlmIHJlc291cmNlcyBpcyBhIFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbiB1c2luZyB0aGUgb250b2xvZ3kgcmVzcG9uZGVyIChzdXBwb3J0IGZvciBzdWJjbGFzcyByZWxhdGlvbnMgcmVxdWlyZWQpXG4gICAgICAgICAgICAvLyByZXNvdXJjZSBoYXMgU3RpbGxJbWFnZUZpbGVWYWx1ZXMgdGhhdCBhcmUgZGlyZWN0bHkgYXR0YWNoZWQgdG8gaXQgKHByb3BlcnRpZXMpXG5cbiAgICAgICAgICAgIGNvbnN0IGZpbGVWYWx1ZXM6IFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlW10gPSByZXNvdXJjZS5wcm9wZXJ0aWVzW0tub3JhQ29uc3RhbnRzLmhhc1N0aWxsSW1hZ2VGaWxlVmFsdWVdIGFzIFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlW107XG4gICAgICAgICAgICBjb25zdCBpbWFnZXNUb0Rpc3BsYXk6IFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlW10gPSBmaWxlVmFsdWVzLmZpbHRlcigoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWltYWdlLmlzUHJldmlldztcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgaW1nIG9mIGltYWdlc1RvRGlzcGxheSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVnaW9uczogSW1hZ2VSZWdpb25bXSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5jb21pbmdSZWdpb24gb2YgcmVzb3VyY2UuaW5jb21pbmdSZWdpb25zKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnaW9uID0gbmV3IEltYWdlUmVnaW9uKGluY29taW5nUmVnaW9uKTtcblxuICAgICAgICAgICAgICAgICAgICByZWdpb25zLnB1c2gocmVnaW9uKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0aWxsSW1hZ2UgPSBuZXcgU3RpbGxJbWFnZVJlcHJlc2VudGF0aW9uKGltZywgcmVnaW9ucyk7XG4gICAgICAgICAgICAgICAgaW1nUmVwcmVzZW50YXRpb25zLnB1c2goc3RpbGxJbWFnZSk7XG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0gZWxzZSBpZiAocmVzb3VyY2UuaW5jb21pbmdTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIHRoZXJlIGFyZSBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zIHBvaW50aW5nIHRvIHRoaXMgcmVzb3VyY2UgKGluY29taW5nKVxuXG4gICAgICAgICAgICBjb25zdCByZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZXM6IFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlW10gPSByZXNvdXJjZS5pbmNvbWluZ1N0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMubWFwKFxuICAgICAgICAgICAgICAgIChzdGlsbEltYWdlUmVzOiBSZWFkUmVzb3VyY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZVZhbHVlcyA9IHN0aWxsSW1hZ2VSZXMucHJvcGVydGllc1tLbm9yYUNvbnN0YW50cy5oYXNTdGlsbEltYWdlRmlsZVZhbHVlXSBhcyBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZVtdO1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBjaGVjayBpZiByZXNvdXJjZXMgaXMgYSBTdGlsbEltYWdlUmVwcmVzZW50YXRpb24gdXNpbmcgdGhlIG9udG9sb2d5IHJlc3BvbmRlciAoc3VwcG9ydCBmb3Igc3ViY2xhc3MgcmVsYXRpb25zIHJlcXVpcmVkKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZXNUb0Rpc3BsYXkgPSBmaWxlVmFsdWVzLmZpbHRlcigoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhaW1hZ2UuaXNQcmV2aWV3O1xuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWFnZXNUb0Rpc3BsYXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm0gUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVbXVtdIHRvIFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlW11cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldi5jb25jYXQoY3Vycik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBpbWcgb2YgcmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVzKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZWdpb25zOiBJbWFnZVJlZ2lvbltdID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbmNvbWluZ1JlZ2lvbiBvZiByZXNvdXJjZS5pbmNvbWluZ1JlZ2lvbnMpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdpb24gPSBuZXcgSW1hZ2VSZWdpb24oaW5jb21pbmdSZWdpb24pO1xuICAgICAgICAgICAgICAgICAgICByZWdpb25zLnB1c2gocmVnaW9uKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0aWxsSW1hZ2UgPSBuZXcgU3RpbGxJbWFnZVJlcHJlc2VudGF0aW9uKGltZywgcmVnaW9ucyk7XG4gICAgICAgICAgICAgICAgaW1nUmVwcmVzZW50YXRpb25zLnB1c2goc3RpbGxJbWFnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc291cmNlLnN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnNUb0Rpc3BsYXkgPSBpbWdSZXByZXNlbnRhdGlvbnM7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgaW5jb21pbmcgcmVzb3VyY2VzOiBpbmNvbWluZyBsaW5rcywgaW5jb21pbmcgcmVnaW9ucywgaW5jb21pbmcgc3RpbGwgaW1hZ2UgcmVwcmVzZW50YXRpb25zLlxuICAgICAqL1xuICAgIHJlcXVlc3RJbmNvbWluZ1Jlc291cmNlcygpOiB2b2lkIHtcblxuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGlzLnNlcXVlbmNlIGhhcyBiZWVuIGluaXRpYWxpemVkIGNvcnJlY3RseVxuICAgICAgICBpZiAodGhpcy5zZXF1ZW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXF1ZXN0IGluY29taW5nIHJlZ2lvbnNcbiAgICAgICAgaWYgKHRoaXMuc2VxdWVuY2UucmVzb3VyY2VzWzBdLnByb3BlcnRpZXNbS25vcmFDb25zdGFudHMuaGFzU3RpbGxJbWFnZUZpbGVWYWx1ZV0pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGNoZWNrIGlmIHJlc291cmNlcyBpcyBhIFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbiB1c2luZyB0aGUgb250b2xvZ3kgcmVzcG9uZGVyIChzdXBwb3J0IGZvciBzdWJjbGFzcyByZWxhdGlvbnMgcmVxdWlyZWQpXG4gICAgICAgICAgICAvLyB0aGUgcmVzb3VyY2UgaXMgYSBTdGlsbEltYWdlUmVwcmVzZW50YXRpb24sIGNoZWNrIGlmIHRoZXJlIGFyZSByZWdpb25zIHBvaW50aW5nIHRvIGl0XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0SW5jb21pbmdSZWdpb25zKDApO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0aGlzIHJlc291cmNlIGlzIG5vdCBhIFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgYXJlIFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMgcG9pbnRpbmcgdG8gdGhpcyByZXNvdXJjZVxuXG4gICAgICAgICAgICAvLyB0aGlzIGdldHMgdGhlIGZpcnN0IHBhZ2Ugb2YgaW5jb21pbmcgU3RpbGxJbWFnZVJlcHJlc2VudGF0aW9uc1xuICAgICAgICAgICAgLy8gbW9yZSBwYWdlcyBtYXkgYmUgcmVxdWVzdGVkIGJ5IFtbdGhpcy52aWV3ZXJdXS5cbiAgICAgICAgICAgIC8vIFRPRE86IGZvciBub3csIHdlIGJlZ2luIHdpdGggb2Zmc2V0IDAuIFRoaXMgbWF5IGhhdmUgdG8gYmUgY2hhbmdlZCBsYXRlciAoYmVnaW5uaW5nIHNvbWV3aGVyZSBpbiBhIGNvbGxlY3Rpb24pXG4gICAgICAgICAgICAvLyB0aGlzLmdldEluY29taW5nU3RpbGxJbWFnZVJlcHJlc2VudGF0aW9ucygwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGZvciBpbmNvbWluZyBsaW5rcyBmb3IgdGhlIGN1cnJlbnQgcmVzb3VyY2VcbiAgICAgICAgdGhpcy5nZXRJbmNvbWluZ0xpbmtzKDApO1xuXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgaW5jb21pbmcgcmVnaW9ucyBmb3IgdGhlIHJlc291cmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIG9mZnNldFxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGdldEluY29taW5nUmVnaW9ucyhvZmZzZXQ6IG51bWJlciwgY2FsbGJhY2s/OiAobnVtYmVyT2ZSZXNvdXJjZXM6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9pbmNvbWluZ1NlcnZpY2UuZ2V0SW5jb21pbmdSZWdpb25zKHRoaXMuc2VxdWVuY2UucmVzb3VyY2VzWzBdLmlkLCBvZmZzZXQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZWdpb25zOiBSZWFkUmVzb3VyY2VzU2VxdWVuY2UpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgb250b2xvZ3kgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLm9udG9sb2d5SW5mby51cGRhdGVPbnRvbG9neUluZm9ybWF0aW9uKHJlZ2lvbnMub250b2xvZ3lJbmZvcm1hdGlvbik7XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHMgb2YgcmVnaW9ucy5yZXNvdXJjZXMgdG8gcmVzb3VyY2UuaW5jb21pbmdcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0aGlzLnNlcXVlbmNlLnJlc291cmNlc1swXS5pbmNvbWluZ1JlZ2lvbnMsIHJlZ2lvbnMucmVzb3VyY2VzKTtcblxuICAgICAgICAgICAgICAgIC8vIHByZXBhcmUgcmVnaW9ucyB0byBiZSBkaXNwbGF5ZWRcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3RJbWFnZXNBbmRSZWdpb25zRm9yUmVzb3VyY2UodGhpcy5zZXF1ZW5jZS5yZXNvdXJjZXNbMF0pO1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogaW1wbGVtZW50IG9zZFZpZXdlclxuICAgICAgICAgICAgICAgIC8qIGlmICh0aGlzLm9zZFZpZXdlcikge1xuICAgICAgICAgICAgICAgICAgdGhpcy5vc2RWaWV3ZXIudXBkYXRlUmVnaW9ucygpO1xuICAgICAgICAgICAgICAgIH0gKi9cblxuICAgICAgICAgICAgICAgIC8vIGlmIGNhbGxiYWNrIGlzIGdpdmVuLCBleGVjdXRlIGZ1bmN0aW9uIHdpdGggdGhlIGFtb3VudCBvZiBuZXcgaW1hZ2VzIGFzIHRoZSBwYXJhbWV0ZXJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZWdpb25zLnJlc291cmNlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBpbmNvbWluZyBsaW5rcyBmb3IgYSByZXNvdXJjZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvZmZzZXRcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBnZXRJbmNvbWluZ0xpbmtzKG9mZnNldDogbnVtYmVyLCBjYWxsYmFjaz86IChudW1iZXJPZlJlc291cmNlczogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl9pbmNvbWluZ1NlcnZpY2UuZ2V0SW5jb21pbmdMaW5rc0ZvclJlc291cmNlKHRoaXMuc2VxdWVuY2UucmVzb3VyY2VzWzBdLmlkLCBvZmZzZXQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChpbmNvbWluZ1Jlc291cmNlczogUmVhZFJlc291cmNlc1NlcXVlbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIG9udG9sb2d5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5vbnRvbG9neUluZm8udXBkYXRlT250b2xvZ3lJbmZvcm1hdGlvbihpbmNvbWluZ1Jlc291cmNlcy5vbnRvbG9neUluZm9ybWF0aW9uKTtcblxuICAgICAgICAgICAgICAgIC8vIEFwcGVuZCBlbGVtZW50cyBpbmNvbWluZ1Jlc291cmNlcyB0byB0aGlzLnNlcXVlbmNlLmluY29taW5nTGlua3NcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0aGlzLnNlcXVlbmNlLnJlc291cmNlc1swXS5pbmNvbWluZ0xpbmtzLCBpbmNvbWluZ1Jlc291cmNlcy5yZXNvdXJjZXMpO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgY2FsbGJhY2sgaXMgZ2l2ZW4sIGV4ZWN1dGUgZnVuY3Rpb24gd2l0aCB0aGUgYW1vdW50IG9mIGluY29taW5nIHJlc291cmNlcyBhcyB0aGUgcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soaW5jb21pbmdSZXNvdXJjZXMucmVzb3VyY2VzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOYXZpZ2F0ZSB0byB0aGUgaW5jb21pbmcgcmVzb3VyY2Ugdmlldy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBJbmNvbWluZyByZXNvdXJjZSBpcmlcbiAgICAgKi9cbiAgICBvcGVuTGluayhpZDogc3RyaW5nKSB7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3Jlc291cmNlLycgKyBlbmNvZGVVUklDb21wb25lbnQoaWQpXSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==