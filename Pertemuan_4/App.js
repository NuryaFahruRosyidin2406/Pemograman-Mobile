/*import React, {useState} from 'react'
import { View, Text, Button, TextInput} from 'react-native'

const App = () => {
  const [bilangan1, setBilangan1] = useState()
  const [bilangan2, setBilangan2] = useState()
  return (
    <View>
      <Text>Hello World</Text>
      <Cat name="Kucing 1 " usia="1"/>
      <Cat name="Kucing 11" usia="2"/>
      <Cat name="Kucing 111" usia="3"/>
      <TextInput
      placeholder="Bilangan 2"
      onChangeText={(text) => {setBilangan1(text)}}
      />
      <TextInput
      placeholder="Bilangan 1"
      onChangeText={(text) => {setBilangan2(text)}}
      />
      <Button
      title="Tampilkan Hasil Penjumlahan Bilangan"
      onPress={() => {
        alert(parseInt(bilangan1)+parseInt(bilangan2))
      }}
      />
      <Button
      title="Tampilkan Hasil Pengurangan Bilangan"
      onPress={() => {
        alert(parseInt(bilangan1)-parseInt(bilangan2))
      }}
      />
      <Button
      title="Tampilkan Hasil Perkalian Bilangan"
      onPress={() => {
        alert(parseInt(bilangan1)*parseInt(bilangan2))
      }}
      />
      <Button
      title="Tampilkan Hasil Pembagian Bilangan"
      onPress={() => {
        alert(parseInt(bilangan1)/parseInt(bilangan2))
      }}
      />
    </View>
  )
}

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState("Lapar")
  return (
    <>
    <Text>Saya Kucing, Nama Saya {props.name}, Saya {isHungry}</Text>
    <Button
    title="Beri Makan Kucing"
    onPress={()=>{
      setIsHungry("Kenyang")
    }}
    />
    </>
  )
}

export default App;*/

import React from 'react';
import { Text, View } from 'react-native';       //perlu ada penambahan View di import

const Cat = () => {
  const name = "Maru";
  return (
    <View>                             //dengan penambahan bracket pada hasil keluarannya
    <Text>I'm a Cat!</Text>
    <Text>Hello, I am {name}!</Text>
    </View>
  );

}

export default Cat;

