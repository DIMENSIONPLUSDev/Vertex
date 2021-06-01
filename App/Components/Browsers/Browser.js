import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {ActivityIndicator} from 'react-native-paper';

export default function Browser({route}) {
  const {url} = route.params;
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
        source={{uri: url}}
        renderLoading={renderLoading}
        startInLoadingState
      />
    </View>
  );
}
