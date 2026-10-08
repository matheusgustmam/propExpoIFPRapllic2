import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PageContador from "../pages/PageContador";
import PageTarefas from "../pages/PageTarefas";
import { Ionicons } from "@expo/vector-icons";

function TabsNavigator(){
    return(
        <Tabs.TabsNavigator screenOptions={{ HeaderShown: false, animation: "fade", }}>
            <Tabs.Screen name="Contador" component={PageContador} options={{tabBarIcon:() => <Ionicons name="calculator" size=(24) > }}></Tabs.Screen>
            <Tabs.Screen name="Tarefas" component={PageTarefas}></Tabs.Screen>
        </Tabs.TabsNavigator>
    )
} 

export default TabsNavigator;