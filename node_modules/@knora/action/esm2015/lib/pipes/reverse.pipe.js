import { Pipe } from '@angular/core';
export class ReversePipe {
    /**
     * TODO: add description
     */
    transform(value) {
        if (value) {
            return value.slice().reverse();
        }
    }
}
ReversePipe.decorators = [
    { type: Pipe, args: [{
                name: 'kuiReverse'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2ZXJzZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2FjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9yZXZlcnNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTSxPQUFPLFdBQVc7SUFFcEI7O09BRUc7SUFFSCxTQUFTLENBQUMsS0FBVTtRQUNoQixJQUFJLEtBQUssRUFBRTtZQUNQLE9BQU8sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQzs7O1lBYkosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSxZQUFZO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ2t1aVJldmVyc2UnXG59KVxuZXhwb3J0IGNsYXNzIFJldmVyc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICAvKipcbiAgICAgKiBUT0RPOiBhZGQgZGVzY3JpcHRpb25cbiAgICAgKi9cblxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==