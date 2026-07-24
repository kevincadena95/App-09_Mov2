import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/FirebaseConfig';
import { getDatabase, onValue, ref } from 'firebase/database';
import { Usuario } from '../types/tipos';
import { globalStyles } from '../styles/GlobalStyles';

export default function LeerScreen({ navigation }: any) {


  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        leerUsuario(uid);

      } else {
        // User is signed out
        // ...
      }
    });

  }, [])

  function leerUsuario(uid: string) {
    const db = getDatabase();
    const starCountRef = ref(db, 'usuarios/' + uid);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setUsuario(data)
    });

  }

  async function cerrarSesion() {
    try {
      await signOut(auth);

      Alert.alert("Sesión cerrada", "La sesión se cerró correctamente");

      navigation.navigate("Login");
    } catch (error: any) {
      Alert.alert("Error", error.message);

    }
  }

  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titulo}>Datos del usuario</Text>

      {usuario ? (
        <View style={globalStyles.contenedorLista}>
          <Text style={globalStyles.texto}>Nick: {usuario.nick}</Text>

          <Text style={globalStyles.texto}>
            Correo: {usuario.correo}
          </Text>

          <Text style={globalStyles.texto}>
            Edad: {usuario.edad}
          </Text>
        </View>
      ) : (
        <Text style={globalStyles.texto}>
          No se encontraron datos del usuario
        </Text>
      )}

      <Button title="Cerrar sesión" 
      color="red"
      onPress={cerrarSesion} />
    </View>
  );
}

const styles = StyleSheet.create({})


