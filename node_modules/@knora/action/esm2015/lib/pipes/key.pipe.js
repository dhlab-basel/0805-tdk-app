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
export class KeyPipe {
    transform(value, args) {
        const keys = [];
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    }
}
KeyPipe.decorators = [
    { type: Pipe, args: [{
                name: 'kuiKey'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvYWN0aW9uLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2tleS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEOzs7Ozs7OztHQVFHO0FBSUgsTUFBTSxPQUFPLE9BQU87SUFFaEIsU0FBUyxDQUFDLEtBQVUsRUFBRSxJQUFVO1FBQzVCLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtZQUNyQixJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2FBQzVDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7WUFiSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLFFBQVE7YUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhpcyBwaXBlIGNhbiBiZSB1c2VkIGZvciBcImZvciBsb29wc1wiLCBpbiB0aGUgY2FzZSBvZiBhbiBhcnJheSB3aXRoIG5vbi1udW1lcmljIGluZGV4ZXMuXG4gKiBJdCByZXR1cm5zIHRoZSBrZXkgYW5kIHRoZSB2YWx1ZShzKS4gSW4gdGhlIGV4YW1wbGUgYmVsb3cgdGhlIHt7aXRlbS5rZXl9fSBjb250YWlucyB0aGUgaW5kZXggdmFsdWVcbiAqIGFuZCB0aGUge3tpdGVtLnZhbHVlfX0gY29udGFpbnMgdGhlIHZhbHVlKHMpLlxuICpcbiAqIFdoZW4gdGhlIHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIG5hbWUgYW5kIGxhYmVsLCB5b3UgZ2V0IHRoZW0gd2l0aDpcbiAqIHt7aXRlbS52YWx1ZS5uYW1lfX0gYW5kIHt7aXRlbS52YWx1ZS5sYWJlbH19XG4gKlxuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ2t1aUtleSdcbn0pXG5leHBvcnQgY2xhc3MgS2V5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgICAgICBjb25zdCBrZXlzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaCh7a2V5OiBrZXksIHZhbHVlOiB2YWx1ZVtrZXldfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfVxufVxuIl19