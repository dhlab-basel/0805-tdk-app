import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { KnoraConstants, OntologyInformation, ReadTextValueAsHtml } from '@knora/core';
var TextValueAsHtmlComponent = /** @class */ (function () {
    function TextValueAsHtmlComponent(el) {
        this.el = el;
        this.referredResourceClicked = new EventEmitter();
    }
    Object.defineProperty(TextValueAsHtmlComponent.prototype, "ontologyInfo", {
        get: function () {
            return this._ontoInfo;
        },
        set: function (value) {
            this._ontoInfo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextValueAsHtmlComponent.prototype, "bindEvents", {
        get: function () {
            return this._bindEvents;
        },
        set: function (value) {
            this._bindEvents = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextValueAsHtmlComponent.prototype, "valueObject", {
        get: function () {
            return this._htmlValueObj;
        },
        set: function (value) {
            this._htmlValueObj = value;
            if (this.el.nativeElement.innerHTML) {
                this.el.nativeElement.innerHTML = this.valueObject.html;
            }
        },
        enumerable: true,
        configurable: true
    });
    TextValueAsHtmlComponent.prototype.refResClicked = function (refResourceIri) {
        this.referredResourceClicked.emit(refResourceIri);
    };
    /**
     * Binds a click event to standoff links that shows the referred resource.
     *
     * @param targetElement
     */
    TextValueAsHtmlComponent.prototype.onClick = function (targetElement) {
        if (this._bindEvents && targetElement.nodeName.toLowerCase() === 'a'
            && targetElement.className.toLowerCase().indexOf(KnoraConstants.SalsahLink) >= 0
            && targetElement.href !== undefined) {
            this.refResClicked(targetElement.href);
            // prevent propagation
            return false;
        }
        else if (this.bindEvents && targetElement.nodeName.toLowerCase() === 'a' && targetElement.href !== undefined) {
            // open link in a new window
            window.open(targetElement.href, '_blank');
            // prevent propagation
            return false;
        }
        else {
            // prevent propagation
            return false;
        }
    };
    TextValueAsHtmlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-text-value-as-html',
                    template: "<div>{{valueObject.html}}</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TextValueAsHtmlComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    TextValueAsHtmlComponent.propDecorators = {
        referredResourceClicked: [{ type: Output }],
        ontologyInfo: [{ type: Input }],
        bindEvents: [{ type: Input }],
        valueObject: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event.target'],] }]
    };
    return TextValueAsHtmlComponent;
}());
export { TextValueAsHtmlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12YWx1ZS1hcy1odG1sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLWh0bWwvdGV4dC12YWx1ZS1hcy1odG1sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV2RjtJQThDSSxrQ0FBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUF0Q2xDLDRCQUF1QixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBdUNuRSxDQUFDO0lBckNELHNCQUNJLGtEQUFZO2FBSWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFQRCxVQUNpQixLQUEwQjtZQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLGdEQUFVO2FBSWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQVBELFVBQ2UsS0FBYztZQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLGlEQUFXO2FBUWY7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzthQVhELFVBQ2dCLEtBQTBCO1lBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBRTNCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7YUFDM0Q7UUFDTCxDQUFDOzs7T0FBQTtJQWNELGdEQUFhLEdBQWIsVUFBYyxjQUFzQjtRQUNoQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7OztPQUlHO0lBRUgsMENBQU8sR0FEUCxVQUNRLGFBQWE7UUFDakIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssR0FBRztlQUM3RCxhQUFhLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztlQUM3RSxhQUFhLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxzQkFBc0I7WUFDdEIsT0FBTyxLQUFLLENBQUM7U0FDaEI7YUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDNUcsNEJBQTRCO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMxQyxzQkFBc0I7WUFDdEIsT0FBTyxLQUFLLENBQUM7U0FDaEI7YUFBTTtZQUNILHNCQUFzQjtZQUN0QixPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7O2dCQTNFSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsMkNBQWtEOztpQkFFckQ7Ozs7Z0JBUG1CLFVBQVU7OzswQ0FVekIsTUFBTTsrQkFHTixLQUFLOzZCQVNMLEtBQUs7OEJBU0wsS0FBSzswQkE4QkwsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzs7SUFtQjVDLCtCQUFDO0NBQUEsQUE3RUQsSUE2RUM7U0F4RVksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgS25vcmFDb25zdGFudHMsIE9udG9sb2d5SW5mb3JtYXRpb24sIFJlYWRUZXh0VmFsdWVBc0h0bWwgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLXRleHQtdmFsdWUtYXMtaHRtbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RleHQtdmFsdWUtYXMtaHRtbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdGV4dC12YWx1ZS1hcy1odG1sLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGV4dFZhbHVlQXNIdG1sQ29tcG9uZW50IHtcblxuICAgIEBPdXRwdXQoKVxuICAgIHJlZmVycmVkUmVzb3VyY2VDbGlja2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IG9udG9sb2d5SW5mbyh2YWx1ZTogT250b2xvZ3lJbmZvcm1hdGlvbikge1xuICAgICAgICB0aGlzLl9vbnRvSW5mbyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBvbnRvbG9neUluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vbnRvSW5mbztcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBiaW5kRXZlbnRzKHZhbHVlOiBCb29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2JpbmRFdmVudHMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgYmluZEV2ZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRFdmVudHM7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRUZXh0VmFsdWVBc0h0bWwpIHtcbiAgICAgICAgdGhpcy5faHRtbFZhbHVlT2JqID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnZhbHVlT2JqZWN0Lmh0bWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odG1sVmFsdWVPYmo7XG4gICAgfVxuXG4gICAgaHRtbDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2h0bWxWYWx1ZU9iajogUmVhZFRleHRWYWx1ZUFzSHRtbDtcbiAgICBwcml2YXRlIF9vbnRvSW5mbzogT250b2xvZ3lJbmZvcm1hdGlvbjtcbiAgICBwcml2YXRlIF9iaW5kRXZlbnRzOiBCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgIH1cblxuICAgIHJlZlJlc0NsaWNrZWQocmVmUmVzb3VyY2VJcmk6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJlZmVycmVkUmVzb3VyY2VDbGlja2VkLmVtaXQocmVmUmVzb3VyY2VJcmkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGEgY2xpY2sgZXZlbnQgdG8gc3RhbmRvZmYgbGlua3MgdGhhdCBzaG93cyB0aGUgcmVmZXJyZWQgcmVzb3VyY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFyZ2V0RWxlbWVudFxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXG4gICAgb25DbGljayh0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9iaW5kRXZlbnRzICYmIHRhcmdldEVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2EnXG4gICAgICAgICAgICAmJiB0YXJnZXRFbGVtZW50LmNsYXNzTmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoS25vcmFDb25zdGFudHMuU2Fsc2FoTGluaykgPj0gMFxuICAgICAgICAgICAgJiYgdGFyZ2V0RWxlbWVudC5ocmVmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVmUmVzQ2xpY2tlZCh0YXJnZXRFbGVtZW50LmhyZWYpO1xuICAgICAgICAgICAgLy8gcHJldmVudCBwcm9wYWdhdGlvblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYmluZEV2ZW50cyAmJiB0YXJnZXRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJyAmJiB0YXJnZXRFbGVtZW50LmhyZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gb3BlbiBsaW5rIGluIGEgbmV3IHdpbmRvd1xuICAgICAgICAgICAgd2luZG93Lm9wZW4odGFyZ2V0RWxlbWVudC5ocmVmLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IHByb3BhZ2F0aW9uXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IHByb3BhZ2F0aW9uXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==