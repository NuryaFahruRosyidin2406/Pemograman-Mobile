import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  setText,
} from 'react-native';

const RegistrationScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{marginTop: 150, marginHorizontal: 30}}>
        <TextInput
          style={{
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
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 23,
            paddingLeft: 20,
          }}
          placeholder="Name"
          onChangeText={Text => setText(Text)}
          defaultValue={Text}
        />
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 23,
            paddingLeft: 20,
          }}
          placeholder="No. Handphone"
          onChangeText={Text => setText(Text)}
          defaultValue={Text}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={{backgroundColor: '#4982C1', borderRadius: 10}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'white',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({});
