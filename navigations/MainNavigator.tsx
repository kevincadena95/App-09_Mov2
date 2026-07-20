import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import PerfilScreen from '../screens/PerfilScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LeerScreen from '../screens/LeerScreen';
import GuardarScreen from '../screens/GuardarScreen';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registro" component={RegistroScreen} />
            <Stack.Screen name="MyDrawer" component={MyDrawer} />
        </Stack.Navigator>
    );
}


function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Registro" component={RegistroScreen} />
            <Drawer.Screen name="Perfil" component={PerfilScreen} />
            <Drawer.Screen name="Leer" component={LeerScreen} />
            <Drawer.Screen name="Guardar" component={GuardarScreen} />
        </Drawer.Navigator>
    );
}


export function Navegador() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}