import {useNavigation} from '@react-navigation/core';
import React, {useContext, useState, useCallback} from 'react';
import {Image, View, useWindowDimensions, Alert} from 'react-native';
import {Button} from 'react-native-paper';
import DPIcons from '../../../Components/Icons/DPIcons';
import LoginStyles from './styles';
import {AuthContext} from '../../../Components/Contexts/AuthContext';
import {
  authorize,
  refresh,
  revoke,
  prefetchConfiguration,
} from 'react-native-app-auth';
import axios from 'axios';

const config = {
  issuer: 'https://dpid.dimensionplus.in/moas',
  clientId: 'oTrF1mPsZ66I83g',
  redirectUrl: 'com.vertex.auth://oauth',
  scopes: ['openid', 'profile', 'email'],
  usePKCE: false,
  skipCodeExchange: true,
};

const defaultAuthState = {
  hasLoggedInOnce: false,
  access_token: '',
  expires_in: '',
  refresh_token: '',
};

export default function Login() {
  const {login} = useContext(AuthContext);
  const navigation = useNavigation();
  const {width, height} = useWindowDimensions();
  const fontscale = useWindowDimensions().fontScale;

  const [authState, setAuthState] = useState(defaultAuthState);
  React.useEffect(() => {
    prefetchConfiguration({
      warmAndPrefetchChrome: true,
      ...config,
    });
  }, []);

  const handleAuthorize = useCallback(async () => {
    try {
      const newAuthState = await authorize(config);
      const params = new URLSearchParams();
      params.append('grant_type', 'authorization_code');
      params.append('client_id', 'oTrF1mPsZ66I83g');
      params.append('client_secret', 'uap5PtMBcDOAdaCKpgdlJe9OyvQ');
      params.append('redirect_uri', 'com.vertex.auth://oauth');
      params.append('scope', 'openid');
      params.append('code', newAuthState.authorizationCode);
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
          setAuthState({
            hasLoggedInOnce: true,
            ...res.data,
          });
          //console.log(res.data)
          login(res.data);
        });
    } catch (error) {
      Alert.alert('Failed to log in', error.message);
      console.log(JSON.stringify(error));
    }
  }, [authState]);

  return (
    <View style={LoginStyles.Container}>
      <View style={LoginStyles.LogoView}>
        <Image
          source={require('../../../Assets/Images/Logo/Vertex.png')}
          style={LoginStyles.Logo}
        />
      </View>
      <View style={LoginStyles.LoginView}>
        <Button
          icon={() => (
            <DPIcons name="profile" color="#4d4d4d" size={35 * fontscale} />
          )}
          mode="contained"
          onPress={() => {
            handleAuthorize();
          }}
          style={LoginStyles.SignIn}
          contentStyle={{width: width - 160, height: 70}}
          uppercase={false}
          labelStyle={{
            color: '#4d4d4d',
            fontWeight: 'normal',
            fontFamily: 'Montserrat-Regular',
          }}>
          Login
        </Button>
        <Button
          mode="text"
          onPress={() => {
            navigation.navigate('Tour');
          }}
          style={LoginStyles.Tour}
          uppercase={false}
          labelStyle={{
            color: '#4d4d4d',
            fontWeight: '100',
            fontFamily: 'Montserrat-Regular',
          }}
          compact>
          take a tour
        </Button>
      </View>
    </View>
  );
}
