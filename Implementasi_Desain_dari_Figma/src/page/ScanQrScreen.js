import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ScanQrScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          backgroundColor: '#C4C4C4',
          alignItems: 'center',
          paddingVertical: 160,
          marginTop: 105,
          marginBottom: 135,
          marginHorizontal: 20,
        }}>
        <Image
          source={require('../images/camera.png')}
          style={{height: 32.5, width: 40}}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#4982C1',
          alignItems: 'center',
          paddingVertical: 10,
        }}
        onPress={() => navigation.navigate('Payment Confirmation')}>
        <Text style={{fontSize: 18, color: '#FFFFFF', fontWeight: '500'}}>
          API : GET Cek Kode Merchant
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScanQrScreen;

const styles = StyleSheet.create({});
