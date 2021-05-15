import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Provider as PaperProvider,
  } from 'react-native-paper';
import {CombinedDefaultTheme, CombinedDarkTheme} from "../Utils/Theme";
// Screens for navigation
import Login from "../Screens/Login/Login";
import SignIn from "../Screens/SignIn/SignIn";

import Tour from "../Screens/Tour";
import Compass from "../Screens/Compass";

const Stack = createStackNavigator();
export default function Route()
{
    return (
        <PaperProvider theme={CombinedDefaultTheme}>
        <NavigationContainer theme={CombinedDefaultTheme}>
            {/* Here we need to add stacks of screens */}
            <Stack.Navigator>
                <Stack.Screen name="Tour" component={Tour} />
                <Stack.Screen name="Compass" component={Compass} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signin" component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>
        </PaperProvider>
    );
}