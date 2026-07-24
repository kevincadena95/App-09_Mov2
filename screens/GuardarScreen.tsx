import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, set } from 'firebase/database';
import { db } from '../firebase/FirebaseConfig';
import { globalStyles } from '../styles/GlobalStyles';


export default function GuardarScreen() {
  
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [genero, setGenero] = useState("");
  const [fechaEstreno, setFechaEstreno] = useState("");
  const [duracion, setDuracion] = useState(0);
  const [descripcion, setDescripcion] = useState("");

  function guardarPelicula() {
    set(ref(db, "peliculas/" + id), {
      id: id,
      nombre: nombre,
      genero: genero,
      fechaEstreno: fechaEstreno,
      duracion: duracion,
      descripcion: descripcion,
    });

    Alert.alert("Película Ingresada");
  }

  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titulo}>Guardar película</Text>

      <TextInput
        placeholder="Ingresar el ID de la película"
        style={globalStyles.input}
        onChangeText={(texto) => setId(texto)}
        value={id}
      />

      <TextInput
        placeholder="Ingresar el nombre de la película"
        style={globalStyles.input}
        onChangeText={(texto) => setNombre(texto)}
        value={nombre}
      />

      <TextInput
        placeholder="Ingresar el género de la película"
        style={globalStyles.input}
        onChangeText={(texto) => setGenero(texto)}
        value={genero}
      />

      <TextInput
        placeholder="Ingresar la fecha de estreno"
        style={globalStyles.input}
        onChangeText={(texto) => setFechaEstreno(texto)}
        value={fechaEstreno}
      />

      <TextInput
        placeholder="Ingresar la duración en minutos"
        style={globalStyles.input}
        keyboardType="numeric"
        onChangeText={(texto) => setDuracion(+texto)}
        value={duracion.toString()}
      />

      <TextInput
        placeholder="Ingresar la descripción de la película"
        style={globalStyles.input}
        onChangeText={(texto) => setDescripcion(texto)}
        value={descripcion}
        multiline
      />

      <Button title="Guardar" onPress={() => guardarPelicula()} />
    </View>
  );
}

const styles = StyleSheet.create({});