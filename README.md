# LaunchParams Cordova Plugin

This is a simple Cordova plugin that records an app launch URL that can be later requested from script.


# Install the Plugin

Install the plugin directly from git:

    cordova plugin add https://github.com/kurtisf/cordova-plugin-launch-params

# Using the Plugin

The plugin wires iteself up to obtain the launch URL if one was used to start the app.  Simply request it from this plugin prior to running your navigation code.

Example code:

    LaunchParamsPlugin.get(function(launchUrl) {
        console.log("Launch Url is: " + launchUrl);
    });
