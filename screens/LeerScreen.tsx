import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/FirebaseConfig';
import { getDatabase, onValue, ref } from 'firebase/database';

export default function LeerScreen() {


  const [usuario, setUsuario] = useState({})

  type Usuario= {
    nick: string,
    correo:string,

  }

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

  return (
    <View>
      <Text>{usuario.nick}</Text>
      <Text>{usuario.correo}</Text>
      <Text>{usuario.edad}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})


