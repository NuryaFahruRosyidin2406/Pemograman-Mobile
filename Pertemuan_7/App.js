// React Navigation
// Routing and navigation for Expo and React Native apps.
// Link Pembelajaran: https://reactnavigation.org/docs/getting-started
// perlu intall aplikasi pihak ke-3
// 1. Install Navigation: npm install @react-navigation/native
// cek detailnya jalankan perintah: npm audit
// 2. Installing dependencies into a bare React Native project: npm install react-native-screens react-native-safe-area-context
// 3. Installing the native stack navigator library: npm install @react-navigation/native-stack

// 1. Contoh Menggunakan Navigation
// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const HomeScreen= () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };

// const OtherScreen= () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Other Screen</Text>
//     </View>
//   );
// };

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Other" component={OtherScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// 2. Moving Between Screens
// Navigation to a new screen
// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const HomeScreen = ({navigation}) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Other Screen"
//         onPress={() => {
//           navigation.navigate('Other')
//         }}
//       />
//       <Button
//         title="Go to Other Screen"
//         onPress={() => {
//           navigation.navigate('Setting')
//         }}
//       />
//     </View>
//   );
// };

// const OtherScreen = ({navigation}) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Other Screen</Text>
//       <Button
//         title="Go to Other Screen"
//         onPress={() => {
//           navigation.navigate('Home')
//         }}
//       />
//     </View>
//   );
// };

// const SettingScreen = ({navigation}) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Setting Screen</Text>
//       <Button
//         title="Go to Other Screen"
//         onPress={() => {
//           navigation.navigate('Home')
//         }}
//       />
//     </View>
//   );
// };

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Other" component={OtherScreen} />
//         <Stack.Screen name="Setting" component={SettingScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// 3. Passing parameters to routes
// import React, { useState } from 'react';
// import { View, Text, Button, TextInput } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const HomeScreen = ({ navigation }) => {

//   const [namaMahasiswa, setNamaMahasiswa] = useState();
//   const [nimMahasiswa, setNimMahasiswa] = useState();
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <TextInput
//         placeholder="Nama Mahasiswa"
//         onChangeText={(text) => setNamaMahasiswa(text)}
//       />
//       <TextInput
//         placeholder="NIM Mahasiswa"
//         onChangeText={(text) => setNimMahasiswa(text)}
//       />
//       <Button
//         title="Go to Other Screen"
//         onPress={() => {
//           navigation.navigate('Other', {
//             namaMahasiswa: namaMahasiswa,
//             nimMahasiswa: nimMahasiswa
//           })
//         }}
//       />
//       <Button
//         title="Go to Setting Screen"
//         onPress={() => {
//           navigation.navigate('Setting')
//         }}
//       />
//     </View>
//   );
// };

// const OtherScreen = ({ route, navigation }) => {

//   const { namaMahasiswa, nimMahasiswa } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Other Screen</Text>
//       <Text>{namaMahasiswa} | {nimMahasiswa}</Text>
//       <Button
//         title="Go to Home Screen"
//         onPress={() => {
//           navigation.navigate('Home')
//         }}
//       />
//     </View>
//   );
// };

// const SettingScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Setting Screen</Text>
//       <Button
//         title="Go to Home Screen"
//         onPress={() => {
//           navigation.navigate('Home')
//         }}
//       />
//     </View>
//   );
// };

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Other" component={OtherScreen} />
//         <Stack.Screen name="Setting" component={SettingScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// 4. Configuring the header bar
// import React, { useState } from 'react';
// import { View, Text, Button, TextInput } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const HomeScreen = ({ navigation }) => {

//   const [namaMahasiswa, setNamaMahasiswa] = useState();
//   const [nimMahasiswa, setNimMahasiswa] = useState();
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <TextInput
//         placeholder="Nama Mahasiswa"
//         onChangeText={(text) => setNamaMahasiswa(text)}
//       />
//       <TextInput
//         placeholder="NIM Mahasiswa"
//         onChangeText={(text) => setNimMahasiswa(text)}
//       />
//       <Button
//         title="Go to Other Screen"
//         onPress={() => {
//           navigation.navigate('Other', {
//             namaMahasiswa: namaMahasiswa,
//             nimMahasiswa: nimMahasiswa
//           })
//         }}
//       />
//       <Button
//         title="Go to Setting Screen"
//         onPress={() => {
//           navigation.navigate('Setting')
//         }}
//       />
//     </View>
//   );
// };

// const OtherScreen = ({ route, navigation }) => {

//   const { namaMahasiswa, nimMahasiswa } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Other Screen</Text>
//       <Text>{namaMahasiswa} | {nimMahasiswa}</Text>
//       <Button
//         title="Go to Home Screen"
//         onPress={() => {
//           navigation.navigate('Home')
//         }}
//       />
//     </View>
//   );
// };

// const SettingScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Setting Screen</Text>
//       <Button
//         title="Go to Home Screen"
//         onPress={() => {
//           navigation.navigate('Home')
//         }}
//       />
//     </View>
//   );
// };

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} options={{title: 'My Home', headerStyle:{backgroundColor: '#F4511E'}, headerTintColor: '#FFFF'}} />
//         <Stack.Screen name="Other" component={OtherScreen} options={{title: 'My Other', headerStyle:{backgroundColor: 'blue'}, headerTintColor: '#FFFF'}} />
//         <Stack.Screen name="Setting" component={SettingScreen} options={{title: 'My Setting', headerStyle:{backgroundColor: 'green'}, headerTintColor: '#FFFF'}} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// 5. Navigators lainnya
// 5.1 Navigator -> Stack Link: https://reactnavigation.org/docs/stack-navigator
// 5.2 Navigator -> Native Stack Link: https://reactnavigation.org/docs/native-stack-navigator
// 5.3 Navigator -> Drawer Link: https://reactnavigation.org/docs/drawer-navigator
// Pertama, perlu install: npm install @react-navigation/drawer
// Kedua, Perlu install: npm install react-native-gesture-handler react-native-reanimated
  // import React, { useState } from 'react';
  // import { View, Text, Button, TextInput } from 'react-native';
  // import { NavigationContainer } from '@react-navigation/native';
  // // import { createNativeStackNavigator } from '@react-navigation/native-stack';
  // import { createDrawerNavigator } from '@react-navigation/drawer';
  
  // const HomeScreen = ({ navigation }) => {
  
  //   const [namaMahasiswa, setNamaMahasiswa] = useState();
  //   const [nimMahasiswa, setNimMahasiswa] = useState();
  //   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <Text>Home Screen</Text>
  //       <TextInput
  //         placeholder="Nama Mahasiswa"
  //         onChangeText={(text) => setNamaMahasiswa(text)}
  //       />
  //       <TextInput
  //         placeholder="NIM Mahasiswa"
  //         onChangeText={(text) => setNimMahasiswa(text)}
  //       />
  //       <Button
  //         title="Go to Other Screen"
  //         onPress={() => {
  //           navigation.navigate('Other', {
  //             namaMahasiswa: namaMahasiswa,
  //             nimMahasiswa: nimMahasiswa
  //           })
  //         }}
  //       />
  //       <Button
  //         title="Go to Setting Screen"
  //         onPress={() => {
  //           navigation.navigate('Setting')
  //         }}
  //       />
  //     </View>
  //   );
  // };
  
  // const OtherScreen = ({ navigation }) => {
  
  //   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <Text>Other Screen</Text>
  //       <Button
  //         title="Go to Home Screen"
  //         onPress={() => {
  //           navigation.navigate('Home')
  //         }}
  //       />
  //     </View>
  //   );
  // };
  
  // const SettingScreen = ({ navigation }) => {
  //   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <Text>Setting Screen</Text>
  //       <Button
  //         title="Go to Home Screen"
  //         onPress={() => {
  //           navigation.navigate('Home')
  //         }}
  //       />
  //     </View>
  //   );
  // };
  
  // const Drawer = createDrawerNavigator();

  // const App = () => {
  //   return (
  //     <NavigationContainer>
  //       <Drawer.Navigator
  //       >
  //         <Drawer.Screen 
  //           name="Home" 
  //           component={HomeScreen}
  //         />
  //         <Drawer.Screen 
  //           name="Other" 
  //           component={OtherScreen}
  //         />
  //         <Drawer.Screen 
  //           name="Setting" 
  //           component={SettingScreen}
  //         />
  //       </Drawer.Navigator>
  //     </NavigationContainer>
  //   );
  // };
  
  // export default App;

// 5.4 Navigator -> Bottom Tabs Link: https://reactnavigation.org/docs/bottom-tab-navigator
// 5.5 Navigator -> Material Bottom Tabs Link: https://reactnavigation.org/docs/material-bottom-tab-navigator
//   Pertama, Install: npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// Link Github: https://github.com/oblador/react-native-vector-icons
// Tempat Icon: FontAwesome.com

const HomeScreen = ({ navigation }) => {

  const [namaMahasiswa, setNamaMahasiswa] = useState();
  const [nimMahasiswa, setNimMahasiswa] = useState();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TextInput
        placeholder="Nama Mahasiswa"
        onChangeText={(text) => setNamaMahasiswa(text)}
      />
      <TextInput
        placeholder="NIM Mahasiswa"
        onChangeText={(text) => setNimMahasiswa(text)}
      />
      <Button
        title="Go to Other Screen"
        onPress={() => {
          navigation.navigate('Other', {
            namaMahasiswa: namaMahasiswa,
            nimMahasiswa: nimMahasiswa
          })
        }}
      />
      <Button
        title="Go to Setting Screen"
        onPress={() => {
          navigation.navigate('Setting')
        }}
      />
    </View>
  );
};

const OtherScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Other Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => {
          navigation.navigate('Home')
        }}
      />
    </View>
  );
};

const SettingScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setting Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => {
          navigation.navigate('Home')
        }}
      />
    </View>
  );
};

// const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#F0EDF6"
        inactiveColor="#3E2465"
        barStyle={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Homes',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Other" 
          component={OtherScreen}
          options={{
            tabBarLabel: 'Others',
            tabBarIcon: ({ color }) => (
              <Icon name="cog" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Setting" 
          component={SettingScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <Icon name="align-justify" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

// 5.6 Navigator -> Material Top Tabs Link: https://reactnavigation.org/docs/material-top-tab-navigator