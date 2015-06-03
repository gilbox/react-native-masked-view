//
//  RNMaskedView.m
//  RNMaskedView
//
//  Created by Chirag Jain on 5/7/15.
//  Copyright (c) 2015 Chirag Jain. All rights reserved.
//

#import "RNMaskedView.h"
#import "RCTConvert.h"
#import <UIKit/UIKit.h>
#import <QuartzCore/QuartzCore.h>

@implementation RNMaskedView {
    UIImage *_maskUIImage;
}

- (void)layoutSubviews
{
    [super layoutSubviews];
    
    CALayer *mask = [CALayer layer];
    mask.contents = (id)[_maskUIImage CGImage];
    mask.frame = self.bounds; //TODO custom: CGRectMake(left, top, width, height);
    self.layer.mask = mask;
    self.layer.masksToBounds = YES;
}

- (void)setMaskImage:(NSString *)imageString
{
    NSString *imageName = [RCTConvert NSString:imageString];
    _maskUIImage = [UIImage imageNamed:imageName];
}

@end
