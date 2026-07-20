import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    contenedor: {
        flex: 1,
        padding: 20,
        
    },


    contenedorLista: {
        flex: 1,
        padding: 20,
        margin: 3,
        backgroundColor: "#4071db"
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 16,
    },

    texto: {
        fontSize: 16,
        margin: 2,
        fontWeight: 500,
    },

    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        backgroundColor: '#ffffff',
        fontSize: 16,
    },

    boton: {
        backgroundColor: '##72bbff',
        padding: 14,
        borderRadius: 8,
        margin: 10,
        alignItems: 'center',
    },

    tarjetaCanciones: {
        backgroundColor: '#bc6aff',
        padding: 15,
        marginBottom: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000000',
        
    },

    textocanciones: {
        fontSize: 16,
        margin: 8,
        color: 'white',
        fontWeight: 500,
    },





})