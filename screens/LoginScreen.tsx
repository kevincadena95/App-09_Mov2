import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/GlobalStyles'



export default function LoginScreen({navigation}: any) {

const [correo, setCorreo] = useState("")
const [contrasenia, setContrasenia] = useState("")

  return (
    <View>
      <Text>LOGIN</Text>

      <TextInput placeholder="Ingrese su correo"
        style={globalStyles.input} 
        onChangeText={setCorreo}/>

      <TextInput placeholder="Ingrese la contraseña"
        style={globalStyles.input} 
        onChangeText={setContrasenia}/>

        <Button title='Login'>
        </Button>

        <Text onPress={()=>navigation.navigate("Registro")}>
          No tienes cuenta? Registrate aqui!
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({})