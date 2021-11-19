import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const card = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        padding: 10,
        flexDirection: 'row',
        marginBottom: 15,
      }}>
      <Image
        source={require('../images/left-right-arrow.png')}
        style={{
          width: 35,
          height: 35,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 8,
        }}
      />
      <View style={{justifyContent: 'center', marginHorizontal: 16}}>
        <Text style={{marginBottom: 8, fontWeight: '400'}}>RP. 80.000</Text>
        <Text style={{fontWeight: '400'}}>Transfer to 082240206861</Text>
      </View>
      <Text
        style={{
          marginHorizontal: 16,
          fontWeight: '400',
        }}>
        20/08/2020
      </Text>
    </View>
  );
};

export default card;

const styles = StyleSheet.create({});
