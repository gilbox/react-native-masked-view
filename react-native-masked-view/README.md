# react-native-masked-view

Very simple native component that gives you masked views. Copied from brentvatne example [here](https://github.com/brentvatne/react-native-masked-view -example)

### Add it to your project

1. Run `npm install react-native-masked-view  --save`
2. Open your project in XCode, right click on `Libraries` and click `Add
   Files to "Your Project Name"` [(Screenshot)](http://url.brentvatne.ca/jQp8) then [(Screenshot)](http://url.brentvatne.ca/1gqUD).
3. Add `libRNMaskedView.a` to `Build Phases -> Link Binary With Libraries`
   [(Screenshot)](http://url.brentvatne.ca/17Xfe).
4. Whenever you want to use it within React code now you can: `var MaskedView = require('react-native-masked-view ');`

## Example

```javascript
var React = require('react-native');
var MaskedView = require('react-native-masked-view ');

var MaskedViewExampleApp = React.createClass({
  render: function() {
    return (
      <MaskedView color={'#343434'} style={styles.container}>
        <Image source={require('image!announcement')} style={styles.image} />
      </MaskedView>
    );
  }
});
```

![Demo](https://raw.githubusercontent.com/brentvatne/react-native-masked-view -example/master/example.png)


