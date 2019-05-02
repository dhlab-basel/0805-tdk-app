import { Pipe } from '@angular/core';
var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    /**
     * TODO: add description
     */
    ReversePipe.prototype.transform = function (value) {
        if (value) {
            return value.slice().reverse();
        }
    };
    ReversePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'kuiReverse'
                },] }
    ];
    return ReversePipe;
}());
export { ReversePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2ZXJzZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2FjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9yZXZlcnNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQ7SUFBQTtJQWVBLENBQUM7SUFWRzs7T0FFRztJQUVILCtCQUFTLEdBQVQsVUFBVSxLQUFVO1FBQ2hCLElBQUksS0FBSyxFQUFFO1lBQ1AsT0FBTyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEM7SUFDTCxDQUFDOztnQkFiSixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLFlBQVk7aUJBQ3JCOztJQWFELGtCQUFDO0NBQUEsQUFmRCxJQWVDO1NBWlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdrdWlSZXZlcnNlJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXZlcnNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgLyoqXG4gICAgICogVE9ETzogYWRkIGRlc2NyaXB0aW9uXG4gICAgICovXG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=