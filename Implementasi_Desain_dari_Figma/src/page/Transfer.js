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

const Transfer = ({navigation}) => {
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
          placeholder="Receiver Phone Number"
          onChangeText={Text => setText(Text)}
          defaultValue={Text}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Transfer2')}
          style={{backgroundColor: '#4982C1', borderRadius: 10}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'white',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            CHECK NUMBER
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({});
