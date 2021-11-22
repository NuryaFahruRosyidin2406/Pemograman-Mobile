import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  setText,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            borderRadius: 200,
            backgroundColor: '#005690',
            height: 120,
            width: 120,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 69,
          }}>
          <Image source={require('../images/pngaaa2.png')} />
        </View>
        <Text style={{fontSize: 26, marginTop: 20, fontWeight: '500'}}>
          e-wallet
        </Text>
      </View>
      <View style={{marginTop: 23, marginHorizontal: 30}}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 23,
            paddingLeft: 20,
          }}
          placeholder="Email"
          onChangeText={Text => setText(Text)}
          defaultValue={Text}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 23,
            paddingLeft: 20,
          }}
          placeholder="Password"
          onChangeText={Text => setText(Text)}
          defaultValue={Text}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Tab')}
          style={{backgroundColor: '#4982C1'}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'white',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegistrasiScreen')}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Registrasi
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
