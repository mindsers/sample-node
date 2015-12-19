/*jslint node: true */
"use strict";

module.exports = (function () {
    var ErrorHandler = {
        error: personalizedError,
        default: defaultError
    };
    
    return ErrorHandler;
    
    function personalizedError(code, msg) {
        return function (req, res, next) {
            var response = _defaultJSON(code);
            response.description = msg;
            
            res.status(code).json(response);
        };
    }
    
    function defaultError(code) {
        return function (req, res, next) {
            res.status(code).json(_defaultJSON(code));
        };
    }
    
    function _defaultJSON(code) {
        switch (code) {
        /* Success */
        case 200:
            return { status: 200, description: 'OK' };
        case 201:
            return { status: 201, description: 'Created' };
        case 202:
            return { status: 202, description: 'Accepted' };
        case 203:
            return { status: 203, description: 'Non-Authoritative Information' };
        case 204:
            return { status: 204, description: 'No Content' };
        case 205:
            return { status: 205, description: 'Reset Content' };
        case 206:
            return { status: 206, description: 'Partial Content' };
        case 207:
            return { status: 207, description: 'Multi-Status' };
        case 210:
            return { status: 210, description: 'Content Different' };

        /* Redirection */
        case 300:
            return { status: 300, description: 'Multiple Choices' };
        case 301:
            return { status: 301, description: 'Moved Permanently' };
        case 302:
            return { status: 302, description: 'Moved Temporarily' };
        case 303:
            return { status: 303, description: 'See Other' };
        case 304:
            return { status: 304, description: 'Not Modified' };
        case 305:
            return { status: 305, description: 'Use Proxy' };
        case 307:
            return { status: 307, description: 'Temporary Redirect' };
        case 308:
            return { status: 308, description: 'Permanent Redirect' };
        case 310:
            return { status: 310, description: 'Too many Redirects' };

        /* Client error */
        case 400:
            return { status: 400, description: 'Bad Request' };
        case 401:
            return { status: 401, description: 'Unauthorized' };
        case 402:
            return { status: 402, description: 'Payment Required' };
        case 403:
            return { status: 403, description: 'Forbidden' };
        case 404:
            return { status: 404, description: 'Not Found' };
        case 405:
            return { status: 405, description: 'Method Not Allowed' };
        case 406:
            return { status: 406, description: 'Not Acceptable' };
        case 407:
            return { status: 407, description: 'Proxy Authentication Required' };
        case 408:
            return { status: 408, description: 'Request Time-out' };
        case 409:
            return { status: 409, description: 'Conflict' };
        case 410:
            return { status: 410, description: 'Gone' };
        case 411:
            return { status: 411, description: 'Length Required' };
        case 412:
            return { status: 412, description: 'Precondition Failed' };
        case 413:
            return { status: 413, description: 'Request Entity Too Large' };
        case 414:
            return { status: 414, description: 'Request-URI Too Long' };
        case 415:
            return { status: 415, description: 'Unsupported Media Type' };
        case 416:
            return { status: 416, description: 'Requested range unsatisfiable' };
        case 417:
            return { status: 417, description: 'Expectation failed' };
        case 418:
            return { status: 418, description: 'I’m a teapot' };
        case 422:
            return { status: 422, description: 'Unprocessable entity' };
        case 423:
            return { status: 423, description: 'Locked' };
        case 424:
            return { status: 424, description: 'Method failure' };
        case 425:
            return { status: 425, description: 'Unordered Collection' };
        case 426:
            return { status: 426, description: 'Upgrade Required' };
        case 428:
            return { status: 428, description: 'Precondition Required' };
        case 429:
            return { status: 429, description: 'Too Many Requests' };
        case 431:
            return { status: 431, description: 'Request Header Fields Too Large' };
        case 441:
            return { status: 441, description: 'Retry With' };
        case 450:
            return { status: 450, description: 'Blocked by Windows Parental Controls' };
        case 451:
            return { status: 451, description: 'Unavailable For Legal Reasons' };
        case 456:
            return { status: 456, description: 'Unrecoverable Error' };
        case 499:
            return { status: 499, description: 'Client has closed connection' };

        /* Server error */
        case 500:
            return { status: 500, description: 'Internal Server Error' };
        case 501:
            return { status: 501, description: 'Not Implemented' };
        case 502:
            return { status: 502, description: 'Bad Gateway ou Proxy Error' };
        case 503:
            return { status: 503, description: 'Service Unavailable' };
        case 504:
            return { status: 504, description: 'Gateway Time-out' };
        case 505:
            return { status: 505, description: 'HTTP Version not supported' };
        case 506:
            return { status: 506, description: 'Variant also negociate' };
        case 507:
            return { status: 507, description: 'Insufficient storage' };
        case 508:
            return { status: 508, description: 'Loop detected' };
        case 509:
            return { status: 509, description: 'Bandwidth Limit Exceeded' };
        case 510:
            return { status: 510, description: 'Not extended' };
        case 511:
            return { status: 511, description: 'Network authentication required' };


        default:
            return { status: 520, description: 'Web server is returning an unknown error' };
        }
    }
})();