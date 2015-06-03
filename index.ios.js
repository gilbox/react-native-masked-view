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
var hexagon = require('image!hexagon');
//var bwhexagon = require('image!bwhexagon');

var MaskedViewDemo = React.createClass({
  render: function() {
    return (
      <MaskedView color={'#343434'} lineDashPattern={[4,2]} style={styles.container}>
        <Image source={hexagon} />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </MaskedView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MaskedViewDemo', () => MaskedViewDemo);
