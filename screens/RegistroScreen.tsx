import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/FirebaseConfig'



export default function RegistroScreen({navigation}: any) {

  const [correo, setCorreo] = useState("")
  const [contrasenia, setContrasenia] = useState("")
  const [edad, setEdad] = useState(0)
  const [nick, setNick] = useState("")

  function registro() {
      createUserWithEmailAndPassword(auth, correo, contrasenia)
        .then((userCredential) => {
          // Signed-up
          const user = userCredential.user;
          navigation.navigate("Login");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          Alert.alert(errorCode, errorMessage)
        });
    
  }

  


  return (
    <View style={globalStyles.contenedor}>
      <Text>Registrate</Text>

      <TextInput placeholder="Ingrese su correo"
        style={globalStyles.input}
        onChangeText={setCorreo} />

      <TextInput placeholder="Ingrese su Nick"
        style={globalStyles.input}
        onChangeText={setNick} />

      <TextInput placeholder="Ingrese su edad"
        style={globalStyles.input}
        onChangeText={(texto) => setEdad(+texto)} />

      <TextInput placeholder="Ingrese la contraseña"
        style={globalStyles.input}
        onChangeText={setContrasenia} />

      <Button title='Registro'  
        color={'green'}
        onPress={registro}>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})