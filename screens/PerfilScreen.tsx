import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import { getDatabase, onValue, ref } from 'firebase/database';



export default function PerfilScreen() {

  const [usuario, setUsuario] = useState({})


  useEffect(() => {
    leerUsuario("hON8mq4TAPYbP5KSxpyCBXsHSrk1")
  }, [])


  function leerUsuario(uid: string) {
    const db = getDatabase();
    const starCountRef = ref(db, 'usuarios/' + uid);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setUsuario(data)
    });

  }


  return (
    <View>
      <Text>LeerScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})