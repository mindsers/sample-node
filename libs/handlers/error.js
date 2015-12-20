/*jslint node: true */
"use strict";

module.exports = (function () {
    /**
     * Send HTTP response with code and 
     * description custom.
     * 
     * @function personalizedError
     * @params {int} code - HTTP Error Code
     * @params {string} msg - Description
     * @return {function} express middleware
     */
    function personalizedError(code, msg) {
        return function (req, res, next) {
            var response = _defaultJSON(code);
            response.description = msg;
            
            res.status(code).json(response);
        };
    }
    
    /**
     * Send HTTP default response for HTTP code
     * 
     * @function defaultError
     * @params {int} code - HTTP Error Code
     * @return {function} express middleware
     */
    function defaultError(code) {
        return function (req, res, next) {
            res.status(code).json(_defaultJSON(code));
        };
    }
    
    function _defaultJSON(code) {
        var json = { status: code, description: '' };
        
        switch (code) {
        /* Success */
        case 200:
            json.description = 'OK';
            break;
        case 201:
            json.description = 'Created';
            break;
        case 202:
            json.description = 'Accepted';
            break;
        case 203:
            json.description = 'Non-Authoritative Information';
            break;
        case 204:
            json.description = 'No Content';
            break;
        case 205:
            json.description = 'Reset Content';
            break;
        case 206:
            json.description = 'Partial Content';
            break;
        case 207:
            json.description = 'Multi-Status';
            break;
        case 210:
            json.description = 'Content Different';
            break;

        /* Redirection */
        case 300:
            json.description = 'Multiple Choices';
            break;
        case 301:
            json.description = 'Moved Permanently';
            break;
        case 302:
            json.description = 'Moved Temporarily';
            break;
        case 303:
            json.description = 'See Other';
            break;
        case 304:
            json.description = 'Not Modified';
            break;
        case 305:
            json.description = 'Use Proxy';
            break;
        case 307:
            json.description = 'Temporary Redirect';
            break;
        case 308:
            json.description = 'Permanent Redirect';
            break;
        case 310:
            json.description = 'Too many Redirects';
            break;

        /* Client error */
        case 400:
            json.description = 'Bad Request';
            break;
        case 401:
            json.description = 'Unauthorized';
            break;
        case 402:
            json.description = 'Payment Required';
            break;
        case 403:
            json.description = 'Forbidden';
            break;
        case 404:
            json.description = 'Not Found';
            break;
        case 405:
            json.description = 'Method Not Allowed';
            break;
        case 406:
            json.description = 'Not Acceptable';
            break;
        case 407:
            json.description = 'Proxy Authentication Required';
            break;
        case 408:
            json.description = 'Request Time-out';
            break;
        case 409:
            json.description = 'Conflict';
            break;
        case 410:
            json.description = 'Gone';
            break;
        case 411:
            json.description = 'Length Required';
            break;
        case 412:
            json.description = 'Precondition Failed';
            break;
        case 413:
            json.description = 'Request Entity Too Large';
            break;
        case 414:
            json.description = 'Request-URI Too Long';
            break;
        case 415:
            json.description = 'Unsupported Media Type';
            break;
        case 416:
            json.description = 'Requested range unsatisfiable';
            break;
        case 417:
            json.description = 'Expectation failed';
            break;
        case 418:
            json.description = 'I’m a teapot';
            break;
        case 422:
            json.description = 'Unprocessable entity';
            break;
        case 423:
            json.description = 'Locked';
            break;
        case 424:
            json.description = 'Method failure';
            break;
        case 425:
            json.description = 'Unordered Collection';
            break;
        case 426:
            json.description = 'Upgrade Required';
            break;
        case 428:
            json.description = 'Precondition Required';
            break;
        case 429:
            json.description = 'Too Many Requests';
            break;
        case 431:
            json.description = 'Request Header Fields Too Large';
            break;
        case 441:
            json.description = 'Retry With';
            break;
        case 450:
            json.description = 'Blocked by Windows Parental Controls';
            break;
        case 451:
            json.description = 'Unavailable For Legal Reasons';
            break;
        case 456:
            json.description = 'Unrecoverable Error';
            break;
        case 499:
            json.description = 'Client has closed connection';
            break;

        /* Server error */
        case 500:
            json.description = 'Internal Server Error';
            break;
        case 501:
            json.description = 'Not Implemented';
            break;
        case 502:
            json.description = 'Bad Gateway ou Proxy Error';
            break;
        case 503:
            json.description = 'Service Unavailable';
            break;
        case 504:
            json.description = 'Gateway Time-out';
            break;
        case 505:
            json.description = 'HTTP Version not supported';
            break;
        case 506:
            json.description = 'Variant also negociate';
            break;
        case 507:
            json.description = 'Insufficient storage';
            break;
        case 508:
            json.description = 'Loop detected';
            break;
        case 509:
            json.description = 'Bandwidth Limit Exceeded';
            break;
        case 510:
            json.description = 'Not extended';
            break;
        case 511:
            json.description = 'Network authentication required';
            break;


        default:
            json.status = 520;
            json.description = 'Web server is returning an unknown error';
            break;
        }
        
        return json;
    }
    
    /**
     * Make simple to return HTTP error code
     * 
     * @module ErrorHandler
     */
    var ErrorHandler = {
        personalizedError: personalizedError,
        defaultError: defaultError
    };
    
    return ErrorHandler;
}());