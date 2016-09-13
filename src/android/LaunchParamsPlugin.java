package com.apache.cordova;

import android.content.Intent;
import android.net.Uri;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;

/**
 * A Cordova plugin to record a launch URL for later use.
 */
public class LaunchParamsPlugin extends CordovaPlugin {

    private Uri uri;

    @Override
    public void onNewIntent(Intent intent) {
        super.onNewIntent(intent);

        // Get the URI used to launch the Intent.
        this.uri = intent.getData(); 
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

        if (action.equals("get")) {

            String result = uri != null ? uri.toString() : null;
            this.uri = null;
            callbackContext.success(result);

            return true;
        }

        return false;
    }
}