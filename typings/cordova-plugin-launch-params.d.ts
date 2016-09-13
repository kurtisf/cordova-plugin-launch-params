declare module LaunchParamsPlugin {

    interface LaunchParamsPluginStatic {

        /**
         * Get the Launch Parameters if there were any.
         * 
         * @param successCallback The success callback for this asynchronous function; receives a result string
         * @param failureCallback The failure callback for this asynchronous function; receives an error string.
         */
        get(successCallback?: (get: string) => void, failureCallback?: (error: string) => void): void;

    }
}

declare var LaunchParamsPlugin: LaunchParamsPlugin.LaunchParamsPluginStatic;
