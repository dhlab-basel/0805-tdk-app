import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';
/**
 * Result class used as API url response in ApiService
 */
var ApiServiceResult = /** @class */ (function () {
    function ApiServiceResult() {
        /**
         * Status number
         */
        this.status = 0;
        /**
         * Status text
         */
        this.statusText = '';
        /**
         * API url
         */
        this.url = '';
    }
    /**
     * Gets the result body as instance of classObject.
     * @param classObject
     * @returns {any}
     * @throws
     */
    ApiServiceResult.prototype.getBody = function (classObject) {
        // console.log(this.body);
        return ApiServiceResult.jsonConvert.deserialize(this.body, classObject);
    };
    ApiServiceResult.jsonConvert = new JsonConvert(OperationMode.ENABLE, ValueCheckingMode.ALLOW_NULL);
    return ApiServiceResult;
}());
export { ApiServiceResult };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXNlcnZpY2UtcmVzdWx0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGVjbGFyYXRpb25zL2FwaS1zZXJ2aWNlLXJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWhGOztHQUVHO0FBQ0g7SUFBQTtRQUlJOztXQUVHO1FBQ0gsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUVYOztXQUVHO1FBQ0gsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVoQjs7V0FFRztRQUNILFFBQUcsR0FBRyxFQUFFLENBQUM7SUFvQmIsQ0FBQztJQWJHOzs7OztPQUtHO0lBRUgsa0NBQU8sR0FBUCxVQUFRLFdBQTRCO1FBQ2hDLDBCQUEwQjtRQUMxQixPQUFPLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBaENjLDRCQUFXLEdBQWdCLElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFtQ2xILHVCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FyQ1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBKc29uQ29udmVydCwgT3BlcmF0aW9uTW9kZSwgVmFsdWVDaGVja2luZ01vZGUgfSBmcm9tICdqc29uMnR5cGVzY3JpcHQnO1xuXG4vKipcbiAqIFJlc3VsdCBjbGFzcyB1c2VkIGFzIEFQSSB1cmwgcmVzcG9uc2UgaW4gQXBpU2VydmljZVxuICovXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZVJlc3VsdCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBqc29uQ29udmVydDogSnNvbkNvbnZlcnQgPSBuZXcgSnNvbkNvbnZlcnQoT3BlcmF0aW9uTW9kZS5FTkFCTEUsIFZhbHVlQ2hlY2tpbmdNb2RlLkFMTE9XX05VTEwpO1xuXG4gICAgLyoqXG4gICAgICogU3RhdHVzIG51bWJlclxuICAgICAqL1xuICAgIHN0YXR1cyA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBTdGF0dXMgdGV4dFxuICAgICAqL1xuICAgIHN0YXR1c1RleHQgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEFQSSB1cmxcbiAgICAgKi9cbiAgICB1cmwgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEJvZHkgYXMgSlNPTlxuICAgICAqL1xuICAgIGJvZHk6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHJlc3VsdCBib2R5IGFzIGluc3RhbmNlIG9mIGNsYXNzT2JqZWN0LlxuICAgICAqIEBwYXJhbSBjbGFzc09iamVjdFxuICAgICAqIEByZXR1cm5zIHthbnl9XG4gICAgICogQHRocm93c1xuICAgICAqL1xuXG4gICAgZ2V0Qm9keShjbGFzc09iamVjdD86IHsgbmV3KCk6IGFueSB9KTogYW55IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ib2R5KTtcbiAgICAgICAgcmV0dXJuIEFwaVNlcnZpY2VSZXN1bHQuanNvbkNvbnZlcnQuZGVzZXJpYWxpemUodGhpcy5ib2R5LCBjbGFzc09iamVjdCk7XG4gICAgfVxuXG5cbn1cbiJdfQ==