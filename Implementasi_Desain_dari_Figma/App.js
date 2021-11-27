import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from './src/page/SplashScreen';
import LoginScreen from './src/page/LoginScreen';
import RegistrationScreen from './src/page/RegistrationScreen';
import HomeScreen from './src/page/HomeScreen';
import TransactionHistoryScreen from './src/page/TransactionHistoryScreen';
import Profile from './src/page/Profile';
import TopUpScreen from './src/page/TopUpScreen';
import ScanQrScreen from './src/page/ScanQrScreen';
import QRPayConfirm from './src/page/QRPayConfirm';
import Transfer from './src/page/Transfer';
import Transfer2 from './src/page/Transfer2';
import TransferSuccess from './src/page/TransferSuccess';
import TopUpSuccessScreen from './src/page/TopUpSuccessScreen';
import PaySuccessScreen from './src/page/PaySuccessScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TransactionHistoryScreen"
        component={TransactionHistoryScreen}
        options={{
          tabBarLabel: 'TransactionHistory',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="arrow-up-down" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="face-profile" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegistrationScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#005690'},
          }}
        />
        <Stack.Screen
          name="Tab"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Top Up"
          component={TopUpScreen}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#005690'},
          }}
        />
        <Stack.Screen
          name="QR Payment"
          component={ScanQrScreen}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#005690'},
          }}
        />
        <Stack.Screen
          name="Payment Confirmation"
          component={QRPayConfirm}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#005690'},
          }}
        />
        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#005690'},
          }}
        />
        <Stack.Screen
          name="Transfer2"
          component={Transfer2}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#005690'},
          }}
        />
        <Stack.Screen
          name="Transfer Success"
          component={TransferSuccess}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#005690'},
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Top Up Success"
          component={TopUpSuccessScreen}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#005690'},
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Pay Success"
          component={PaySuccessScreen}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#005690'},
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
