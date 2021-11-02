import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render(){
    return (
      <View style={{flex: 1}}>
        {/*<Text style={styles.welcome}>Clone Gojek App !</Text>*/}
        <View style={{flex: 1, backgroundColor: 'blue'}}></View>
        <View style={{height: 54, backgroundColor: 'yellow', flexDirection: 'row'}}>
          <View style={{backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home</Text>
          </View>
          <View style={{backgroundColor: 'pink', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Orders</Text>
          </View>
          <View style={{backgroundColor: 'purple', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Help</Text>
          </View>
          <View style={{backgroundColor: 'brown', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Inbox</Text>
          </View>
          <View style={{backgroundColor: 'green', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Account</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});