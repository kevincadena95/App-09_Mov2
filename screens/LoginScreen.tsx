import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
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
        console.log(errorCode);

        if (errorCode == "auth/invalid-email") {
          Alert.alert("Correo invalido", "Verificar el campo de correo")
        } else if (errorCode == "auth/missing-password") {
          Alert.alert("Contraseña invalida", "Verificar el campo de contraseña")
        } else if (errorCode == " auth/invalid-credential") {
          Alert.alert("Correo o contraseña incorrectos", "Verificar los campos")
        }
        else {
          Alert.alert("Error", "Verificar Credenciales")
        }

        switch (errorCode) {
          case "auth/invalid-email":
            alert("Error 400: La solicitud enviada es incorrecta.");
            break;
          case "auth/missing-password":
            alert("Error 401: No estás autorizado para ver este contenido.");
            break;
          case "auth/invalid-credential":
            alert("Error 403: Acceso denegado. No tienes permisos.");
            break;
          case 404:
            alert("Error 404: La página que buscas no existe.");
            break;
          case 500:
            alert("Error 500: Error interno del servidor. Intenta más tarde.");
            break;
          default:
            alert("Error, Verificar Credenciales");
        }

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
    </View>
  )
}

const styles = StyleSheet.create({})