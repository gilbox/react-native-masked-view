/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} = React;

var MaskedView = require('./react-native-masked-view/MaskedView.ios');
var gil = require('image!gil-portrait-small');

var MaskedViewDemo = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image source={gil} style={styles.imageContainer} />
        <MaskedView maskImage='hexagon.png' style={styles.maskContainer}>
          <Text style={styles.welcome}>
            g@gilbox.me
          </Text>
          <Text style={styles.instructions}>
            Inside a MaskedView!
          </Text>
          <Text style={styles.instructions}>
            Note that the Mask stretches
          </Text>
          <Text style={styles.instructions}>
            to the size of the View
          </Text>
        </MaskedView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    position: 'absolute',
    top: -60,
    left: -110,
    margin: 0,
  },
  maskContainer: {
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000033',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#aaaaff',
  },
  instructions: {
    textAlign: 'center',
    color: '#aaaaff',
    marginBottom: 5,
    width: 400,
  },
});

AppRegistry.registerComponent('MaskedViewDemo', () => MaskedViewDemo);
