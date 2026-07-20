import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/FirebaseConfig'



export default function LoginScreen({ navigation }: any) {

  const [correo, setCorreo] = useState("")
  const [contrasenia, setContrasenia] = useState("")

  function login() {

    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigation.navigate('MyDrawer')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
      });

  }

  return (
    <View>
      <Text>LOGIN</Text>

      <TextInput placeholder="Ingrese su correo"
        style={globalStyles.input}
        onChangeText={setCorreo} />

      <TextInput placeholder="Ingrese la contraseña"
        style={globalStyles.input}
        onChangeText={setContrasenia} />

      <Button title='Login'
      onPress={login}/>
      

      <Text onPress={() => navigation.navigate("Registro")}>
        No tienes cuenta? Registrate aqui!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})