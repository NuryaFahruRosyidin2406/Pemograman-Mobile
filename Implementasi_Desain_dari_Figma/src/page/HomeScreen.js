import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Card from '../component/card';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      {/* Bagian Uang */}
      <View
        style={{
          paddingTop: 40,
          paddingBottom: 10,
          paddingHorizontal: 20,
          backgroundColor: '#FFFFFF',
        }}>
        <Text style={{fontSize: 14, fontWeight: '400'}}>Your Balance</Text>
        <Text style={{fontSize: 32, fontWeight: '500'}}>RP. 1.234.567.000</Text>
      </View>
      {/* Bagian kotak biru */}
      <View style={{marginHorizontal: 20}}>
        <View style={{marginTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              paddingBottom: 14,
              backgroundColor: '#2F65BD',
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{flex: 1, alignItems: 'center'}}
              onPress={() => navigation.navigate('Top Up')}>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  paddingHorizontal: 13,
                  paddingVertical: 13,
                  borderRadius: 7,
                }}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                  }}
                  source={require('../images/add_24px.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                Top Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, alignItems: 'center'}}
              onPress={() => navigation.navigate('QR Payment')}>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  paddingHorizontal: 8,
                  paddingVertical: 8,
                  borderRadius: 7,
                }}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                  }}
                  source={require('../images/QR.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                QR Pay
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, alignItems: 'center'}}
              onPress={() => navigation.navigate('Transfer')}>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  paddingHorizontal: 13,
                  paddingVertical: 13,
                  borderRadius: 7,
                }}>
                <Image
                  style={{
                    height: 20,
                    width: 30,
                  }}
                  source={require('../images/arrow_right.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                Transfer
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Bagian kotak banyak */}
        <View style={{marginTop: 37}}>
          <View style={{marginBottom: 9}}>
            <Text>5 Latest Transaction</Text>
          </View>
          <ScrollView style={{height: '63%'}}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
