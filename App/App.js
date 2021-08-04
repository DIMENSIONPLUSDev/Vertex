import React, {useEffect} from 'react';
import Route from './Routes/Routes';
import {PermissionsAndroid, LogBox} from 'react-native';

import { QueryClient, QueryClientProvider} from "react-query";
import SplashScreen from  "react-native-splash-screen";

LogBox.ignoreLogs(['Setting a timer', 'Reanimated 2']);


function App() {
  const queryClient = new QueryClient();

  const permissions = () =>{
    PermissionsAndroid.requestMultiple([ 
      PermissionsAndroid.PERMISSIONS.CAMERA, 
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    ]);

  }

  useEffect(() =>
  {
    permissions();
    SplashScreen.hide();
  },[])
  return (
      <QueryClientProvider client={queryClient}>
      <Route />
      </QueryClientProvider>
  );
}

export default App;
