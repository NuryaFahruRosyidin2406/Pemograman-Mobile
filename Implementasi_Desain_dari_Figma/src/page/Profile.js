import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Profile = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <View style={{height: 224, width: 393, backgroundColor: '#005690'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 50,
            }}>
            <Image
              style={{
                height: 100,
                width: 100,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 15,
            }}>
            Nurya Fahru Rosyidin
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 15,
            }}>
            08123456789
          </Text>
        </View>
      </View>
      <View style={{marginHorizontal: 30, marginTop: 35}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#4982C1',
            borderRadius: 10,
            marginBottom: 33,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'white',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            CHANGE PROFILE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#4982C1',
            borderRadius: 10,
            marginBottom: 33,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'white',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            CHANGE PASSWORD
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#4982C1',
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'white',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            LOGOUT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
