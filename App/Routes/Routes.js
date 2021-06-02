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
  // function verifyJwt(token)
  // {
  //   let jwtBuilder = new MoJwt.JWTBuilder;

  //   jwtBuilder.setSecret(`-----BEGIN CERTIFICATE-----
  //   MIID/zCCAuegAwIBAgIJAPmPOnjOfbO/MA0GCSqGSIb3DQEBCwUAMIGVMQswCQYD
  //   VQQGEwJJTjEUMBIGA1UECAwLTUFIQVJBU0hUUkExDTALBgNVBAcMBFBVTkUxEzAR
  //   BgNVBAoMCk1JTklPUkFOR0UxEzARBgNVBAsMCk1JTklPUkFOR0UxEzARBgNVBAMM
  //   Ck1JTklPUkFOR0UxIjAgBgkqhkiG9w0BCQEWE2luZm9AbWluaW9yYW5nZS5jb20w
  //   HhcNMTYwMTMwMDgyMzE0WhcNMjYwMTI3MDgyMzE0WjCBlTELMAkGA1UEBhMCSU4x
  //   FDASBgNVBAgMC01BSEFSQVNIVFJBMQ0wCwYDVQQHDARQVU5FMRMwEQYDVQQKDApN
  //   SU5JT1JBTkdFMRMwEQYDVQQLDApNSU5JT1JBTkdFMRMwEQYDVQQDDApNSU5JT1JB
  //   TkdFMSIwIAYJKoZIhvcNAQkBFhNpbmZvQG1pbmlvcmFuZ2UuY29tMIIBIjANBgkq
  //   hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsSKksJcuQbZm/cw67JJkHvlzrzd3+aPL
  //   hfqy/FCKj/BmZ7mBZf0s3+89O0rOamsZP1NKzOE29ZL6ONLJHxU48LUbGciZupm/
  //   wf7dY/Av34uDcZ61ufKz0u17UTxgjLULIWBy//68EOr4Xbm/4bqhmKcB3CclMaom
  //   0LWeCrqittiLqunVCjFIbxXMT010WiBBnFwqjUqfuMnVLL+HrPPqgPqNhiKDdxBx
  //   Hk9GDPq2+GEruM1jw7TUjVa+zbhekvdNTbj2Fo2sqf+mIkFLSaS6cHg0UeL7sX0w
  //   vQFDMwx+hpfRLMcYpFAmRMn3dI2zUnPgwvWeKHrnNOjHVkRTV4hgZQIDAQABo1Aw
  //   TjAdBgNVHQ4EFgQU85bt1wVl/f2LftBu1jeO499VUbYwHwYDVR0jBBgwFoAU85bt
  //   1wVl/f2LftBu1jeO499VUbYwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQsFAAOC
  //   AQEApenCY36LGThXLAIRIvDQ6XnHELL7Wm53m3tHy+GA2MxUbcTqQC3tgXM+yC18
  //   EstjRHgWdQMtOcq9ohb5/TqWPoYAYnbg1SG9jEHJ3LLaIMI0idYo+zfPCtwliHLn
  //   suZXH6ZU3mh/IQEBqINini6R/cSh9BpIjqwXKpjWoegl9XLI/RQ7Bbbya89TUBwm
  //   5KR3deWXdMZEj/d7hV8XdSWyi2CvWTeHIfkZVhcHg1ues9+Mt3kaBr4Z5/NkQPAN
  //   jfMdKjZ8tfNTN7PgYAYyRW6C8aXcw+w0zIoGrcO2gVM9/3oR4gHm5MUHOMdAyONk
  //   g59+T+7NDlN7y4YmVIZQBgHByA==
  //   -----END CERTIFICATE-----`);
  //   var verified = jwtBuilder.verifyJwt();
  //   console.log(verified);
  //   if(verified){
  //     var payload = jwtBuilder.getPayload();
  //     return payload;
  //   }
  //   return false;

  // }

  const initialLoginState = {
    isLoading: true,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signIn: async token => {
        let userToken;
        if (token) {
          userToken = token;
          try {
            var decoded = jwt_decode(userToken);
            //var payload = verifyJwt(userToken);
            //console.log(payload);

            await Promise.all([
              AsyncStorage.setItem('userData', JSON.stringify(decoded)),
              AsyncStorage.setItem('userToken', userToken),
            ]);
          } catch (error) {
            console.log(error);
          }
        }
        dispatch({type: 'LOGIN', token: userToken});
      },
      signUp: async token => {
        let userToken;
        if (token) {
          userToken = token;
          try {
            var decoded = jwt_decode(userToken);
            await Promise.all([
              AsyncStorage.setItem('userData', JSON.stringify(decoded)),
              AsyncStorage.setItem('userToken', userToken),
            ]);
          } catch (error) {
            console.log(error);
          }
        }
        dispatch({type: 'REGISTER', token: userToken});
      },
      signOut: async () => {
        try {
          await Promise.all([
            AsyncStorage.removeItem('userData'),
            AsyncStorage.removeItem('userToken'),
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
    let userToken;
    userToken = null;
    setTimeout(async () => {
      // setIsLoading(false);
      try {
        userToken = await AsyncStorage.getItem('userToken');
        //  console.log(userToken);
      } catch (e) {
        console.log(e);
      }
      //console.log('user token: ', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, [loginState.userToken]);

  
  return (
    <AuthContext.Provider value={authContext}>
      <PaperProvider theme={CombinedDefaultTheme}>
        <NavigationContainer theme={CombinedDefaultTheme} linking={linking}>
          {loginState.userToken !== null ? (
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
