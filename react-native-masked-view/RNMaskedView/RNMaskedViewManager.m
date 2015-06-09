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

RCT_EXPORT_VIEW_PROPERTY(maskImage, NSString);


@end
