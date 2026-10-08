import { createDrawerNavigator } from "@react-navigation/drawer";
import Component from "react-native-paper/lib/typescript/components/List/ListItem";
import StackNavigator from "./.StackNavigator";
import { Icon } from "react-native-paper";

const Drawer =  createDrawerNavigator();

function DrawerNavigator(){
    return
        <Drawer.Navigator>
            <Drawer.Screen name='inicio' Component={StackNavigator}
            options={{
                drawerIcon: () => <Iconicons name="home" size={24} 
            }} />
            
        </Drawer.Navigator>

}


export default DrawerNavigator;