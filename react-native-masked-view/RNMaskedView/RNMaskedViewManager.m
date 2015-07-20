//
//  RNMaskedViewManager.m
//  RNMaskedView
//

#import "RNMaskedViewManager.h"
#import "RNMaskedView.h"
#import "RCTBridge.h"

#import <UIKit/UIKit.h>

#import <RCTConvert.h>

@implementation RNMaskedViewManager

RCT_EXPORT_MODULE();

@synthesize bridge = _bridge;

- (UIView *)view
{
    return [[RNMaskedView alloc] init];
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_VIEW_PROPERTY(maskImage, NSString);


@end
