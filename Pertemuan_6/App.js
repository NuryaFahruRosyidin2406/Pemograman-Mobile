// 1. React Native Styling Basic (CSS)
// Link Pembelajaran CSS: https://www.w3schools.com/css/default.asp

// 2. StyleSheet.create
// 2.1 Style
// 2.1.1 Cara Pertama tanpa export import
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// const LotsOfStyles = () => {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigBlue}>just bigBlue</Text>
//         <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
//         <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
//       </View>
//     );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//   },
//   bigBlue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });

// export default LotsOfStyles;

// 2.1.2 Cara Kedua dengan export import
// cara ini menggunakan export dan import dari file './src/styles/style'
import React from 'react';
import { Text, View } from 'react-native';
import styles from './src/styles/style';

const LotsOfStyles = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
    );
};

export default LotsOfStyles;