"use strict";

var exec = require("cordova/exec");

/**
 * The Cordova plugin ID for this plugin.
 */
var PLUGIN_ID = "LaunchParamsPlugin";

/**
 * The plugin which will be exported and exposed in the global scope.
 */
var LaunchParamsPlugin = {};

/**
 * Get the launch params if they were set when the app started.  They can only be fetched once and are
 * cleared after that.
 * 
 * @param [function] successCallback - The success callback for this asynchronous function.
 * @param [function] failureCallback - The failure callback for this asynchronous function; receives an error string.
 */
LaunchParamsPlugin.get = function get(successCallback, failureCallback) {
	exec(successCallback, failureCallback, PLUGIN_ID, "get", []);
};

module.exports = LaunchParamsPlugin;
