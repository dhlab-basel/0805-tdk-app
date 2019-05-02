import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { KnoraConstants, Point2D } from '@knora/core';
/**
 * Represents a region.
 * Contains a reference to the resource representing the region and its geometries.
 */
var ImageRegion = /** @class */ (function () {
    /**
     *
     * @param regionResource a resource of type Region
     */
    function ImageRegion(regionResource) {
        this.regionResource = regionResource;
    }
    /**
     * Get all geometry information belonging to this region.
     *
     * @returns
     */
    ImageRegion.prototype.getGeometries = function () {
        return this.regionResource.properties[KnoraConstants.hasGeometry];
    };
    return ImageRegion;
}());
export { ImageRegion };
/**
 * Represents an image including its regions.
 */
var StillImageRepresentation = /** @class */ (function () {
    /**
     *
     * @param stillImageFileValue a [[ReadStillImageFileValue]] representing an image.
     * @param regions the regions belonging to the image.
     */
    function StillImageRepresentation(stillImageFileValue, regions) {
        this.stillImageFileValue = stillImageFileValue;
        this.regions = regions;
    }
    return StillImageRepresentation;
}());
export { StillImageRepresentation };
/**
 * Represents a geometry belonging to a specific region.
 */
var GeometryForRegion = /** @class */ (function () {
    /**
     *
     * @param geometry the geometrical information.
     * @param region the region the geometry belongs to.
     */
    function GeometryForRegion(geometry, region) {
        this.geometry = geometry;
        this.region = region;
    }
    return GeometryForRegion;
}());
export { GeometryForRegion };
/**
 * This component creates a OpenSeadragon viewer instance.
 * Accepts an array of ReadResource containing (among other resources) ReadStillImageFileValues to be rendered.
 * @member resources - resources containing (among other resources) the StillImageFileValues and incoming regions to be rendered. (Use as angular @Input data binding property.)
 */
var StillImageComponent = /** @class */ (function () {
    function StillImageComponent(elementRef) {
        this.elementRef = elementRef;
        this.regionHovered = new EventEmitter();
        this.regions = {};
    }
    /**
     * Calculates the surface of a rectangular region.
     *
     * @param geom the region's geometry.
     * @returns the surface.
     */
    StillImageComponent.surfaceOfRectangularRegion = function (geom) {
        if (geom.type !== 'rectangle') {
            console.log('expected rectangular region, but ' + geom.type + ' given');
            return 0;
        }
        var w = Math.max(geom.points[0].x, geom.points[1].x) - Math.min(geom.points[0].x, geom.points[1].x);
        var h = Math.max(geom.points[0].y, geom.points[1].y) - Math.min(geom.points[0].y, geom.points[1].y);
        return w * h;
    };
    /**
     * Prepare tile sources from the given sequence of [[ReadStillImageFileValue]].
     *
     * @param imagesToDisplay the given file values to de displayed.
     * @returns the tile sources to be passed to OSD viewer.
     */
    StillImageComponent.prepareTileSourcesFromFileValues = function (imagesToDisplay) {
        var e_1, _a;
        var imageXOffset = 0;
        var imageYOffset = 0;
        var tileSources = [];
        try {
            for (var imagesToDisplay_1 = tslib_1.__values(imagesToDisplay), imagesToDisplay_1_1 = imagesToDisplay_1.next(); !imagesToDisplay_1_1.done; imagesToDisplay_1_1 = imagesToDisplay_1.next()) {
                var image = imagesToDisplay_1_1.value;
                var sipiBasePath = image.imageServerIIIFBaseURL + '/' + image.imageFilename;
                var width = image.dimX;
                var height = image.dimY;
                // construct OpenSeadragon tileSources according to https://openseadragon.github.io/docs/OpenSeadragon.Viewer.html#open
                tileSources.push({
                    // construct IIIF tileSource configuration according to
                    // http://iiif.io/api/image/2.1/#technical-properties
                    // see also http://iiif.io/api/image/2.0/#a-implementation-notes
                    'tileSource': {
                        '@context': 'http://iiif.io/api/image/2/context.json',
                        '@id': sipiBasePath,
                        'height': height,
                        'width': width,
                        'profile': ['http://iiif.io/api/image/2/level2.json'],
                        'protocol': 'http://iiif.io/api/image',
                        'tiles': [{
                                'scaleFactors': [1, 2, 4, 8, 16, 32],
                                'width': 1024
                            }]
                    },
                    'x': imageXOffset,
                    'y': imageYOffset
                });
                imageXOffset++;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (imagesToDisplay_1_1 && !imagesToDisplay_1_1.done && (_a = imagesToDisplay_1.return)) _a.call(imagesToDisplay_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return tileSources;
    };
    StillImageComponent.prototype.ngOnChanges = function (changes) {
        if (changes['images'] && changes['images'].isFirstChange()) {
            this.setupViewer();
        }
        if (changes['images']) {
            this.openImages();
            this.renderRegions();
            this.unhighlightAllRegions();
            if (this.activateRegion !== undefined) {
                this.highlightRegion(this.activateRegion);
            }
        }
        else if (changes['activateRegion']) {
            this.unhighlightAllRegions();
            if (this.activateRegion !== undefined) {
                this.highlightRegion(this.activateRegion);
            }
        }
    };
    StillImageComponent.prototype.ngOnInit = function () {
        // initialisation is done on first run of ngOnChanges
    };
    StillImageComponent.prototype.ngOnDestroy = function () {
        if (this.viewer) {
            this.viewer.destroy();
            this.viewer = undefined;
        }
    };
    /**
     * Renders all ReadStillImageFileValues to be found in [[this.images]].
     * (Although this.images is a Angular Input property, the built-in change detection of Angular does not detect changes in complex objects or arrays, only reassignment of objects/arrays.
     * Use this method if additional ReadStillImageFileValues were added to this.images after creation/assignment of the this.images array.)
     */
    StillImageComponent.prototype.updateImages = function () {
        if (!this.viewer) {
            this.setupViewer();
        }
        this.openImages();
    };
    /**
     * Renders all regions to be found in [[this.images]].
     * (Although this.images is a Angular Input property, the built-in change detection of Angular does not detect changes in complex objects or arrays, only reassignment of objects/arrays.
     * Use this method if additional regions were added to the resources.images)
     */
    StillImageComponent.prototype.updateRegions = function () {
        if (!this.viewer) {
            this.setupViewer();
        }
        this.renderRegions();
    };
    /**
     * Highlights the polygon elements associated with the given region.
     *
     * @param regionIri the Iri of the region whose polygon elements should be highlighted..
     */
    StillImageComponent.prototype.highlightRegion = function (regionIri) {
        var e_2, _a;
        var activeRegion = this.regions[regionIri];
        if (activeRegion !== undefined) {
            try {
                for (var activeRegion_1 = tslib_1.__values(activeRegion), activeRegion_1_1 = activeRegion_1.next(); !activeRegion_1_1.done; activeRegion_1_1 = activeRegion_1.next()) {
                    var pol = activeRegion_1_1.value;
                    pol.setAttribute('class', 'roi-svgoverlay active');
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (activeRegion_1_1 && !activeRegion_1_1.done && (_a = activeRegion_1.return)) _a.call(activeRegion_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    /**
     * Unhighlights the polygon elements of all regions.
     *
     */
    StillImageComponent.prototype.unhighlightAllRegions = function () {
        var e_3, _a;
        for (var reg in this.regions) {
            if (this.regions.hasOwnProperty(reg)) {
                try {
                    for (var _b = tslib_1.__values(this.regions[reg]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var pol = _c.value;
                        pol.setAttribute('class', 'roi-svgoverlay');
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
    };
    /**
     * Initializes the OpenSeadragon viewer
     */
    StillImageComponent.prototype.setupViewer = function () {
        var viewerContainer = this.elementRef.nativeElement.getElementsByClassName('osd-container')[0];
        var osdOptions = {
            element: viewerContainer,
            sequenceMode: true,
            showReferenceStrip: true,
            showNavigator: true,
            zoomInButton: 'KUI_OSD_ZOOM_IN',
            zoomOutButton: 'KUI_OSD_ZOOM_OUT',
            previousButton: 'KUI_OSD_PREV_PAGE',
            nextButton: 'KUI_OSD_NEXT_PAGE',
            homeButton: 'KUI_OSD_HOME',
            fullPageButton: 'KUI_OSD_FULL_PAGE',
            rotateLeftButton: 'KUI_OSD_ROTATE_LEFT',
            rotateRightButton: 'KUI_OSD_ROTATE_RIGHT' // doesn't work yet
        };
        this.viewer = new OpenSeadragon.Viewer(osdOptions);
        this.viewer.addHandler('full-screen', function (args) {
            if (args.fullScreen) {
                viewerContainer.classList.add('fullscreen');
            }
            else {
                viewerContainer.classList.remove('fullscreen');
            }
        });
        this.viewer.addHandler('resize', function (args) {
            args.eventSource.svgOverlay().resize();
        });
    };
    /**
     * Adds all images in this.images to the viewer.
     * Images are positioned in a horizontal row next to each other.
     */
    StillImageComponent.prototype.openImages = function () {
        // imageXOffset controls the x coordinate of the left side of each image in the OpenSeadragon viewport coordinate system.
        // The first image has its left side at x = 0, and all images are scaled to have a width of 1 in viewport coordinates.
        // see also: https://openseadragon.github.io/examples/viewport-coordinates/
        var fileValues = this.images.map(function (img) {
            return img.stillImageFileValue;
        });
        // display only the defined range of this.images
        var tileSources = StillImageComponent.prepareTileSourcesFromFileValues(fileValues);
        this.removeOverlays();
        this.viewer.open(tileSources);
    };
    /**
     * Removes SVG overlays from the DOM.
     */
    StillImageComponent.prototype.removeOverlays = function () {
        var e_4, _a;
        for (var reg in this.regions) {
            if (this.regions.hasOwnProperty(reg)) {
                try {
                    for (var _b = tslib_1.__values(this.regions[reg]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var pol = _c.value;
                        if (pol instanceof SVGPolygonElement) {
                            pol.remove();
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        this.regions = {};
        // TODO: make this work by using osdviewer's addOverlay method
        this.viewer.clearOverlays();
    };
    /**
     * Adds a ROI-overlay to the viewer for every region of every image in this.images
     */
    StillImageComponent.prototype.renderRegions = function () {
        var _this = this;
        var e_5, _a;
        this.removeOverlays();
        var imageXOffset = 0; // see documentation in this.openImages() for the usage of imageXOffset
        var _loop_1 = function (image) {
            var e_6, _a;
            var aspectRatio = (image.stillImageFileValue.dimY / image.stillImageFileValue.dimX);
            // collect all geometries belonging to this page
            var geometries = [];
            image.regions.map(function (reg) {
                _this.regions[reg.regionResource.id] = [];
                var geoms = reg.getGeometries();
                geoms.map(function (geom) {
                    var geomForReg = new GeometryForRegion(geom.geometry, reg.regionResource);
                    geometries.push(geomForReg);
                });
            });
            // sort all geometries belonging to this page
            geometries.sort(function (geom1, geom2) {
                if (geom1.geometry.type === 'rectangle' && geom2.geometry.type === 'rectangle') {
                    var surf1 = StillImageComponent.surfaceOfRectangularRegion(geom1.geometry);
                    var surf2 = StillImageComponent.surfaceOfRectangularRegion(geom2.geometry);
                    // if reg1 is smaller than reg2, return 1
                    // reg1 then comes after reg2 and thus is rendered later
                    if (surf1 < surf2) {
                        return 1;
                    }
                    else {
                        return -1;
                    }
                }
                else {
                    return 0;
                }
            });
            try {
                // render all geometries for this page
                for (var geometries_1 = tslib_1.__values(geometries), geometries_1_1 = geometries_1.next(); !geometries_1_1.done; geometries_1_1 = geometries_1.next()) {
                    var geom = geometries_1_1.value;
                    var geometry = geom.geometry;
                    this_1.createSVGOverlay(geom.region.id, geometry, aspectRatio, imageXOffset, geom.region.label);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (geometries_1_1 && !geometries_1_1.done && (_a = geometries_1.return)) _a.call(geometries_1);
                }
                finally { if (e_6) throw e_6.error; }
            }
            imageXOffset++;
        };
        var this_1 = this;
        try {
            for (var _b = tslib_1.__values(this.images), _c = _b.next(); !_c.done; _c = _b.next()) {
                var image = _c.value;
                _loop_1(image);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    /**
     * Creates and adds a ROI-overlay to the viewer
     * @param regionIri the Iri of the region.
     * @param geometry - the geometry describing the ROI
     * @param aspectRatio -  the aspectRatio (h/w) of the image on which the geometry should be placed
     * @param xOffset -  the x-offset in Openseadragon viewport coordinates of the image on which the geometry should be placed
     * @param toolTip -  the tooltip which should be displayed on mousehover of the svg element
     */
    StillImageComponent.prototype.createSVGOverlay = function (regionIri, geometry, aspectRatio, xOffset, toolTip) {
        var _this = this;
        var lineColor = geometry.lineColor;
        var lineWidth = geometry.lineWidth;
        var svgElement;
        switch (geometry.type) {
            case 'rectangle':
                svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon'); // yes, we render rectangles as svg polygon elements
                this.addSVGAttributesRectangle(svgElement, geometry, aspectRatio, xOffset);
                break;
            case 'polygon':
                svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
                this.addSVGAttributesPolygon(svgElement, geometry, aspectRatio, xOffset);
                break;
            case 'circle':
                svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                this.addSVGAttributesCircle(svgElement, geometry, aspectRatio, xOffset);
                break;
            default:
                console.log('ERROR: StillImageOSDViewerComponent.createSVGOverlay: unknown geometryType: ' + geometry.type);
                return;
        }
        svgElement.id = 'roi-svgoverlay-' + Math.random() * 10000;
        svgElement.setAttribute('class', 'roi-svgoverlay');
        svgElement.setAttribute('style', 'stroke: ' + lineColor + '; stroke-width: ' + lineWidth + 'px;');
        // event when a region is clicked (output)
        svgElement.addEventListener('click', function () {
            _this.regionHovered.emit(regionIri);
        }, false);
        var svgTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        svgTitle.textContent = toolTip;
        var svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        svgGroup.appendChild(svgTitle);
        svgGroup.appendChild(svgElement);
        var overlay = this.viewer.svgOverlay();
        overlay.node().appendChild(svgGroup); // TODO: use method osdviewer's method addOverlay
        this.regions[regionIri].push(svgElement);
    };
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'rectangle' to a SVGElement
     * @param svgElement - an SVGElement (should have type 'polygon' (sic))
     * @param geometry - the geometry describing the rectangle
     * @param aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     */
    StillImageComponent.prototype.addSVGAttributesRectangle = function (svgElement, geometry, aspectRatio, xOffset) {
        var pointA = geometry.points[0];
        var pointB = geometry.points[1];
        // geometry.points contains two diagonally opposed corners of the rectangle, but the order of the corners is arbitrary.
        // We therefore construct the upperleft (UL), lowerright (LR), upperright (UR) and lowerleft (LL) positions of the corners with min and max operations.
        var positionUL = new Point2D(Math.min(pointA.x, pointB.x), Math.min(pointA.y, pointB.y));
        var positionLR = new Point2D(Math.max(pointA.x, pointB.x), Math.max(pointA.y, pointB.y));
        var positionUR = new Point2D(Math.max(pointA.x, pointB.x), Math.min(pointA.y, pointB.y));
        var positionLL = new Point2D(Math.min(pointA.x, pointB.x), Math.max(pointA.y, pointB.y));
        var points = [positionUL, positionUR, positionLR, positionLL];
        var viewCoordPoints = this.image2ViewPortCoords(points, aspectRatio, xOffset);
        var pointsString = this.createSVGPolygonPointsAttribute(viewCoordPoints);
        svgElement.setAttribute('points', pointsString);
    };
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'polygon' to a SVGElement
     * @param svgElement - an SVGElement (should have type 'polygon')
     * @param geometry - the geometry describing the polygon
     * @param aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     */
    StillImageComponent.prototype.addSVGAttributesPolygon = function (svgElement, geometry, aspectRatio, xOffset) {
        var viewCoordPoints = this.image2ViewPortCoords(geometry.points, aspectRatio, xOffset);
        var pointsString = this.createSVGPolygonPointsAttribute(viewCoordPoints);
        svgElement.setAttribute('points', pointsString);
    };
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'circle' to a SVGElement
     * @param svgElement - an SVGElement (should have type 'circle')
     * @param geometry - the geometry describing the circle
     * @param aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     */
    StillImageComponent.prototype.addSVGAttributesCircle = function (svgElement, geometry, aspectRatio, xOffset) {
        var viewCoordPoints = this.image2ViewPortCoords(geometry.points, aspectRatio, xOffset);
        var cx = String(viewCoordPoints[0].x);
        var cy = String(viewCoordPoints[0].y);
        // geometry.radius contains not the radius itself, but the coordinates of a (arbitrary) point on the circle.
        // We therefore have to calculate the length of the vector geometry.radius to get the actual radius. -> sqrt(x^2 + y^2)
        // Since geometry.radius has its y coordinate scaled to the height of the image,
        // we need to multiply it with the aspectRatio to get to the scale used by Openseadragon, analoguous to this.image2ViewPortCoords()
        var radius = String(Math.sqrt(geometry.radius.x * geometry.radius.x + aspectRatio * aspectRatio * geometry.radius.y * geometry.radius.y));
        svgElement.setAttribute('cx', cx);
        svgElement.setAttribute('cy', cy);
        svgElement.setAttribute('r', radius);
    };
    /**
     * Maps a Point2D[] with coordinates relative to an image to a new Point2D[] with coordinates in the viewport coordinate system of Openseadragon
     * see also: https://openseadragon.github.io/examples/viewport-coordinates/
     * @param points - an array of points in coordinate system relative to an image
     * @param aspectRatio - the aspectRatio (h/w) of the image
     * @param xOffset - the x-offset in viewport coordinates of the image
     * @returns - a new Point2D[] with coordinates in the viewport coordinate system of Openseadragon
     */
    StillImageComponent.prototype.image2ViewPortCoords = function (points, aspectRatio, xOffset) {
        return points.map(function (point) {
            return new Point2D(point.x + xOffset, point.y * aspectRatio);
        });
    };
    /**
     * Returns a string in the format expected by the 'points' attribute of a SVGElement
     * @param points - an array of points to be serialized to a string
     * @returns - the points serialized to a string in the format expected by the 'points' attribute of a SVGElement
     */
    StillImageComponent.prototype.createSVGPolygonPointsAttribute = function (points) {
        var pointsString = '';
        for (var i in points) {
            if (points.hasOwnProperty(i)) {
                pointsString += points[i].x;
                pointsString += ',';
                pointsString += points[i].y;
                pointsString += ' ';
            }
        }
        return pointsString;
    };
    StillImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-still-image',
                    template: "<div class=\"still-image-viewer\">\n    <div class=\"navigation left\">\n        <button mat-button class=\"full-size\" id=\"KUI_OSD_PREV_PAGE\">\n            <mat-icon>keyboard_arrow_left</mat-icon>\n        </button>\n    </div>\n\n    <!-- main content with navigation and osd viewer -->\n    <div class=\"content\">\n\n        <!-- openseadragon (osd) viewer -->\n        <div class=\"osd-container\"></div>\n        <!-- /openseadragon (osd) -->\n\n        <!-- footer with image caption e.g. copyright information -->\n        <div class=\"footer\">\n            <p class=\"mat-caption\" [innerHtml]=\"imageCaption\"></p>\n        </div>\n\n        <!-- action panel with tools for image -->\n        <mat-toolbar class=\"action\">\n            <mat-toolbar-row>\n                <!-- home button -->\n                <span>\n                <button mat-icon-button id=\"KUI_OSD_HOME\"><mat-icon>home</mat-icon></button>\n            </span>\n                <!-- zoom buttons -->\n                <span class=\"fill-remaining-space\"></span>\n                <span>\n                <button mat-icon-button id=\"KUI_OSD_ZOOM_IN\"><mat-icon>add</mat-icon></button>\n                <button mat-icon-button id=\"KUI_OSD_ZOOM_OUT\"><mat-icon>remove</mat-icon></button>\n            </span>\n                <!-- window button -->\n                <span class=\"fill-remaining-space\"></span>\n                <span>\n                <button mat-icon-button id=\"KUI_OSD_FULL_PAGE\"><mat-icon>fullscreen</mat-icon></button>\n            </span>\n            </mat-toolbar-row>\n        </mat-toolbar>\n\n    </div>\n\n    <div class=\"navigation right\">\n        <button mat-button class=\"full-size\" id=\"KUI_OSD_NEXT_PAGE\">\n            <mat-icon>keyboard_arrow_right</mat-icon>\n        </button>\n    </div>\n\n</div>\n\n<!-- simple image viewer e.g. as a preview -->\n<!-- TODO: handle images array -->\n<!--<img *ngIf=\"simple && images?.length === 1; else osdViewer\" [src]=\"simpleImageExample\">-->\n\n\n<!--\n    <div>\n        <span *ngIf=\"images.length > 1\" (click)=\"gotoLeft()\">&lt;&lt;</span>\n        <span *ngIf=\"images.length > 1\" (click)=\"gotoRight()\">&gt;&gt;</span>\n    </div>\n-->\n\n\n\n",
                    styles: [".still-image-viewer{display:inline-flex;height:400px;max-width:800px;width:100%}@media (max-height:636px){.still-image-viewer{height:300px}}.still-image-viewer .navigation{height:calc(400px + 64px + 24px);width:36px}.still-image-viewer .navigation .mat-button.full-size{height:100%!important;width:36px!important;padding:0!important;min-width:36px!important}.still-image-viewer .content{height:calc(400px + 64px + 24px);max-width:calc(800px - (2 * 36px));width:calc(100% - (2 * 36px))}.still-image-viewer .content .osd-container{color:#ccc;background-color:#000;height:400px}.still-image-viewer .content .osd-container.fullscreen{max-width:100vw}.still-image-viewer .content .footer p{color:#ccc;background-color:#000;height:24px;margin:0;padding:0 16px}/deep/ .roi-svgoverlay{opacity:.4;fill:transparent;stroke:#00695c;stroke-width:2px;vector-effect:non-scaling-stroke}.roi-svgoverlay:focus,/deep/ .roi-svgoverlay:hover{opacity:1}/deep/ .roi-svgoverlay.active{opacity:1}"]
                }] }
    ];
    /** @nocollapse */
    StillImageComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StillImageComponent.propDecorators = {
        images: [{ type: Input }],
        imageCaption: [{ type: Input }],
        activateRegion: [{ type: Input }],
        regionHovered: [{ type: Output }]
    };
    return StillImageComponent;
}());
export { StillImageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpbGwtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9yZXNvdXJjZS9zdGlsbC1pbWFnZS9zdGlsbC1pbWFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDSCxjQUFjLEVBQ2QsT0FBTyxFQUtWLE1BQU0sYUFBYSxDQUFDO0FBV3JCOzs7R0FHRztBQUNIO0lBRUk7OztPQUdHO0lBQ0gscUJBQXFCLGNBQTRCO1FBQTVCLG1CQUFjLEdBQWQsY0FBYyxDQUFjO0lBRWpELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUNBQWEsR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBb0IsQ0FBQztJQUN6RixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDOztBQUVEOztHQUVHO0FBQ0g7SUFFSTs7OztPQUlHO0lBQ0gsa0NBQXFCLG1CQUE0QyxFQUFXLE9BQXNCO1FBQTdFLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBeUI7UUFBVyxZQUFPLEdBQVAsT0FBTyxDQUFlO0lBRWxHLENBQUM7SUFFTCwrQkFBQztBQUFELENBQUMsQUFYRCxJQVdDOztBQUVEOztHQUVHO0FBQ0g7SUFFSTs7OztPQUlHO0lBQ0gsMkJBQXFCLFFBQXdCLEVBQVcsTUFBb0I7UUFBdkQsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFBVyxXQUFNLEdBQU4sTUFBTSxDQUFjO0lBQzVFLENBQUM7SUFFTCx3QkFBQztBQUFELENBQUMsQUFWRCxJQVVDOztBQVdEOzs7O0dBSUc7QUFDSDtJQStFSSw2QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FB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QUFZLElBQUksR0FBRyxDQUFDO2FBQ3ZCO1NBQ0o7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDOztnQkE5YkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDRyRUFBMkM7O2lCQUU5Qzs7OztnQkFwR0csVUFBVTs7O3lCQXVHVCxLQUFLOytCQUNMLEtBQUs7aUNBQ0wsS0FBSztnQ0FFTCxNQUFNOztJQW9iWCwwQkFBQztDQUFBLEFBL2JELElBK2JDO1NBMWJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIElucHV0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIE91dHB1dCxcbiAgICBTaW1wbGVDaGFuZ2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIEtub3JhQ29uc3RhbnRzLFxuICAgIFBvaW50MkQsXG4gICAgUmVhZEdlb21WYWx1ZSxcbiAgICBSZWFkUmVzb3VyY2UsXG4gICAgUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWUsXG4gICAgUmVnaW9uR2VvbWV0cnlcbn0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5cbi8vIFRoaXMgY29tcG9uZW50IG5lZWRzIHRoZSBvcGVuc2VhZHJhZ29uIGxpYnJhcnkgaXRzZWxmLCBhcyB3ZWxsIGFzIHRoZSBvcGVuc2VhZHJhZ29uIHBsdWdpbiBvcGVuc2VhZHJhZ29uLXN2Zy1vdmVybGF5XG4vLyBCb3RoIGxpYnJhcmllcyBhcmUgaW5zdGFsbGVkIHZpYSBwYWNrYWdlLmpzb24sIGFuZCBsb2FkZWQgZ2xvYmFsbHkgdmlhIHRoZSBzY3JpcHQgdGFnIGluIC5hbmd1bGFyLWNsaS5qc29uXG5cbi8vIE9wZW5TZWFkcmFnb24gZG9lcyBub3QgZXhwb3J0IGl0c2VsZiBhcyBFUzYvRUNNQTIwMTUgbW9kdWxlLFxuLy8gaXQgaXMgbG9hZGVkIGdsb2JhbGx5IGluIHNjcmlwdHMgdGFnIG9mIGFuZ3VsYXItY2xpLmpzb24sXG4vLyB3ZSBzdGlsbCBuZWVkIHRvIGRlY2xhcmUgdGhlIG5hbWVzcGFjZSB0byBtYWtlIFR5cGVTY3JpcHQgY29tcGlsZXIgaGFwcHkuXG5kZWNsYXJlIGxldCBPcGVuU2VhZHJhZ29uOiBhbnk7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHJlZ2lvbi5cbiAqIENvbnRhaW5zIGEgcmVmZXJlbmNlIHRvIHRoZSByZXNvdXJjZSByZXByZXNlbnRpbmcgdGhlIHJlZ2lvbiBhbmQgaXRzIGdlb21ldHJpZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbWFnZVJlZ2lvbiB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZWdpb25SZXNvdXJjZSBhIHJlc291cmNlIG9mIHR5cGUgUmVnaW9uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgcmVnaW9uUmVzb3VyY2U6IFJlYWRSZXNvdXJjZSkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBnZW9tZXRyeSBpbmZvcm1hdGlvbiBiZWxvbmdpbmcgdG8gdGhpcyByZWdpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGdldEdlb21ldHJpZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lvblJlc291cmNlLnByb3BlcnRpZXNbS25vcmFDb25zdGFudHMuaGFzR2VvbWV0cnldIGFzIFJlYWRHZW9tVmFsdWVbXTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBpbWFnZSBpbmNsdWRpbmcgaXRzIHJlZ2lvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGlsbEltYWdlUmVwcmVzZW50YXRpb24ge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RpbGxJbWFnZUZpbGVWYWx1ZSBhIFtbUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVdXSByZXByZXNlbnRpbmcgYW4gaW1hZ2UuXG4gICAgICogQHBhcmFtIHJlZ2lvbnMgdGhlIHJlZ2lvbnMgYmVsb25naW5nIHRvIHRoZSBpbWFnZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGlsbEltYWdlRmlsZVZhbHVlOiBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZSwgcmVhZG9ubHkgcmVnaW9uczogSW1hZ2VSZWdpb25bXSkge1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGdlb21ldHJ5IGJlbG9uZ2luZyB0byBhIHNwZWNpZmljIHJlZ2lvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEdlb21ldHJ5Rm9yUmVnaW9uIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGdlb21ldHJ5IHRoZSBnZW9tZXRyaWNhbCBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcGFyYW0gcmVnaW9uIHRoZSByZWdpb24gdGhlIGdlb21ldHJ5IGJlbG9uZ3MgdG8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgZ2VvbWV0cnk6IFJlZ2lvbkdlb21ldHJ5LCByZWFkb25seSByZWdpb246IFJlYWRSZXNvdXJjZSkge1xuICAgIH1cblxufVxuXG4vKipcbiAqIENvbGxlY3Rpb24gb2YgYFNWR1BvbHlnb25FbGVtZW50YCBmb3IgaW5kaXZpZHVhbCByZWdpb25zLlxuICovXG5pbnRlcmZhY2UgUG9seWdvbnNGb3JSZWdpb24ge1xuXG4gICAgW2tleTogc3RyaW5nXTogU1ZHUG9seWdvbkVsZW1lbnRbXTtcblxufVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGNyZWF0ZXMgYSBPcGVuU2VhZHJhZ29uIHZpZXdlciBpbnN0YW5jZS5cbiAqIEFjY2VwdHMgYW4gYXJyYXkgb2YgUmVhZFJlc291cmNlIGNvbnRhaW5pbmcgKGFtb25nIG90aGVyIHJlc291cmNlcykgUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVzIHRvIGJlIHJlbmRlcmVkLlxuICogQG1lbWJlciByZXNvdXJjZXMgLSByZXNvdXJjZXMgY29udGFpbmluZyAoYW1vbmcgb3RoZXIgcmVzb3VyY2VzKSB0aGUgU3RpbGxJbWFnZUZpbGVWYWx1ZXMgYW5kIGluY29taW5nIHJlZ2lvbnMgdG8gYmUgcmVuZGVyZWQuIChVc2UgYXMgYW5ndWxhciBASW5wdXQgZGF0YSBiaW5kaW5nIHByb3BlcnR5LilcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktc3RpbGwtaW1hZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zdGlsbC1pbWFnZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc3RpbGwtaW1hZ2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGlsbEltYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBpbWFnZXM6IFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbltdO1xuICAgIEBJbnB1dCgpIGltYWdlQ2FwdGlvbj86IHN0cmluZztcbiAgICBASW5wdXQoKSBhY3RpdmF0ZVJlZ2lvbjogc3RyaW5nOyAvLyBoaWdobGlnaHQgYSByZWdpb25cblxuICAgIEBPdXRwdXQoKSByZWdpb25Ib3ZlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICBwcml2YXRlIHZpZXdlcjtcbiAgICBwcml2YXRlIHJlZ2lvbnM6IFBvbHlnb25zRm9yUmVnaW9uID0ge307XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBzdXJmYWNlIG9mIGEgcmVjdGFuZ3VsYXIgcmVnaW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGdlb20gdGhlIHJlZ2lvbidzIGdlb21ldHJ5LlxuICAgICAqIEByZXR1cm5zIHRoZSBzdXJmYWNlLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHN1cmZhY2VPZlJlY3Rhbmd1bGFyUmVnaW9uKGdlb206IFJlZ2lvbkdlb21ldHJ5KTogbnVtYmVyIHtcblxuICAgICAgICBpZiAoZ2VvbS50eXBlICE9PSAncmVjdGFuZ2xlJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4cGVjdGVkIHJlY3Rhbmd1bGFyIHJlZ2lvbiwgYnV0ICcgKyBnZW9tLnR5cGUgKyAnIGdpdmVuJyk7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHcgPSBNYXRoLm1heChnZW9tLnBvaW50c1swXS54LCBnZW9tLnBvaW50c1sxXS54KSAtIE1hdGgubWluKGdlb20ucG9pbnRzWzBdLngsIGdlb20ucG9pbnRzWzFdLngpO1xuICAgICAgICBjb25zdCBoID0gTWF0aC5tYXgoZ2VvbS5wb2ludHNbMF0ueSwgZ2VvbS5wb2ludHNbMV0ueSkgLSBNYXRoLm1pbihnZW9tLnBvaW50c1swXS55LCBnZW9tLnBvaW50c1sxXS55KTtcblxuICAgICAgICByZXR1cm4gdyAqIGg7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHRpbGUgc291cmNlcyBmcm9tIHRoZSBnaXZlbiBzZXF1ZW5jZSBvZiBbW1JlYWRTdGlsbEltYWdlRmlsZVZhbHVlXV0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW1hZ2VzVG9EaXNwbGF5IHRoZSBnaXZlbiBmaWxlIHZhbHVlcyB0byBkZSBkaXNwbGF5ZWQuXG4gICAgICogQHJldHVybnMgdGhlIHRpbGUgc291cmNlcyB0byBiZSBwYXNzZWQgdG8gT1NEIHZpZXdlci5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBwcmVwYXJlVGlsZVNvdXJjZXNGcm9tRmlsZVZhbHVlcyhpbWFnZXNUb0Rpc3BsYXk6IFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlW10pOiBPYmplY3RbXSB7XG4gICAgICAgIGxldCBpbWFnZVhPZmZzZXQgPSAwO1xuICAgICAgICBjb25zdCBpbWFnZVlPZmZzZXQgPSAwO1xuICAgICAgICBjb25zdCB0aWxlU291cmNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgaW1hZ2Ugb2YgaW1hZ2VzVG9EaXNwbGF5KSB7XG4gICAgICAgICAgICBjb25zdCBzaXBpQmFzZVBhdGggPSBpbWFnZS5pbWFnZVNlcnZlcklJSUZCYXNlVVJMICsgJy8nICsgaW1hZ2UuaW1hZ2VGaWxlbmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gaW1hZ2UuZGltWDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGltYWdlLmRpbVk7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdCBPcGVuU2VhZHJhZ29uIHRpbGVTb3VyY2VzIGFjY29yZGluZyB0byBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2RvY3MvT3BlblNlYWRyYWdvbi5WaWV3ZXIuaHRtbCNvcGVuXG4gICAgICAgICAgICB0aWxlU291cmNlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAvLyBjb25zdHJ1Y3QgSUlJRiB0aWxlU291cmNlIGNvbmZpZ3VyYXRpb24gYWNjb3JkaW5nIHRvXG4gICAgICAgICAgICAgICAgLy8gaHR0cDovL2lpaWYuaW8vYXBpL2ltYWdlLzIuMS8jdGVjaG5pY2FsLXByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAvLyBzZWUgYWxzbyBodHRwOi8vaWlpZi5pby9hcGkvaW1hZ2UvMi4wLyNhLWltcGxlbWVudGF0aW9uLW5vdGVzXG4gICAgICAgICAgICAgICAgJ3RpbGVTb3VyY2UnOiB7XG4gICAgICAgICAgICAgICAgICAgICdAY29udGV4dCc6ICdodHRwOi8vaWlpZi5pby9hcGkvaW1hZ2UvMi9jb250ZXh0Lmpzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQGlkJzogc2lwaUJhc2VQYXRoLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgJ3Byb2ZpbGUnOiBbJ2h0dHA6Ly9paWlmLmlvL2FwaS9pbWFnZS8yL2xldmVsMi5qc29uJ10sXG4gICAgICAgICAgICAgICAgICAgICdwcm90b2NvbCc6ICdodHRwOi8vaWlpZi5pby9hcGkvaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAndGlsZXMnOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3NjYWxlRmFjdG9ycyc6IFsxLCAyLCA0LCA4LCAxNiwgMzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogMTAyNFxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3gnOiBpbWFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgJ3knOiBpbWFnZVlPZmZzZXRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpbWFnZVhPZmZzZXQrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aWxlU291cmNlcztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtrZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgICAgIGlmIChjaGFuZ2VzWydpbWFnZXMnXSAmJiBjaGFuZ2VzWydpbWFnZXMnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBWaWV3ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlc1snaW1hZ2VzJ10pIHtcbiAgICAgICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG5cbiAgICAgICAgICAgIHRoaXMudW5oaWdobGlnaHRBbGxSZWdpb25zKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmF0ZVJlZ2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRSZWdpb24odGhpcy5hY3RpdmF0ZVJlZ2lvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlc1snYWN0aXZhdGVSZWdpb24nXSkge1xuICAgICAgICAgICAgdGhpcy51bmhpZ2hsaWdodEFsbFJlZ2lvbnMoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2YXRlUmVnaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodFJlZ2lvbih0aGlzLmFjdGl2YXRlUmVnaW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyBpbml0aWFsaXNhdGlvbiBpcyBkb25lIG9uIGZpcnN0IHJ1biBvZiBuZ09uQ2hhbmdlc1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy52aWV3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudmlld2VyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMudmlld2VyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhbGwgUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVzIHRvIGJlIGZvdW5kIGluIFtbdGhpcy5pbWFnZXNdXS5cbiAgICAgKiAoQWx0aG91Z2ggdGhpcy5pbWFnZXMgaXMgYSBBbmd1bGFyIElucHV0IHByb3BlcnR5LCB0aGUgYnVpbHQtaW4gY2hhbmdlIGRldGVjdGlvbiBvZiBBbmd1bGFyIGRvZXMgbm90IGRldGVjdCBjaGFuZ2VzIGluIGNvbXBsZXggb2JqZWN0cyBvciBhcnJheXMsIG9ubHkgcmVhc3NpZ25tZW50IG9mIG9iamVjdHMvYXJyYXlzLlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpZiBhZGRpdGlvbmFsIFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlcyB3ZXJlIGFkZGVkIHRvIHRoaXMuaW1hZ2VzIGFmdGVyIGNyZWF0aW9uL2Fzc2lnbm1lbnQgb2YgdGhlIHRoaXMuaW1hZ2VzIGFycmF5LilcbiAgICAgKi9cbiAgICB1cGRhdGVJbWFnZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy52aWV3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBWaWV3ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGFsbCByZWdpb25zIHRvIGJlIGZvdW5kIGluIFtbdGhpcy5pbWFnZXNdXS5cbiAgICAgKiAoQWx0aG91Z2ggdGhpcy5pbWFnZXMgaXMgYSBBbmd1bGFyIElucHV0IHByb3BlcnR5LCB0aGUgYnVpbHQtaW4gY2hhbmdlIGRldGVjdGlvbiBvZiBBbmd1bGFyIGRvZXMgbm90IGRldGVjdCBjaGFuZ2VzIGluIGNvbXBsZXggb2JqZWN0cyBvciBhcnJheXMsIG9ubHkgcmVhc3NpZ25tZW50IG9mIG9iamVjdHMvYXJyYXlzLlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpZiBhZGRpdGlvbmFsIHJlZ2lvbnMgd2VyZSBhZGRlZCB0byB0aGUgcmVzb3VyY2VzLmltYWdlcylcbiAgICAgKi9cbiAgICB1cGRhdGVSZWdpb25zKCkge1xuICAgICAgICBpZiAoIXRoaXMudmlld2VyKSB7XG4gICAgICAgICAgICB0aGlzLnNldHVwVmlld2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlnaGxpZ2h0cyB0aGUgcG9seWdvbiBlbGVtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIHJlZ2lvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZWdpb25JcmkgdGhlIElyaSBvZiB0aGUgcmVnaW9uIHdob3NlIHBvbHlnb24gZWxlbWVudHMgc2hvdWxkIGJlIGhpZ2hsaWdodGVkLi5cbiAgICAgKi9cbiAgICBwcml2YXRlIGhpZ2hsaWdodFJlZ2lvbihyZWdpb25JcmkpIHtcblxuICAgICAgICBjb25zdCBhY3RpdmVSZWdpb246IFNWR1BvbHlnb25FbGVtZW50W10gPSB0aGlzLnJlZ2lvbnNbcmVnaW9uSXJpXTtcblxuICAgICAgICBpZiAoYWN0aXZlUmVnaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcG9sIG9mIGFjdGl2ZVJlZ2lvbikge1xuICAgICAgICAgICAgICAgIHBvbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JvaS1zdmdvdmVybGF5IGFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5oaWdobGlnaHRzIHRoZSBwb2x5Z29uIGVsZW1lbnRzIG9mIGFsbCByZWdpb25zLlxuICAgICAqXG4gICAgICovXG4gICAgcHJpdmF0ZSB1bmhpZ2hsaWdodEFsbFJlZ2lvbnMoKSB7XG5cbiAgICAgICAgZm9yIChjb25zdCByZWcgaW4gdGhpcy5yZWdpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWdpb25zLmhhc093blByb3BlcnR5KHJlZykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBvbCBvZiB0aGlzLnJlZ2lvbnNbcmVnXSkge1xuICAgICAgICAgICAgICAgICAgICBwb2wuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyb2ktc3Znb3ZlcmxheScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBPcGVuU2VhZHJhZ29uIHZpZXdlclxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0dXBWaWV3ZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZpZXdlckNvbnRhaW5lciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29zZC1jb250YWluZXInKVswXTtcbiAgICAgICAgY29uc3Qgb3NkT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IHZpZXdlckNvbnRhaW5lcixcbiAgICAgICAgICAgIHNlcXVlbmNlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dSZWZlcmVuY2VTdHJpcDogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dOYXZpZ2F0b3I6IHRydWUsXG4gICAgICAgICAgICB6b29tSW5CdXR0b246ICdLVUlfT1NEX1pPT01fSU4nLFxuICAgICAgICAgICAgem9vbU91dEJ1dHRvbjogJ0tVSV9PU0RfWk9PTV9PVVQnLFxuICAgICAgICAgICAgcHJldmlvdXNCdXR0b246ICdLVUlfT1NEX1BSRVZfUEFHRScsXG4gICAgICAgICAgICBuZXh0QnV0dG9uOiAnS1VJX09TRF9ORVhUX1BBR0UnLFxuICAgICAgICAgICAgaG9tZUJ1dHRvbjogJ0tVSV9PU0RfSE9NRScsXG4gICAgICAgICAgICBmdWxsUGFnZUJ1dHRvbjogJ0tVSV9PU0RfRlVMTF9QQUdFJyxcbiAgICAgICAgICAgIHJvdGF0ZUxlZnRCdXR0b246ICdLVUlfT1NEX1JPVEFURV9MRUZUJywgICAgICAgIC8vIGRvZXNuJ3Qgd29yayB5ZXRcbiAgICAgICAgICAgIHJvdGF0ZVJpZ2h0QnV0dG9uOiAnS1VJX09TRF9ST1RBVEVfUklHSFQnICAgICAgIC8vIGRvZXNuJ3Qgd29yayB5ZXRcblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnZpZXdlciA9IG5ldyBPcGVuU2VhZHJhZ29uLlZpZXdlcihvc2RPcHRpb25zKTtcbiAgICAgICAgdGhpcy52aWV3ZXIuYWRkSGFuZGxlcignZnVsbC1zY3JlZW4nLCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgaWYgKGFyZ3MuZnVsbFNjcmVlbikge1xuICAgICAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmdWxsc2NyZWVuJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsc2NyZWVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpZXdlci5hZGRIYW5kbGVyKCdyZXNpemUnLCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgYXJncy5ldmVudFNvdXJjZS5zdmdPdmVybGF5KCkucmVzaXplKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbGwgaW1hZ2VzIGluIHRoaXMuaW1hZ2VzIHRvIHRoZSB2aWV3ZXIuXG4gICAgICogSW1hZ2VzIGFyZSBwb3NpdGlvbmVkIGluIGEgaG9yaXpvbnRhbCByb3cgbmV4dCB0byBlYWNoIG90aGVyLlxuICAgICAqL1xuICAgIHByaXZhdGUgb3BlbkltYWdlcygpOiB2b2lkIHtcbiAgICAgICAgLy8gaW1hZ2VYT2Zmc2V0IGNvbnRyb2xzIHRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIGxlZnQgc2lkZSBvZiBlYWNoIGltYWdlIGluIHRoZSBPcGVuU2VhZHJhZ29uIHZpZXdwb3J0IGNvb3JkaW5hdGUgc3lzdGVtLlxuICAgICAgICAvLyBUaGUgZmlyc3QgaW1hZ2UgaGFzIGl0cyBsZWZ0IHNpZGUgYXQgeCA9IDAsIGFuZCBhbGwgaW1hZ2VzIGFyZSBzY2FsZWQgdG8gaGF2ZSBhIHdpZHRoIG9mIDEgaW4gdmlld3BvcnQgY29vcmRpbmF0ZXMuXG4gICAgICAgIC8vIHNlZSBhbHNvOiBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2V4YW1wbGVzL3ZpZXdwb3J0LWNvb3JkaW5hdGVzL1xuXG4gICAgICAgIGNvbnN0IGZpbGVWYWx1ZXM6IFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlW10gPSB0aGlzLmltYWdlcy5tYXAoXG4gICAgICAgICAgICAoaW1nKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGltZy5zdGlsbEltYWdlRmlsZVZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZGlzcGxheSBvbmx5IHRoZSBkZWZpbmVkIHJhbmdlIG9mIHRoaXMuaW1hZ2VzXG4gICAgICAgIGNvbnN0IHRpbGVTb3VyY2VzOiBPYmplY3RbXSA9IFN0aWxsSW1hZ2VDb21wb25lbnQucHJlcGFyZVRpbGVTb3VyY2VzRnJvbUZpbGVWYWx1ZXMoZmlsZVZhbHVlcyk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVPdmVybGF5cygpO1xuICAgICAgICB0aGlzLnZpZXdlci5vcGVuKHRpbGVTb3VyY2VzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIFNWRyBvdmVybGF5cyBmcm9tIHRoZSBET00uXG4gICAgICovXG4gICAgcHJpdmF0ZSByZW1vdmVPdmVybGF5cygpIHtcblxuICAgICAgICBmb3IgKGNvbnN0IHJlZyBpbiB0aGlzLnJlZ2lvbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZ2lvbnMuaGFzT3duUHJvcGVydHkocmVnKSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcG9sIG9mIHRoaXMucmVnaW9uc1tyZWddKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2wgaW5zdGFuY2VvZiBTVkdQb2x5Z29uRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9sLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWdpb25zID0ge307XG5cbiAgICAgICAgLy8gVE9ETzogbWFrZSB0aGlzIHdvcmsgYnkgdXNpbmcgb3Nkdmlld2VyJ3MgYWRkT3ZlcmxheSBtZXRob2RcbiAgICAgICAgdGhpcy52aWV3ZXIuY2xlYXJPdmVybGF5cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBST0ktb3ZlcmxheSB0byB0aGUgdmlld2VyIGZvciBldmVyeSByZWdpb24gb2YgZXZlcnkgaW1hZ2UgaW4gdGhpcy5pbWFnZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbmRlclJlZ2lvbnMoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVPdmVybGF5cygpO1xuXG4gICAgICAgIGxldCBpbWFnZVhPZmZzZXQgPSAwOyAvLyBzZWUgZG9jdW1lbnRhdGlvbiBpbiB0aGlzLm9wZW5JbWFnZXMoKSBmb3IgdGhlIHVzYWdlIG9mIGltYWdlWE9mZnNldFxuXG4gICAgICAgIGZvciAoY29uc3QgaW1hZ2Ugb2YgdGhpcy5pbWFnZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gKGltYWdlLnN0aWxsSW1hZ2VGaWxlVmFsdWUuZGltWSAvIGltYWdlLnN0aWxsSW1hZ2VGaWxlVmFsdWUuZGltWCk7XG5cbiAgICAgICAgICAgIC8vIGNvbGxlY3QgYWxsIGdlb21ldHJpZXMgYmVsb25naW5nIHRvIHRoaXMgcGFnZVxuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cmllczogR2VvbWV0cnlGb3JSZWdpb25bXSA9IFtdO1xuICAgICAgICAgICAgaW1hZ2UucmVnaW9ucy5tYXAoKHJlZykgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpb25zW3JlZy5yZWdpb25SZXNvdXJjZS5pZF0gPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBnZW9tcyA9IHJlZy5nZXRHZW9tZXRyaWVzKCk7XG5cbiAgICAgICAgICAgICAgICBnZW9tcy5tYXAoKGdlb20pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2VvbUZvclJlZyA9IG5ldyBHZW9tZXRyeUZvclJlZ2lvbihnZW9tLmdlb21ldHJ5LCByZWcucmVnaW9uUmVzb3VyY2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJpZXMucHVzaChnZW9tRm9yUmVnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBzb3J0IGFsbCBnZW9tZXRyaWVzIGJlbG9uZ2luZyB0byB0aGlzIHBhZ2VcbiAgICAgICAgICAgIGdlb21ldHJpZXMuc29ydCgoZ2VvbTEsIGdlb20yKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2VvbTEuZ2VvbWV0cnkudHlwZSA9PT0gJ3JlY3RhbmdsZScgJiYgZ2VvbTIuZ2VvbWV0cnkudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdXJmMSA9IFN0aWxsSW1hZ2VDb21wb25lbnQuc3VyZmFjZU9mUmVjdGFuZ3VsYXJSZWdpb24oZ2VvbTEuZ2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdXJmMiA9IFN0aWxsSW1hZ2VDb21wb25lbnQuc3VyZmFjZU9mUmVjdGFuZ3VsYXJSZWdpb24oZ2VvbTIuZ2VvbWV0cnkpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHJlZzEgaXMgc21hbGxlciB0aGFuIHJlZzIsIHJldHVybiAxXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZzEgdGhlbiBjb21lcyBhZnRlciByZWcyIGFuZCB0aHVzIGlzIHJlbmRlcmVkIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdXJmMSA8IHN1cmYyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyByZW5kZXIgYWxsIGdlb21ldHJpZXMgZm9yIHRoaXMgcGFnZVxuICAgICAgICAgICAgZm9yIChjb25zdCBnZW9tIG9mIGdlb21ldHJpZXMpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gZ2VvbS5nZW9tZXRyeTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVNWR092ZXJsYXkoZ2VvbS5yZWdpb24uaWQsIGdlb21ldHJ5LCBhc3BlY3RSYXRpbywgaW1hZ2VYT2Zmc2V0LCBnZW9tLnJlZ2lvbi5sYWJlbCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1hZ2VYT2Zmc2V0Kys7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIGFkZHMgYSBST0ktb3ZlcmxheSB0byB0aGUgdmlld2VyXG4gICAgICogQHBhcmFtIHJlZ2lvbklyaSB0aGUgSXJpIG9mIHRoZSByZWdpb24uXG4gICAgICogQHBhcmFtIGdlb21ldHJ5IC0gdGhlIGdlb21ldHJ5IGRlc2NyaWJpbmcgdGhlIFJPSVxuICAgICAqIEBwYXJhbSBhc3BlY3RSYXRpbyAtICB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBnZW9tZXRyeSBzaG91bGQgYmUgcGxhY2VkXG4gICAgICogQHBhcmFtIHhPZmZzZXQgLSAgdGhlIHgtb2Zmc2V0IGluIE9wZW5zZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBnZW9tZXRyeSBzaG91bGQgYmUgcGxhY2VkXG4gICAgICogQHBhcmFtIHRvb2xUaXAgLSAgdGhlIHRvb2x0aXAgd2hpY2ggc2hvdWxkIGJlIGRpc3BsYXllZCBvbiBtb3VzZWhvdmVyIG9mIHRoZSBzdmcgZWxlbWVudFxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlU1ZHT3ZlcmxheShyZWdpb25Jcmk6IHN0cmluZywgZ2VvbWV0cnk6IFJlZ2lvbkdlb21ldHJ5LCBhc3BlY3RSYXRpbzogbnVtYmVyLCB4T2Zmc2V0OiBudW1iZXIsIHRvb2xUaXA6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBsaW5lQ29sb3IgPSBnZW9tZXRyeS5saW5lQ29sb3I7XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IGdlb21ldHJ5LmxpbmVXaWR0aDtcblxuICAgICAgICBsZXQgc3ZnRWxlbWVudDtcbiAgICAgICAgc3dpdGNoIChnZW9tZXRyeS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxuICAgICAgICAgICAgICAgIHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BvbHlnb24nKTsgIC8vIHllcywgd2UgcmVuZGVyIHJlY3RhbmdsZXMgYXMgc3ZnIHBvbHlnb24gZWxlbWVudHNcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNWR0F0dHJpYnV0ZXNSZWN0YW5nbGUoc3ZnRWxlbWVudCwgZ2VvbWV0cnksIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3BvbHlnb24nOlxuICAgICAgICAgICAgICAgIHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BvbHlnb24nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNWR0F0dHJpYnV0ZXNQb2x5Z29uKHN2Z0VsZW1lbnQsIGdlb21ldHJ5LCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgICAgICAgICAgIHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2NpcmNsZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU1ZHQXR0cmlidXRlc0NpcmNsZShzdmdFbGVtZW50LCBnZW9tZXRyeSwgYXNwZWN0UmF0aW8sIHhPZmZzZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6IFN0aWxsSW1hZ2VPU0RWaWV3ZXJDb21wb25lbnQuY3JlYXRlU1ZHT3ZlcmxheTogdW5rbm93biBnZW9tZXRyeVR5cGU6ICcgKyBnZW9tZXRyeS50eXBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3ZnRWxlbWVudC5pZCA9ICdyb2ktc3Znb3ZlcmxheS0nICsgTWF0aC5yYW5kb20oKSAqIDEwMDAwO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncm9pLXN2Z292ZXJsYXknKTtcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3N0cm9rZTogJyArIGxpbmVDb2xvciArICc7IHN0cm9rZS13aWR0aDogJyArIGxpbmVXaWR0aCArICdweDsnKTtcblxuICAgICAgICAvLyBldmVudCB3aGVuIGEgcmVnaW9uIGlzIGNsaWNrZWQgKG91dHB1dClcbiAgICAgICAgc3ZnRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVnaW9uSG92ZXJlZC5lbWl0KHJlZ2lvbklyaSk7XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICBjb25zdCBzdmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndGl0bGUnKTtcbiAgICAgICAgc3ZnVGl0bGUudGV4dENvbnRlbnQgPSB0b29sVGlwO1xuXG4gICAgICAgIGNvbnN0IHN2Z0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XG4gICAgICAgIHN2Z0dyb3VwLmFwcGVuZENoaWxkKHN2Z1RpdGxlKTtcbiAgICAgICAgc3ZnR3JvdXAuYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudCk7XG5cbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IHRoaXMudmlld2VyLnN2Z092ZXJsYXkoKTtcbiAgICAgICAgb3ZlcmxheS5ub2RlKCkuYXBwZW5kQ2hpbGQoc3ZnR3JvdXApOyAvLyBUT0RPOiB1c2UgbWV0aG9kIG9zZHZpZXdlcidzIG1ldGhvZCBhZGRPdmVybGF5XG5cbiAgICAgICAgdGhpcy5yZWdpb25zW3JlZ2lvbklyaV0ucHVzaChzdmdFbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBuZWNlc3NhcnkgYXR0cmlidXRlcyB0byBjcmVhdGUgYSBST0ktb3ZlcmxheSBvZiB0eXBlICdyZWN0YW5nbGUnIHRvIGEgU1ZHRWxlbWVudFxuICAgICAqIEBwYXJhbSBzdmdFbGVtZW50IC0gYW4gU1ZHRWxlbWVudCAoc2hvdWxkIGhhdmUgdHlwZSAncG9seWdvbicgKHNpYykpXG4gICAgICogQHBhcmFtIGdlb21ldHJ5IC0gdGhlIGdlb21ldHJ5IGRlc2NyaWJpbmcgdGhlIHJlY3RhbmdsZVxuICAgICAqIEBwYXJhbSBhc3BlY3RSYXRpbyAtIHRoZSBhc3BlY3RSYXRpbyAoaC93KSBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGNpcmNsZSBzaG91bGQgYmUgcGxhY2VkXG4gICAgICogQHBhcmFtIHhPZmZzZXQgLSB0aGUgeC1vZmZzZXQgaW4gT3BlbnNlYWRyYWdvbiB2aWV3cG9ydCBjb29yZGluYXRlcyBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGNpcmNsZSBzaG91bGQgYmUgcGxhY2VkXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRTVkdBdHRyaWJ1dGVzUmVjdGFuZ2xlKHN2Z0VsZW1lbnQ6IFNWR0VsZW1lbnQsIGdlb21ldHJ5OiBSZWdpb25HZW9tZXRyeSwgYXNwZWN0UmF0aW86IG51bWJlciwgeE9mZnNldDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBvaW50QSA9IGdlb21ldHJ5LnBvaW50c1swXTtcbiAgICAgICAgY29uc3QgcG9pbnRCID0gZ2VvbWV0cnkucG9pbnRzWzFdO1xuXG4gICAgICAgIC8vIGdlb21ldHJ5LnBvaW50cyBjb250YWlucyB0d28gZGlhZ29uYWxseSBvcHBvc2VkIGNvcm5lcnMgb2YgdGhlIHJlY3RhbmdsZSwgYnV0IHRoZSBvcmRlciBvZiB0aGUgY29ybmVycyBpcyBhcmJpdHJhcnkuXG4gICAgICAgIC8vIFdlIHRoZXJlZm9yZSBjb25zdHJ1Y3QgdGhlIHVwcGVybGVmdCAoVUwpLCBsb3dlcnJpZ2h0IChMUiksIHVwcGVycmlnaHQgKFVSKSBhbmQgbG93ZXJsZWZ0IChMTCkgcG9zaXRpb25zIG9mIHRoZSBjb3JuZXJzIHdpdGggbWluIGFuZCBtYXggb3BlcmF0aW9ucy5cbiAgICAgICAgY29uc3QgcG9zaXRpb25VTCA9IG5ldyBQb2ludDJEKE1hdGgubWluKHBvaW50QS54LCBwb2ludEIueCksIE1hdGgubWluKHBvaW50QS55LCBwb2ludEIueSkpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbkxSID0gbmV3IFBvaW50MkQoTWF0aC5tYXgocG9pbnRBLngsIHBvaW50Qi54KSwgTWF0aC5tYXgocG9pbnRBLnksIHBvaW50Qi55KSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uVVIgPSBuZXcgUG9pbnQyRChNYXRoLm1heChwb2ludEEueCwgcG9pbnRCLngpLCBNYXRoLm1pbihwb2ludEEueSwgcG9pbnRCLnkpKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25MTCA9IG5ldyBQb2ludDJEKE1hdGgubWluKHBvaW50QS54LCBwb2ludEIueCksIE1hdGgubWF4KHBvaW50QS55LCBwb2ludEIueSkpO1xuXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IFtwb3NpdGlvblVMLCBwb3NpdGlvblVSLCBwb3NpdGlvbkxSLCBwb3NpdGlvbkxMXTtcbiAgICAgICAgY29uc3Qgdmlld0Nvb3JkUG9pbnRzID0gdGhpcy5pbWFnZTJWaWV3UG9ydENvb3Jkcyhwb2ludHMsIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgY29uc3QgcG9pbnRzU3RyaW5nID0gdGhpcy5jcmVhdGVTVkdQb2x5Z29uUG9pbnRzQXR0cmlidXRlKHZpZXdDb29yZFBvaW50cyk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdwb2ludHMnLCBwb2ludHNTdHJpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIG5lY2Vzc2FyeSBhdHRyaWJ1dGVzIHRvIGNyZWF0ZSBhIFJPSS1vdmVybGF5IG9mIHR5cGUgJ3BvbHlnb24nIHRvIGEgU1ZHRWxlbWVudFxuICAgICAqIEBwYXJhbSBzdmdFbGVtZW50IC0gYW4gU1ZHRWxlbWVudCAoc2hvdWxkIGhhdmUgdHlwZSAncG9seWdvbicpXG4gICAgICogQHBhcmFtIGdlb21ldHJ5IC0gdGhlIGdlb21ldHJ5IGRlc2NyaWJpbmcgdGhlIHBvbHlnb25cbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqIEBwYXJhbSB4T2Zmc2V0IC0gdGhlIHgtb2Zmc2V0IGluIE9wZW5zZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkU1ZHQXR0cmlidXRlc1BvbHlnb24oc3ZnRWxlbWVudDogU1ZHRWxlbWVudCwgZ2VvbWV0cnk6IFJlZ2lvbkdlb21ldHJ5LCBhc3BlY3RSYXRpbzogbnVtYmVyLCB4T2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgdmlld0Nvb3JkUG9pbnRzID0gdGhpcy5pbWFnZTJWaWV3UG9ydENvb3JkcyhnZW9tZXRyeS5wb2ludHMsIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgY29uc3QgcG9pbnRzU3RyaW5nID0gdGhpcy5jcmVhdGVTVkdQb2x5Z29uUG9pbnRzQXR0cmlidXRlKHZpZXdDb29yZFBvaW50cyk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdwb2ludHMnLCBwb2ludHNTdHJpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIG5lY2Vzc2FyeSBhdHRyaWJ1dGVzIHRvIGNyZWF0ZSBhIFJPSS1vdmVybGF5IG9mIHR5cGUgJ2NpcmNsZScgdG8gYSBTVkdFbGVtZW50XG4gICAgICogQHBhcmFtIHN2Z0VsZW1lbnQgLSBhbiBTVkdFbGVtZW50IChzaG91bGQgaGF2ZSB0eXBlICdjaXJjbGUnKVxuICAgICAqIEBwYXJhbSBnZW9tZXRyeSAtIHRoZSBnZW9tZXRyeSBkZXNjcmliaW5nIHRoZSBjaXJjbGVcbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqIEBwYXJhbSB4T2Zmc2V0IC0gdGhlIHgtb2Zmc2V0IGluIE9wZW5zZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkU1ZHQXR0cmlidXRlc0NpcmNsZShzdmdFbGVtZW50OiBTVkdFbGVtZW50LCBnZW9tZXRyeTogUmVnaW9uR2VvbWV0cnksIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCB2aWV3Q29vcmRQb2ludHMgPSB0aGlzLmltYWdlMlZpZXdQb3J0Q29vcmRzKGdlb21ldHJ5LnBvaW50cywgYXNwZWN0UmF0aW8sIHhPZmZzZXQpO1xuICAgICAgICBjb25zdCBjeCA9IFN0cmluZyh2aWV3Q29vcmRQb2ludHNbMF0ueCk7XG4gICAgICAgIGNvbnN0IGN5ID0gU3RyaW5nKHZpZXdDb29yZFBvaW50c1swXS55KTtcbiAgICAgICAgLy8gZ2VvbWV0cnkucmFkaXVzIGNvbnRhaW5zIG5vdCB0aGUgcmFkaXVzIGl0c2VsZiwgYnV0IHRoZSBjb29yZGluYXRlcyBvZiBhIChhcmJpdHJhcnkpIHBvaW50IG9uIHRoZSBjaXJjbGUuXG4gICAgICAgIC8vIFdlIHRoZXJlZm9yZSBoYXZlIHRvIGNhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoZSB2ZWN0b3IgZ2VvbWV0cnkucmFkaXVzIHRvIGdldCB0aGUgYWN0dWFsIHJhZGl1cy4gLT4gc3FydCh4XjIgKyB5XjIpXG4gICAgICAgIC8vIFNpbmNlIGdlb21ldHJ5LnJhZGl1cyBoYXMgaXRzIHkgY29vcmRpbmF0ZSBzY2FsZWQgdG8gdGhlIGhlaWdodCBvZiB0aGUgaW1hZ2UsXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gbXVsdGlwbHkgaXQgd2l0aCB0aGUgYXNwZWN0UmF0aW8gdG8gZ2V0IHRvIHRoZSBzY2FsZSB1c2VkIGJ5IE9wZW5zZWFkcmFnb24sIGFuYWxvZ3VvdXMgdG8gdGhpcy5pbWFnZTJWaWV3UG9ydENvb3JkcygpXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IFN0cmluZyhNYXRoLnNxcnQoZ2VvbWV0cnkucmFkaXVzLnggKiBnZW9tZXRyeS5yYWRpdXMueCArIGFzcGVjdFJhdGlvICogYXNwZWN0UmF0aW8gKiBnZW9tZXRyeS5yYWRpdXMueSAqIGdlb21ldHJ5LnJhZGl1cy55KSk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjeCcsIGN4KTtcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N5JywgY3kpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgncicsIHJhZGl1cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwcyBhIFBvaW50MkRbXSB3aXRoIGNvb3JkaW5hdGVzIHJlbGF0aXZlIHRvIGFuIGltYWdlIHRvIGEgbmV3IFBvaW50MkRbXSB3aXRoIGNvb3JkaW5hdGVzIGluIHRoZSB2aWV3cG9ydCBjb29yZGluYXRlIHN5c3RlbSBvZiBPcGVuc2VhZHJhZ29uXG4gICAgICogc2VlIGFsc286IGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZXhhbXBsZXMvdmlld3BvcnQtY29vcmRpbmF0ZXMvXG4gICAgICogQHBhcmFtIHBvaW50cyAtIGFuIGFycmF5IG9mIHBvaW50cyBpbiBjb29yZGluYXRlIHN5c3RlbSByZWxhdGl2ZSB0byBhbiBpbWFnZVxuICAgICAqIEBwYXJhbSBhc3BlY3RSYXRpbyAtIHRoZSBhc3BlY3RSYXRpbyAoaC93KSBvZiB0aGUgaW1hZ2VcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtIHRoZSB4LW9mZnNldCBpbiB2aWV3cG9ydCBjb29yZGluYXRlcyBvZiB0aGUgaW1hZ2VcbiAgICAgKiBAcmV0dXJucyAtIGEgbmV3IFBvaW50MkRbXSB3aXRoIGNvb3JkaW5hdGVzIGluIHRoZSB2aWV3cG9ydCBjb29yZGluYXRlIHN5c3RlbSBvZiBPcGVuc2VhZHJhZ29uXG4gICAgICovXG4gICAgcHJpdmF0ZSBpbWFnZTJWaWV3UG9ydENvb3Jkcyhwb2ludHM6IFBvaW50MkRbXSwgYXNwZWN0UmF0aW86IG51bWJlciwgeE9mZnNldDogbnVtYmVyKTogUG9pbnQyRFtdIHtcbiAgICAgICAgcmV0dXJuIHBvaW50cy5tYXAoKHBvaW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50MkQocG9pbnQueCArIHhPZmZzZXQsIHBvaW50LnkgKiBhc3BlY3RSYXRpbyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgaW4gdGhlIGZvcm1hdCBleHBlY3RlZCBieSB0aGUgJ3BvaW50cycgYXR0cmlidXRlIG9mIGEgU1ZHRWxlbWVudFxuICAgICAqIEBwYXJhbSBwb2ludHMgLSBhbiBhcnJheSBvZiBwb2ludHMgdG8gYmUgc2VyaWFsaXplZCB0byBhIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIC0gdGhlIHBvaW50cyBzZXJpYWxpemVkIHRvIGEgc3RyaW5nIGluIHRoZSBmb3JtYXQgZXhwZWN0ZWQgYnkgdGhlICdwb2ludHMnIGF0dHJpYnV0ZSBvZiBhIFNWR0VsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZVNWR1BvbHlnb25Qb2ludHNBdHRyaWJ1dGUocG9pbnRzOiBQb2ludDJEW10pOiBzdHJpbmcge1xuICAgICAgICBsZXQgcG9pbnRzU3RyaW5nID0gJyc7XG4gICAgICAgIGZvciAoY29uc3QgaSBpbiBwb2ludHMpIHtcbiAgICAgICAgICAgIGlmIChwb2ludHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBwb2ludHNTdHJpbmcgKz0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICAgICAgcG9pbnRzU3RyaW5nICs9ICcsJztcbiAgICAgICAgICAgICAgICBwb2ludHNTdHJpbmcgKz0gcG9pbnRzW2ldLnk7XG4gICAgICAgICAgICAgICAgcG9pbnRzU3RyaW5nICs9ICcgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9pbnRzU3RyaW5nO1xuICAgIH1cbn1cbiJdfQ==