import { Pipe } from '@angular/core';
var SortByPipe = /** @class */ (function () {
    function SortByPipe() {
    }
    /**
     * TODO: add description
     */
    SortByPipe.prototype.transform = function (array, args) {
        if (array !== undefined) {
            array.sort(function (a, b) {
                if (args) {
                    a[args] = (a[args] === null ? '' : a[args]);
                    b[args] = (b[args] === null ? '' : b[args]);
                    if (a[args].toLowerCase() < b[args].toLowerCase()) {
                        return -1;
                    }
                    else if (a[args].toLowerCase() > b[args].toLowerCase()) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
            });
        }
        return array;
    };
    SortByPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'kuiSortBy'
                },] }
    ];
    return SortByPipe;
}());
export { SortByPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1ieS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2FjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9zb3J0LWJ5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQ7SUFBQTtJQTRCQSxDQUFDO0lBdkJHOztPQUVHO0lBQ0gsOEJBQVMsR0FBVCxVQUFVLEtBQWlCLEVBQUUsSUFBWTtRQUNyQyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQU0sRUFBRSxDQUFNO2dCQUN0QixJQUFJLElBQUksRUFBRTtvQkFDTixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUM1QyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUM1QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7d0JBQy9DLE9BQU8sQ0FBQyxDQUFDLENBQUM7cUJBQ2I7eUJBQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO3dCQUN0RCxPQUFPLENBQUMsQ0FBQztxQkFDWjt5QkFBTTt3QkFDSCxPQUFPLENBQUMsQ0FBQztxQkFDWjtpQkFDSjtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOztnQkExQkosSUFBSSxTQUFDO29CQUNGLElBQUksRUFBRSxXQUFXO2lCQUNwQjs7SUEwQkQsaUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQXpCWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ2t1aVNvcnRCeSdcbn0pXG5leHBvcnQgY2xhc3MgU29ydEJ5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgLyoqXG4gICAgICogVE9ETzogYWRkIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgdHJhbnNmb3JtKGFycmF5OiBBcnJheTxhbnk+LCBhcmdzOiBzdHJpbmcpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgaWYgKGFycmF5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFycmF5LnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgYVthcmdzXSA9IChhW2FyZ3NdID09PSBudWxsID8gJycgOiBhW2FyZ3NdKTtcbiAgICAgICAgICAgICAgICAgICAgYlthcmdzXSA9IChiW2FyZ3NdID09PSBudWxsID8gJycgOiBiW2FyZ3NdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFbYXJnc10udG9Mb3dlckNhc2UoKSA8IGJbYXJnc10udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFbYXJnc10udG9Mb3dlckNhc2UoKSA+IGJbYXJnc10udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxufVxuXG4iXX0=