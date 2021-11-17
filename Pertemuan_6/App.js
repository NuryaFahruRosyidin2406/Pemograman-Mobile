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
// import React from 'react';
// import { Text, View } from 'react-native';
// import styles from './src/styles/style';

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

// export default LotsOfStyles;

// 3. Inline StyleSheet
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// const LotsOfStyles = () => {
//     return (
//       <View style={{marginTop: 50}}>
//         <Text style={{color: 'red'}}>1. just red</Text>
//         <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 30}}>just bigBlue</Text>
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

// 4. Height & Width
//4.1 Fixed Dimentions
// import React from 'react';
// import { View } from 'react-native';

// const FixedDimensionsBasics = () => {
//   return (
//     <View>
//       <View style={{
//         width: 50, height: 50, backgroundColor: 'powderblue'
//       }} />
//       <View style={{
//         width: 100, height: 100, backgroundColor: 'skyblue'
//       }} />
//       <View style={{
//         width: 150, height: 150, backgroundColor: 'steelblue'
//       }} />
//     </View>
//   );
// };

// export default FixedDimensionsBasics;

//4.2 Flex Dimentions
// import React from 'react';
// import { View } from 'react-native';

// const FlexDimensionsBasics = () => {
//   return (
//     // Try removing the `flex: 1` on the parent View.
//     // The parent will not have dimensions, so the children can't expand.
//     // What if you add `height: 300` instead of `flex: 1`?
//     <View style={{ flex: 1}}>
//       <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
//       <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
//       <View style={{ flex: 3, backgroundColor: 'steelblue' }}>
//         <View style={{ flex: 1, backgroundColor: 'yellow' }} />
//         <View style={{ flex: 1, backgroundColor: 'green' }} />
//       </View>
//     </View>
//   );
// };

// export default FlexDimensionsBasics;

//4.3 Percentage Dimentions
// import React from 'react';
// import { View } from 'react-native';

// const PercentageDimensionsBasics = () => {
//   // Try removing the `height: '100%'` on the parent View.
//   // The parent will not have dimensions, so the children can't expand.
//   return (
//     <View style={{ height: '100%' }}>
//       <View style={{
//         height: '15%', backgroundColor: 'powderblue'
//       }} />
//       <View style={{
//         width: '66%', height: '35%', backgroundColor: 'skyblue'
//       }} />
//       <View style={{
//         width: '33%', height: '50%', backgroundColor: 'steelblue'
//       }} />
//     </View>
//   );
// };

// export default PercentageDimensionsBasics; 

// 5. Layouting Menggunakan Flexbox yang responsif
// 5.1 Flex
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// const Flex = () => {
//   return (
//     <View style={[styles.container, {
//       // Try setting `flexDirection` to `"row"`.
//       flexDirection: "column"
//     }]}>
//       <View style={{ flex: 1, backgroundColor: "red" }} />
//       <View style={{ flex: 2, backgroundColor: "darkorange" }} />
//       <View style={{ flex: 3, backgroundColor: "green" }} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
// });

// export default Flex;

// 5.2 Flex Direction
// import React, { useState } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// const FlexDirectionBasics = () => {
//   const [flexDirection, setflexDirection] = useState("column");

//   return (
//     <PreviewLayout
//       label="flexDirection"
//       values={["column", "row", "row-reverse", "column-reverse"]}
//       selectedValue={flexDirection}
//       setSelectedValue={setflexDirection}
//     >
//       <View
//         style={[styles.box, { backgroundColor: "powderblue" }]}
//       />
//       <View
//         style={[styles.box, { backgroundColor: "skyblue" }]}
//       />
//       <View
//         style={[styles.box, { backgroundColor: "steelblue" }]}
//       />
//     </PreviewLayout>
//   );
// };

// const PreviewLayout = ({
//   label,
//   children,
//   values,
//   selectedValue,
//   setSelectedValue,
// }) => (
//   <View style={{ padding: 10, flex: 1 }}>
//     <Text style={styles.label}>{label}</Text>
//     <View style={styles.row}>
//       {values.map((value) => (
//         <TouchableOpacity
//           key={value}
//           onPress={() => setSelectedValue(value)}
//           style={[
//             styles.button,
//             selectedValue === value && styles.selected,
//           ]}
//         >
//           <Text
//             style={[
//               styles.buttonLabel,
//               selectedValue === value && styles.selectedLabel,
//             ]}
//           >
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <View style={[styles.container, { [label]: selectedValue }]}>
//       {children}
//     </View>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: "aliceblue",
//   },
//   box: {
//     width: 50,
//     height: 50,
//   },
//   row: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   button: {
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 4,
//     backgroundColor: "oldlace",
//     alignSelf: "flex-start",
//     marginHorizontal: "1%",
//     marginBottom: 6,
//     minWidth: "48%",
//     textAlign: "center",
//   },
//   selected: {
//     backgroundColor: "coral",
//     borderWidth: 0,
//   },
//   buttonLabel: {
//     fontSize: 12,
//     fontWeight: "500",
//     color: "coral",
//   },
//   selectedLabel: {
//     color: "white",
//   },
//   label: {
//     textAlign: "center",
//     marginBottom: 10,
//     fontSize: 24,
//   },
// });

// export default FlexDirectionBasics;

// 5.3 Layout Direction
// import React, { useState } from "react";
// import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

// const DirectionLayout = () => {
//   const [direction, setDirection] = useState("ltr");

//   return (
//     <PreviewLayout
//       label="direction"
//       selectedValue={direction}
//       values={["ltr", "rtl"]}
//       setSelectedValue={setDirection}>
//       <View
//         style={[styles.box, { backgroundColor: "powderblue" }]}
//       />
//       <View
//         style={[styles.box, { backgroundColor: "skyblue" }]}
//       />
//       <View
//         style={[styles.box, { backgroundColor: "steelblue" }]}
//       />
//     </PreviewLayout>
//   );
// };

// const PreviewLayout = ({
//   label,
//   children,
//   values,
//   selectedValue,
//   setSelectedValue,
// }) => (
//   <View style={{ padding: 10, flex: 1 }}>
//     <Text style={styles.label}>{label}</Text>
//     <View style={styles.row}>
//       {values.map((value) => (
//         <TouchableOpacity
//           key={value}
//           onPress={() => setSelectedValue(value)}
//           style={[
//             styles.button,
//             selectedValue === value && styles.selected,
//           ]}
//         >
//           <Text
//             style={[
//               styles.buttonLabel,
//               selectedValue === value && styles.selectedLabel,
//             ]}
//           >
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <View style={[styles.container, { [label]: selectedValue }]}>
//       {children}
//     </View>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: "aliceblue",
//   },
//   box: {
//     width: 50,
//     height: 50,
//   },
//   row: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   button: {
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 4,
//     backgroundColor: "oldlace",
//     alignSelf: "flex-start",
//     marginHorizontal: "1%",
//     marginBottom: 6,
//     minWidth: "48%",
//     textAlign: "center",
//   },
//   selected: {
//     backgroundColor: "coral",
//     borderWidth: 0,
//   },
//   buttonLabel: {
//     fontSize: 12,
//     fontWeight: "500",
//     color: "coral",
//   },
//   selectedLabel: {
//     color: "white",
//   },
//   label: {
//     textAlign: "center",
//     marginBottom: 10,
//     fontSize: 24,
//   },
// });

// export default DirectionLayout;

// 5.4 Justify Content ini untuk x axix
// import React, { useState } from "react";
// import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

// const JustifyContentBasics = () => {
//   const [justifyContent, setJustifyContent] = useState("flex-start");

//   return (
//     <PreviewLayout
//       label="justifyContent"
//       selectedValue={justifyContent}
//       values={[
//         "flex-start",
//         "flex-end",
//         "center",
//         "space-between",
//         "space-around",
//         "space-evenly",
//       ]}
//       setSelectedValue={setJustifyContent}
//     >
//       <View
//         style={[styles.box, { backgroundColor: "powderblue" }]}
//       />
//       <View
//         style={[styles.box, { backgroundColor: "skyblue" }]}
//       />
//       <View
//         style={[styles.box, { backgroundColor: "steelblue" }]}
//       />
//     </PreviewLayout>
//   );
// };

// const PreviewLayout = ({
//   label,
//   children,
//   values,
//   selectedValue,
//   setSelectedValue,
// }) => (
//   <View style={{ padding: 10, flex: 1 }}>
//     <Text style={styles.label}>{label}</Text>
//     <View style={styles.row}>
//       {values.map((value) => (
//         <TouchableOpacity
//           key={value}
//           onPress={() => setSelectedValue(value)}
//           style={[styles.button, selectedValue === value && styles.selected]}
//         >
//           <Text
//             style={[
//               styles.buttonLabel,
//               selectedValue === value && styles.selectedLabel,
//             ]}
//           >
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <View style={[styles.container, { [label]: selectedValue }]}>
//       {children}
//     </View>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: "aliceblue",
//   },
//   box: {
//     width: 50,
//     height: 50,
//   },
//   row: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   button: {
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 4,
//     backgroundColor: "oldlace",
//     alignSelf: "flex-start",
//     marginHorizontal: "1%",
//     marginBottom: 6,
//     minWidth: "48%",
//     textAlign: "center",
//   },
//   selected: {
//     backgroundColor: "coral",
//     borderWidth: 0,
//   },
//   buttonLabel: {
//     fontSize: 12,
//     fontWeight: "500",
//     color: "coral",
//   },
//   selectedLabel: {
//     color: "white",
//   },
//   label: {
//     textAlign: "center",
//     marginBottom: 10,
//     fontSize: 24,
//   },
// });

// export default JustifyContentBasics;

// contoh mudah
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// const Flex = () => {
//   return (
//     <View style={[styles.container, {
//       // Try setting `flexDirection` to `"row" or "column"`.
//       flexDirection: "column",
//       // justifyContent: 'flex-start',
//       // justifyContent: 'flex-end',
//       // justifyContent: 'center',
//       justifyContent: 'space-between',
//       // justifyContent: 'space-around',
//       // justifyContent: 'space-evenly'
//     }]}>
//       <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
//       <View style={{ width: 50, height: 50, backgroundColor: "darkorange" }} />
//       <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
// });

// export default Flex;

// 5.5 Align Items ini untuk cross axis
// ini yang contoh alignItems
// import React, { useState } from "react";
// import {
//   View,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
// } from "react-native";

// const AlignItemsLayout = () => {
//   const [alignItems, setAlignItems] = useState("stretch");

//   return (
//     <PreviewLayout
//       label="alignItems"
//       selectedValue={alignItems}
//       values={[
//         "stretch",
//         "flex-start",
//         "flex-end",
//         "center",
//         "baseline",
//       ]}
//       setSelectedValue={setAlignItems}
//     >
//       <View
//         style={[styles.box, { backgroundColor: "powderblue" }]}
//       />
//       <View
//         style={[styles.box, { backgroundColor: "skyblue" }]}
//       />
//       <View
//         style={[
//           styles.box,
//           {
//             backgroundColor: "steelblue",
//             width: "auto",
//             minWidth: 50,
//           },
//         ]}
//       />
//     </PreviewLayout>
//   );
// };

// const PreviewLayout = ({
//   label,
//   children,
//   values,
//   selectedValue,
//   setSelectedValue,
// }) => (
//   <View style={{ padding: 10, flex: 1 }}>
//     <Text style={styles.label}>{label}</Text>
//     <View style={styles.row}>
//       {values.map((value) => (
//         <TouchableOpacity
//           key={value}
//           onPress={() => setSelectedValue(value)}
//           style={[
//             styles.button,
//             selectedValue === value && styles.selected,
//           ]}
//         >
//           <Text
//             style={[
//               styles.buttonLabel,
//               selectedValue === value &&
//                 styles.selectedLabel,
//             ]}
//           >
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <View
//       style={[
//         styles.container,
//         { [label]: selectedValue },
//       ]}
//     >
//       {children}
//     </View>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: "aliceblue",
//     minHeight: 200,
//   },
//   box: {
//     width: 50,
//     height: 50,
//   },
//   row: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   button: {
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 4,
//     backgroundColor: "oldlace",
//     alignSelf: "flex-start",
//     marginHorizontal: "1%",
//     marginBottom: 6,
//     minWidth: "48%",
//     textAlign: "center",
//   },
//   selected: {
//     backgroundColor: "coral",
//     borderWidth: 0,
//   },
//   buttonLabel: {
//     fontSize: 12,
//     fontWeight: "500",
//     color: "coral",
//   },
//   selectedLabel: {
//     color: "white",
//   },
//   label: {
//     textAlign: "center",
//     marginBottom: 10,
//     fontSize: 24,
//   },
// });

// export default AlignItemsLayout;

// contoh mudah
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// const Flex = () => {
//   return (
//     <View style={[styles.container, {
//       // Try setting `flexDirection` to `"row" or "column"`.
//       flexDirection: "column",
//       // justifyContent: 'flex-start',
//       // justifyContent: 'flex-end',
//       justifyContent: 'center',
//       // justifyContent: 'space-between',
//       // justifyContent: 'space-around',
//       // justifyContent: 'space-evenly'
//       alignItems: 'stretch',
//       // alignItems: 'flex-start',
//       // alignItems: 'flex-end',
//       // alignItems: 'center',
//       // alignItems: 'baseline'
//     }]}>
//       <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
//       <View style={{ width: 50, height: 50, backgroundColor: "darkorange" }} />
//       <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
// });

// export default Flex;

// 6. Menampilkan images
// bisa lihat di link : https://reactnative.dev/docs/images
// 6.1 Static Image Resource
// contohnya
// <Image source={require('./my-icon.png')}/>

// 6.2 Network Images
// // GOOD
// <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
//        style={{width: 400, height: 400}} />

// // BAD
// <Image source={{uri: 'https://reactjs.org/logo-og.png'}} />

// 7. TextInput Styling
// import React, { useState } from 'react';
// import { Text, TextInput, View } from 'react-native';

// const PizzaTranslator = () => {
//   const [text, setText] = useState('');
//   return (
//     <View style={{padding: 10}}>
//       <TextInput
//         style={{borderWidth: 1, borderColor: '#C3C3C3', padding: 8, borderRadius: 8, }}
//         placeholder="Nama Anda"
//         onChangeText={text => setText(text)}
//         defaultValue={text}
//       />
//       <Text style={{padding: 10, fontSize: 42}}>
//         {text.split(' ').map((word) => word && '🍕').join(' ')}
//       </Text>
//     </View>
//   );
// }

// export default PizzaTranslator;

// 8. Android Style Guide (Material Desain)
// tambah pemahaman di link ini: https://material.io/components?platform=android