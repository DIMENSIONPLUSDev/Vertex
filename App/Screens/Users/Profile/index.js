import React, { useContext } from 'react';
import { View, Text, Linking, Alert, Button } from 'react-native';
import { AuthContext } from '../../../Components/Contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({ route, navigation }) {
    // const {
    //     params: { token, decoded },
    //   } = route;
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('userToken')
          console.log("outside if: "+ value);
          if(value !== null) {
            // value previously stored
            console.log(value)
          }
        } catch(e) {
          // error reading value
        }
      }

const { signOut } = useContext(AuthContext);
    return (
        <View>
            <Text>
                hello
            </Text>
            <Button onPress={ () => { navigation.navigate("Login", signOut()) }} title="Sign out" />
        </View>
    )
}
