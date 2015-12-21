//
//  AppDelegate.h
//  Crowd Participation
//
//  Created by Tim Lupo on 12/5/14.
//  Copyright (c) 2014 Tim Lupo. All rights reserved.
//

#import <Cocoa/Cocoa.h>

@interface AppDelegate : NSObject <NSApplicationDelegate> {
    IBOutlet NSMenu *statusMenu;
    NSStatusItem *statusItem;
    NSImage *statusImage;
    NSImage *statusHighlightImage;
}

- (IBAction)develop:(id)sender;
- (IBAction)play:(id)sender;
- (IBAction)calibrate:(id)sender;

@property (nonatomic, assign) int RLH;
@property (nonatomic, assign) int RHH;
@property (nonatomic, assign) int RLS;
@property (nonatomic, assign) int RHS;
@property (nonatomic, assign) int RLV;
@property (nonatomic, assign) int RHV;
@property (nonatomic, assign) int GLH;
@property (nonatomic, assign) int GHH;
@property (nonatomic, assign) int GLS;
@property (nonatomic, assign) int GHS;
@property (nonatomic, assign) int GLV;
@property (nonatomic, assign) int GHV;

@end

