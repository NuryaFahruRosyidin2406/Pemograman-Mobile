{/*React Native Event Listener
Masuk Ke Halaman https://reactnative.dev/docs/getting-started pilih Interaction
React Native Gesture Handler tambahan https://docs.swmansion.com/react-native-gesture-handler/docs/
1. Handling Touches
1.1 Displaying a basic button*/}
// import React from 'react';
// import { Text, View, Button, StyleSheet} from 'react-native';

// const ButtonBasics = () => {
//   return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             title="1. Press Me"
//             onPress={()=>
//               alert('You tapped the button!')}
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             title="2. Press Me"
//             color="#841584"
//             onPress={()=>
//               alert('You tapped the button!')}
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button
//             title="3. This looks great!"
//             onPress={()=>
//               alert('You tapped the button!')}
//           />
//           <Button
//             title="OK!"
//             color="#841584"
//             onPress={()=>
//               alert('You tapped the button!')}
//           />
//         </View>
//       </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// });

// export default ButtonBasics;

// {/*1.2 Touchables*/}
// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

// export default class Touchables extends Component {
//   _onPressButton() {
//     alert('You tapped the button!')
//   }

//   _onLongPressButton() {
//     alert('You long-pressed the button!')
//   }


//   render() {
//     return (
//       <View style={styles.container}>
//         {/* Touchable Highlight */}
//         <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableHighlight</Text>
//           </View>
//         </TouchableHighlight>

//         {/* Touchable Opacity */}
//         <TouchableOpacity onPress={this._onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableOpacity</Text>
//           </View>
//         </TouchableOpacity>

//         {/* Touchable Native Feedback */}
//         <TouchableNativeFeedback
//             onPress={this._onPressButton}
//             background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
//           </View>
//         </TouchableNativeFeedback>

//         {/* Touchable Without Feedback */}
//         <TouchableWithoutFeedback
//             onPress={this._onPressButton}
//             >
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//           </View>
//         </TouchableWithoutFeedback>

//         {/* Touchable Delay Long Press */}
//         <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Touchable with Long Press</Text>
//           </View>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     alignItems: 'center'
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     textAlign: 'center',
//     padding: 20,
//     color: 'white'
//   }
// });

// 2. Using a ScrollView
// import React from 'react';
// import { Image, ScrollView, Text, View } from 'react-native';

// const logo = {
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   width: 64,
//   height: 64
// };

// const App = () => (
//   <ScrollView>
//     <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 96 }}>If you like</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 96 }}>Scrolling down</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 96 }}>What's the best</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 96 }}>Framework around?</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 80 }}>React Native</Text>
//   </ScrollView>
// );

// export default App;

// 3. Using List View
// 3.1 FlatList Basics
// import React from 'react';
// import { FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//     marginBottom: 4,
//     backgroundColor: 'blue',
//     color: 'white',
//     textAlign: 'center',
//     fontWeight: 'bold'
//   },
// });

// const FlatListBasics = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={[
//           {key: 'Devin'},
//           {key: 'Dan'},
//           {key: 'Dominic'},
//           {key: 'Jackson'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//         ]}
//         renderItem={({item}) => {
//             return (
//             <TouchableHighlight onPress={()=>{ alert(item.key) }}>
//                 <Text style={styles.item}>{item.key}</Text>
//             </TouchableHighlight>
//             )}}
//       />
//     </View>
//   );
// }

// export default FlatListBasics;

// 3.2 Section List ButtonBasic
// import React from 'react';
// import { SectionList, StyleSheet, Text, View } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })

// const SectionListBasics = () => {
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={[
//             {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
//             {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     );
// }

// export default SectionListBasics;

// 4. Conditional Rendering
import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, TouchableHighlight, View, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
  flex: 1,
  paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    marginBottom: 4,
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

const FlatListBasics = () => {
  const [page, setPage] = useState('home');
  
  if(page === 'home') {
    return (
      <View>
        <Text>Ini Halaman Home</Text>
          <Button
            onPress={() => 
              setPage('list')}
              title="Pindah Ke Halaman List"
          />
      </View>
    );
  }
  else{
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
        renderItem={({item}) => {
          return (
            <TouchableHighlight onPress={()=>{ alert(item.key) }}>
              <Text style={styles.item}>{item.key}</Text>
            </TouchableHighlight>
          )}}
        />
        <Button
          onPress={() => 
            setPage('home')}
            title="Pindah Ke Halaman Home"
        />
      </View>
    );
  }
}

export default FlatListBasics;

// 5. React Context & Redux
// Link pembelajaran Context: https://reactjs.org/docs/context.html
// Link pembelajaran Redux: https://react-redux.js.org/tutorials/quick-start