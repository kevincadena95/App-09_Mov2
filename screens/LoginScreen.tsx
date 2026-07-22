import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
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
        console.log(errorCode);

        switch (errorCode) {
          case "auth/invalid-email":
            Alert.alert("Correo invalido", "Verificar el campo de correo")
            break;
          case "auth/missing-password":
            Alert.alert("Contraseña invalida", "Verificar el campo de contraseña")
            break;
          case "auth/invalid-credential":
            Alert.alert("Correo o contraseña incorrectos", "Verificar los campos")
            break;
          default:
            Alert.alert("Error", "Verificar Credenciales")
        }

      });

  }


  function restablecerContrasenia() {
    sendPasswordResetEmail(auth, correo)
      .then(() => {
        // Password reset email sent!
        // ..
        Alert.alert("Mensaje", "Se envio un mensaje a tu correo")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        
      });
  }

  return (
    <View style={globalStyles.contenedor}>
      <Text>LOGIN</Text>

      <TextInput placeholder="Ingrese su correo"
        style={globalStyles.input}
        onChangeText={setCorreo} />

      <TextInput placeholder="Ingrese la contraseña"
        style={globalStyles.input}
        onChangeText={setContrasenia} />

      <Button title='Login'
        onPress={login} />


      <Text onPress={() => navigation.navigate("Registro")}>
        No tienes cuenta? Registrate aqui!
      </Text>


      <Button
        title='Olvidaste la contraseña?' 
        onPress={restablecerContrasenia}/>
        
    </View>
  )
}

const styles = StyleSheet.create({})