'use strict';

var util = {};

/**
 * Utility function to send json response (content) and status code
 * through the response object passed in as parameter
 * @param {Object} the response object which will be used to send the content and status
 * @param {Number=} An integer value for the HTTP status
 * @param {*} The content which has to be sent as response body
 */
util.sendJSONResponse = function (res, status, content) {

  // Default the status and content if not provided
  status = status || 200;
  content = content || {};

  res.status(status);
  res.json(content);
};

module.exports = util;
