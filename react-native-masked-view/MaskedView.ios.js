/**
 * @providesModule MaskedView
 * @flow
 */

'use strict';

var ReactNativeViewAttributes = require('ReactNativeViewAttributes');
var createReactNativeComponentClass = require('createReactNativeComponentClass');
var merge = require('merge');
var deepDiffer = require('deepDiffer');

var MaskedView = createReactNativeComponentClass({
  validAttributes: merge(ReactNativeViewAttributes.UIView, {
    color:           {diff: deepDiffer},
    lineDashPattern: {diff: deepDiffer},
  }),
  uiViewClassName: 'RNMaskedView',
});

module.exports = MaskedView;
