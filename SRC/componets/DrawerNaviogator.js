import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Component from "react-native-paper/lib/typescript/components/List/ListItem";
import StackNavigator from "./.StackNavigator";
import { Icon } from "react-native-paper";

const Drawer =  createDrawerNavigator();

function DrawerNavigator(drawerProps){
    
    function DrawerContent(props){
        return{
            <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
                <DrawerItem 
                    label="sair"
                    Icon={() => <MaterialIcons name="logout" size={24} color="red" />}
                    onPress={() => props.deslogar()}
                />
            </DrawerContentScrollView>    
        }
    }
    
    
    return {
        <Drawer.Navigator
            drawerContent={(navProps) =>
                 <DrawerContent
                    {...navProps} 
                deslogar={ ()=> drawerProps.deslogar()}
            />}

        <Drawer.Navigator>
            <Drawer.Screen name='inicio' Component={StackNavigator}
            options={{
                drawerIcon: () => <Iconicons name="home" size={24} 
            }} />
            
        </Drawer.Navigator>

}


export default DrawerNavigator;