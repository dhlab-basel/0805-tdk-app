import { ElementRef, OnChanges, Renderer2 } from '@angular/core';
/**
 * You can use the admin image module for user avatar together with gravatar.com and for project logos.
 *
 * The feature of this module ist the error handling: In case of a 404 error of the image source (img src) the module shows a default image-not-found image. Or a default user profile icon (type=user), or a default project icon (type=project).
 *
 */
export declare class AdminImageDirective implements OnChanges {
    private _renderer;
    private _ele;
    /**
     * @param {string} image
     *
     * source of the image;
     * - in case of user (gr)avatar it's the e-mail address,
     * - in case of project logo it's the image url
     */
    image: string;
    /**
     * @param {string} type
     *
     * type of image; you can use it with
     * - project
     * - user
     */
    type: string;
    /**
     * @ignore
     */
    source: string;
    /**
     * @ignore
     */
    onError: string;
    /**
     * @ignore
     */
    constructor(_renderer: Renderer2, _ele: ElementRef);
    /**
     * @ignore
     */
    ngOnChanges(): void;
}
