import "react-native-gesture-handler";
import React from "react";
import DPIcon from "../Components/Icons/DPIcons";
import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Provider as PaperProvider, Title,
  } from 'react-native-paper';
import {CombinedDefaultTheme, CombinedDarkTheme} from "../Utils/Theme";
// Screens for navigation
import Login from "../Screens/Login/Login";
import SignIn from "../Screens/SignIn/SignIn";

import Tour from "../Screens/Tour";
import Compass from "../Screens/Compass";
import Browser from "../Components/Browser";
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

const BackButton = () => {
    const navigation = useNavigation();
    return (
    <TouchableOpacity onPress= { () => { navigation.goBack() }}>
        <DPIcon name="arrow-left" size={26} color="#4d4d4d" style={{ paddingLeft: 15 }}/>
    </TouchableOpacity>
    );
}

export default function Route()
{
    return (
        <PaperProvider theme={CombinedDefaultTheme}>
        <NavigationContainer theme={CombinedDefaultTheme}>
            {/* Here we need to add stacks of screens */}
            <Stack.Navigator>
                <Stack.Screen name="Tour" component={ Tour } 
                options={{
                    headerLeft: () => <BackButton /> 
                }} />
                <Stack.Screen name="Browser" component= { Browser } options={{
                    title: "", 
                    headerLeft: () => <BackButton />
                }} />
                <Stack.Screen name="Compass" component={Compass} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signin" component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>
        </PaperProvider>
    );
}