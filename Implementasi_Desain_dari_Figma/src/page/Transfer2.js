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

const Transfer2 = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 21,
          paddingBottom: 10,
          marginBottom: 86,
        }}>
        <Image
          source={require('../images/transfer.png')}
          style={{height: 212, width: 290}}
        />
      </View>
      <View style={{marginTop: 10, marginHorizontal: 30}}>
        <TextInput
          style={{
            borderColor: '#C3C3C3',
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 23,
            paddingLeft: 20,
            paddingBottom: 10,
            paddingTop: 10,
            backgroundColor: '#FFFFFF',
          }}
          placeholder="Nominal Transfer"
          onChangeText={Text => setText(Text)}
          defaultValue={Text}
        />
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '500',
            fontSize: 16,
            marginBottom: 21,
          }}>
          Receiver :
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '400',
            fontSize: 16,
            marginBottom: 21,
          }}>
          Dendy Aditya
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Transfer Success')}
          style={{backgroundColor: '#4982C1', borderRadius: 10}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'white',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            TRANSFER
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Transfer2;

const styles = StyleSheet.create({});
