import { Pipe } from '@angular/core';
/**
 * This pipe can be used for "for loops", in the case of an array with non-numeric indexes.
 * It returns the key and the value(s). In the example below the {{item.key}} contains the index value
 * and the {{item.value}} contains the value(s).
 *
 * When the value is an object with name and label, you get them with:
 * {{item.value.name}} and {{item.value.label}}
 *
 */
var KeyPipe = /** @class */ (function () {
    function KeyPipe() {
    }
    KeyPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    };
    KeyPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'kuiKey'
                },] }
    ];
    return KeyPipe;
}());
export { KeyPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvYWN0aW9uLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2tleS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEOzs7Ozs7OztHQVFHO0FBQ0g7SUFBQTtJQWNBLENBQUM7SUFURywyQkFBUyxHQUFULFVBQVUsS0FBVSxFQUFFLElBQVU7UUFDNUIsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssSUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1lBQ3JCLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDNUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7O2dCQWJKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsUUFBUTtpQkFDakI7O0lBWUQsY0FBQztDQUFBLEFBZEQsSUFjQztTQVhZLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhpcyBwaXBlIGNhbiBiZSB1c2VkIGZvciBcImZvciBsb29wc1wiLCBpbiB0aGUgY2FzZSBvZiBhbiBhcnJheSB3aXRoIG5vbi1udW1lcmljIGluZGV4ZXMuXG4gKiBJdCByZXR1cm5zIHRoZSBrZXkgYW5kIHRoZSB2YWx1ZShzKS4gSW4gdGhlIGV4YW1wbGUgYmVsb3cgdGhlIHt7aXRlbS5rZXl9fSBjb250YWlucyB0aGUgaW5kZXggdmFsdWVcbiAqIGFuZCB0aGUge3tpdGVtLnZhbHVlfX0gY29udGFpbnMgdGhlIHZhbHVlKHMpLlxuICpcbiAqIFdoZW4gdGhlIHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIG5hbWUgYW5kIGxhYmVsLCB5b3UgZ2V0IHRoZW0gd2l0aDpcbiAqIHt7aXRlbS52YWx1ZS5uYW1lfX0gYW5kIHt7aXRlbS52YWx1ZS5sYWJlbH19XG4gKlxuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ2t1aUtleSdcbn0pXG5leHBvcnQgY2xhc3MgS2V5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgICAgICBjb25zdCBrZXlzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaCh7a2V5OiBrZXksIHZhbHVlOiB2YWx1ZVtrZXldfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfVxufVxuIl19