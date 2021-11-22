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

const TopUpScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 80,
          paddingBottom: 28,
        }}>
        <Image
          source={require('../images/dompet.png')}
          style={{height: 156, width: 156}}
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
          placeholder="Nominal Top Up"
          onChangeText={Text => setText(Text)}
          defaultValue={Text}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Top Up Success')}
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

export default TopUpScreen;

const styles = StyleSheet.create({});
