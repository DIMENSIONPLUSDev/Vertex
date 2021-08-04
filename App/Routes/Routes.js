import 'react-native-gesture-handler';
import React, {useMemo, useReducer} from 'react';
import DPIcon from '../Components/Icons/DPIcons';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import linking from './linking';
import {CombinedDefaultTheme} from '../Utils/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import {createDrawerNavigator} from '@react-navigation/drawer';
// Screens for navigation

import {TouchableOpacity} from 'react-native';
import RootStackScreen from './RootStackScreen';
import {AuthContext} from '../Components/Contexts/AuthContext';
import {useEffect} from 'react';
import MainNavigation from './MainNavigation';
import axios from 'axios';


const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <DPIcon
        name="arrow-left"
        size={26}
        color="#4d4d4d"
        style={{paddingLeft: 15}}
      />
    </TouchableOpacity>
  );
};

export default function Route() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
 
  const initialLoginState = {
    isLoading: true,
    id_token: null,
    refresh_token: null,
    access_token: null
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          id_token: action.id_token,
          refresh_token: action.refresh_token,
          access_token: action.access_token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          id_token: action.id_token,
          refresh_token: action.refresh_token,
          access_token: action.access_token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          id_token: null,
          refresh_token: null,
          access_token: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      login: async (data) => {
        //console.log("from routes page",data)
        let id_token;
        if (data.id_token) {
          id_token = data.id_token;
          try {
            var decoded = jwt_decode(data.id_token);
            
            //console.log(decoded);

            await Promise.all([
              AsyncStorage.setItem('id_token', data.id_token),
              AsyncStorage.setItem('userData', JSON.stringify(decoded)),
              AsyncStorage.setItem('refresh_token', data.refresh_token),
              AsyncStorage.setItem('access_token', data.access_token)
            ]);
          } catch (error) 
          {
            console.log(error);
          }
        }
        dispatch({type: 'LOGIN', id_token: data.id_token, refresh_token: data.refresh_token, access_token: data.access_token });
      },
      signOut: async () => {
        try {
          await Promise.all([
            AsyncStorage.setItem('id_token'),
            AsyncStorage.removeItem('userData'),
            AsyncStorage.removeItem('refresh_token'),
            AsyncStorage.removeItem('access_token')
          ]);
        } catch (error) {
          console.log(error);
        }
        dispatch({type: 'LOGOUT'});
      },
    }),
    [],
  );

  useEffect(() => {
    let data;
    data = null;
    
    setTimeout(async () => {
      // setIsLoading(false);
      try {
       data = await Promise.all([
        AsyncStorage.getItem('userData'),
        AsyncStorage.getItem('refresh_token'),
        AsyncStorage.getItem('access_token'),
        AsyncStorage.getItem('id_token')  
        ]);
        let json_data = JSON.parse(data[0]);

      // console.log("when refreshed",data[1]);

        if (Date.now() >= json_data.exp * 1000) {
      const params = new URLSearchParams();
      params.append('grant_type', 'refresh_token');
      params.append('client_id', 'oTrF1mPsZ66I83g');
      params.append('client_secret', 'uap5PtMBcDOAdaCKpgdlJe9OyvQ');
      params.append('redirect_uri', 'com.vertex.auth://oauth');
      params.append('refresh_token', data[1]);
      const configuration = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };
      await axios
        .post(
          'https://dpid.dimensionplus.in/moas/rest/oauth/token',
          params,
          configuration,
        )
        .then((res) => {
          // setAuthState({
          //   hasLoggedInOnce: true,
          //   ...res.data,
          // });
          console.log(res.data)
        });
       }
      } catch (e) {
        console.log(e);
      }
      //console.log('user token: ', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', id_token: data[3], refresh_token: data[1], access_token: data[2]});
    }, 1000);
  }, [loginState.id_token]);

  return (
    <AuthContext.Provider value={authContext}>
      <PaperProvider theme={CombinedDefaultTheme}>
        <NavigationContainer theme={CombinedDefaultTheme} linking={linking}>
          { loginState.id_token !== null ? (
            <Drawer.Navigator initialRouteName="Home" drawerType="slide" drawerStyle={{ width:"55%" }}>
              <Drawer.Screen name="MainDrawer" component={MainNavigation}/>
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
          {/* Here we need to add stacks of screens */}
        </NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  );
}
