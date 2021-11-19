import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setInterval(() => {
      navigation.navigate('LoginScreen');
    }, 1500);
  });
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#005690',
        paddingTop: 100,
      }}>
      <Image
        source={require('../images/pngaaa2.png')}
        style={{width: 174.91, height: 150}}
      />
      <Text style={{color: '#FFFFFF', fontSize: 36, marginTop: 80}}>
        e-wallet apps
      </Text>
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 36,
          textAlign: 'center',
          marginTop: 20,
        }}>
        Final Project React Native
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
