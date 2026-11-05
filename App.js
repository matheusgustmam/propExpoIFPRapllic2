import { Drawer, PaperProvider } from "react-native-paper";
import PageContador from "./SRC/pages/PageContador"
import PageTarefas from "./SRC/pages/PageTarefas";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./SRC/componets/DrawerNaviogator";
import { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./SRC/store";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-init";
import { setUsuarioLogado } from "./SRC/slices/usuarioSlice";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  const dispatch = useDispatch()
  const usuarioLogado = useSelector((state) => state.usuarioLogado?.usuarioLogado)
  

  async function registerOnAuthStateChange() {
    OnAuthStateChange(auth, (usuario) => {
      if(usuario && usuario.emailVerified){
        const usuarioBusaca = buscarUsuario(usuario.uid)
        dispatch(setUsuarioLogado(usuarioBusca))}}
  }
  
  useEffect(() =>
    registerOnAuthStateChange()
  ), []}

  async function deslogar() {
    try{
      await signOut(auth)
    } catch(err){
    

    }
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {usuarioLogado <DrawerNavigator/>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );  
}

