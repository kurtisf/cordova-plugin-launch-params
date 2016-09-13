//
//  LaunchParamsPlugin.m
//
//  Copyright (c) 2016 Kurt Fickewirth. All rights reserved.
//

#import "LaunchParamsPlugin.h"

@implementation LaunchParamsPlugin

- (void)pluginInitialize {
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(applicationLaunchedWithUrl:) name:CDVPluginHandleOpenURLNotification object:nil];
}

- (void)applicationLaunchedWithUrl:(NSNotification*)notification {

    NSURL *url = [notification object];

    if (url) {
        if (!self.url) {
            self.url = url;
        }
        else {
            NSLog(@"LaunchParamsPlugin: Second Launch URL detected! Ignored URL: %@", [url absoluteString]);
        }
    }
}

- (void)get:(CDVInvokedUrlCommand *)command {
    
    NSString *result = [self.url absoluteString];
    
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:result];
    self.url = nil;
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
