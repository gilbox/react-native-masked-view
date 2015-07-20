# react-native-masked-view

Masked View Component for React. Just like a `<View />` with a mask.

    <MaskedView maskImage="mask.png">...</MaskedView>

![screen shot](https://github.com/gilbox/react-native-masked-view/raw/master/masked-view-screenshot.png)

## compatibility

The latest version is compatible with react-native@0.7.1

## installation

- `npm install react-native-masked-view`
- `var MaskedView = require('react-native-masked-view');`

... then have a look at [these instructions](https://github.com/chirag04/react-native-dashed-border)
and adjust accordingly.

## demo

The demo is included. Just clone this repo, open `MaskedViewDemo.xcodeproj` in
xcode and click run.

## options

- `maskImage`: File name of image asset added to Images.xcassets.
[See React Docs for instructions on adding images.](https://facebook.github.io/react-native/docs/image.html#adding-static-resources-to-your-app-using-images-xcassets)

**note**: since react@0.6.0-rc the MaskedView element cannot have it's own backgroundColor, but it's children can.

## demo

Just clone this repo and open `MaskedViewDemo.xcodeproj` in xcode to edit the demo pictured above.

## todo

- add more sizing options
- add various mask sources: shape, svg, other layers
- replace `maskImage` prop with `maskSource` prop that works just like `<Image />`'s `source` prop.
  (the internal react-native image-related code really should be refactored so it's more easily
  re-usable outside of `<Image />`)
