import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import { getDatabase, onValue, ref, update } from 'firebase/database';
import { auth, db } from '../firebase/FirebaseConfig';

export default function PerfilScreen() {

  const [correo, setCorreo] = useState("");
  const [nick, setNick] = useState("");
  const [edad, setEdad] = useState(0);

  function leerUsuario() {
    const usuarioAutenticado = auth.currentUser;

    if (!usuarioAutenticado) {
      Alert.alert("Error", "No existe una sesión iniciada");
      return;
    }

    const usuarioRef = ref(db, "usuarios/" + usuarioAutenticado.uid);

    onValue(usuarioRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        setCorreo(data.correo);
        setNick(data.nick);
        setEdad(data.edad);
      }
    });
  }

  useEffect(() => {
    leerUsuario();
  }, []);

  async function editarUsuario() {
    const usuarioAutenticado = auth.currentUser;

    if (!usuarioAutenticado) {
      Alert.alert("Error", "No existe una sesión iniciada");
      return;
    }

    try {
      await update(
        ref(db, "usuarios/" + usuarioAutenticado.uid),
        {
          correo: correo,
          nick: nick,
          edad: edad
        }
      );

      Alert.alert("Usuario editado");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  }

  return (
    <View style={globalStyles.contenedor}>

      <Text style={globalStyles.titulo}>Editar perfil</Text>
      
      <Text style={globalStyles.texto}>Ingrese el CORREO de la cuenta que se quiere EDITAR</Text>
      <TextInput
        placeholder="Ingresar CORREO"
        style={globalStyles.input}
        onChangeText={(texto) => setCorreo(texto)}
        value={correo}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <Text style={globalStyles.texto}>Campos a EDITAR: </Text>
      <TextInput
        placeholder="Ingresar NICK"
        style={globalStyles.input}
        onChangeText={(texto) => setNick(texto)}
        value={nick}
      />

      <TextInput
        placeholder="Ingresar EDAD"
        style={globalStyles.input}
        onChangeText={(texto) => setEdad(+texto)}
        value={edad.toString()}
        keyboardType="numeric"
      />

      <Button
        title="Guardar cambios"
        color="green"
        onPress={() => editarUsuario()}
      />
    </View>
  );
}

const styles = StyleSheet.create({});