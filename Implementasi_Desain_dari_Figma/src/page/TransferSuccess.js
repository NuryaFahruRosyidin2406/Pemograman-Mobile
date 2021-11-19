import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const TransferSuccess = ({navigation}) => {
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
            source={require('../images/transfer.png')}
            style={{height: 200, width: 200}}
          />
        </View>
        <View style={{paddingTop: 20}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '400',
              textAlign: 'center',
              marginBottom: 23,
            }}>
            Transfer Success!
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '400',
              textAlign: 'center',
              marginBottom: 23,
            }}>
            Rp. 100.000
          </Text>
        </View>
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
              paddingVertical: 14,
            }}>
            20 August 2020
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#FFFFFF',
              fontWeight: '400',
              paddingBottom: 12,
            }}>
            Receiver : Dendy Aditya
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#FFFFFF',
              fontWeight: '400',
              paddingBottom: 15,
            }}>
            082240206xxx
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#4982C1',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate('Tab')}>
          <Text style={{fontSize: 16, color: '#FFFFFF', fontWeight: '500'}}>
            FINISH
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransferSuccess;

const styles = StyleSheet.create({});
