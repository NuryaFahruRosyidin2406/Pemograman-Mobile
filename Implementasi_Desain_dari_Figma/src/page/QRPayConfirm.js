import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const QRPayConfirm = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{marginHorizontal: 30}}>
        <View
          style={{
            alignItems: 'center',
            paddingTop: 40,
            paddingBottom: 10,
          }}>
          <Image
            source={require('../images/transaksi_pembayaran.png')}
            style={{height: 200, width: 200}}
          />
        </View>
        <View style={{paddingTop: 1}}>
          <Text style={{fontSize: 24, fontWeight: '400', textAlign: 'center'}}>
            Rp. 60.000
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#B2B2B2',
            marginTop: 4,
            marginBottom: 21,
          }}></View>
        <View
          style={{
            backgroundColor: '#4982C1',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 7,
            marginBottom: 32,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#FFFFFF',
              fontWeight: '300',
              paddingVertical: 15,
            }}>
            Payment To :
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: '#FFFFFF',
              fontWeight: '400',
              paddingBottom: 2,
            }}>
            Basicschool
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#FFFFFF',
              fontWeight: '400',
              paddingBottom: 29,
            }}>
            Jl. Ciparay No 20B, Kota Bandung
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#4982C1',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate('Pay Success')}>
          <Text style={{fontSize: 16, color: '#FFFFFF', fontWeight: '500'}}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QRPayConfirm;

const styles = StyleSheet.create({});
