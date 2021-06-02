import React, { useContext } from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {ActivityIndicator} from 'react-native-paper';
import queryString from 'query-string';
import jwt_decode from "jwt-decode";
import { AuthContext } from "../../Contexts/AuthContext";

export default function SignUp({navigation}) {
  const baseUrl = 'https://dpid.dimensionplus.in';
  const customer_id = '253565';
  const client_id = 'q7LVeH5TA6QeJxP9';
  const redirect_uri = 'https://localhost/';
  var redirectUrl = baseUrl + '/moas/broker/login/jwt/' + customer_id + '?client_id=' + client_id + '&redirect_uri=' + redirect_uri;
  const { signUp } = useContext(AuthContext);

  function onNavigationStateChange(navigationState) {
    const url = navigationState.url;
    //console.log(url);

    const params = queryString.parseUrl(url);

    if (params.query.id_token) {
      // Save token for native requests & move to the next screen
          var decoded = jwt_decode(params.query.id_token);
          //console.log(decoded);
      return navigation.navigate('Profile', {
        token: params.query.id_token,
        decoded: decoded,
      });
    }
  }
  function renderLoading() {
    return (
      <ActivityIndicator
        animating={true}
        color="#4d4d4d"
        size="large"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    );
  }
  return (
    <View style={{flex: 1}}>
      <WebView
        style={{flex: 1}}
        source={{uri: redirectUrl }}
        renderLoading={renderLoading}
        startInLoadingState
        onNavigationStateChange={onNavigationStateChange}
        thirdPartyCookiesEnabled={false}
        saveFormDataDisabled
        cacheEnabled={false}
        cacheMode="LOAD_NO_CACHE"
      />
    </View>
  );
}
