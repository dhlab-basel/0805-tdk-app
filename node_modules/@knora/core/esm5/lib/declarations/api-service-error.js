/**
 * Error class used as API response in ApiService
 */
var ApiServiceError = /** @class */ (function () {
    function ApiServiceError() {
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
        /**
         * Additional error info
         */
        this.errorInfo = '';
    }
    return ApiServiceError;
}());
export { ApiServiceError };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXNlcnZpY2UtZXJyb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZWNsYXJhdGlvbnMvYXBpLXNlcnZpY2UtZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0dBRUc7QUFDSDtJQUFBO1FBRUk7O1dBRUc7UUFDSCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRVg7O1dBRUc7UUFDSCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCOztXQUVHO1FBQ0gsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUVUOztXQUVHO1FBQ0gsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQUVuQixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEVycm9yIGNsYXNzIHVzZWQgYXMgQVBJIHJlc3BvbnNlIGluIEFwaVNlcnZpY2VcbiAqL1xuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2VFcnJvciB7XG5cbiAgICAvKipcbiAgICAgKiBTdGF0dXMgbnVtYmVyXG4gICAgICovXG4gICAgc3RhdHVzID0gMDtcblxuICAgIC8qKlxuICAgICAqIFN0YXR1cyB0ZXh0XG4gICAgICovXG4gICAgc3RhdHVzVGV4dCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQVBJIHVybFxuICAgICAqL1xuICAgIHVybCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQWRkaXRpb25hbCBlcnJvciBpbmZvXG4gICAgICovXG4gICAgZXJyb3JJbmZvID0gJyc7XG5cbn1cbiJdfQ==