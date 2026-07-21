import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/GlobalStyles'



export default function PerfilScreen() {

const [correo, setCorreo] = useState("")
const [contrasenia, setContrasenia] = useState("")
const [edad, setEdad] = useState(0)
const [nick, setNick] = useState("")


  return (
    <View>
      <Text>LOGIN</Text>

      <TextInput placeholder="Ingrese su correo"
        style={globalStyles.input} 
        onChangeText={setCorreo}/>

        <TextInput placeholder="Ingrese su Nick"
        style={globalStyles.input} 
        onChangeText={setNick}/>

        <TextInput placeholder="Ingrese su edad"
        style={globalStyles.input} 
        onChangeText={(texto)=>setEdad(+texto)}/>

      <TextInput placeholder="Ingrese la contraseña"
        style={globalStyles.input} 
        onChangeText={setContrasenia}/>

        <Button title='Registro'
        color={'green'}>
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({})