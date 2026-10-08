import { Drawer, PaperProvider } from "react-native-paper";
import PageContador from "./SRC/pages/PageContador"
import PageTarefas from "./SRC/pages/PageTarefas";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./SRC/componets/DrawerNaviogator";
import { useEffect, useState } from "react";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  
  const [usuarioLogado, setUsuarioLogado] = useState(null)

  async function registerOnAuthStateChange() {
    registerOnAuthStateChange(auth, (usuario) => {setUsuarioLogado(usuario)})
  }
  
  useEffect(() =>
  )

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <DrawerNavigator/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );  
}

