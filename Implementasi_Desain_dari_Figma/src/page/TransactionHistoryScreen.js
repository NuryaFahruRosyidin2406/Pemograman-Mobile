import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Card from '../component/card';

const TransactionHistoryScreen = () => {
  return (
    <ScrollView
      style={{
        height: '60%',
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: '#E5E5E5',
      }}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ScrollView>
  );
};

export default TransactionHistoryScreen;

const styles = StyleSheet.create({});
