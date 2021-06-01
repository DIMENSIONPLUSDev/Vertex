import {useNavigation} from '@react-navigation/core';
import React, { useContext } from 'react';
import {Image, View, useWindowDimensions, Linking} from 'react-native';
import {Button} from 'react-native-paper';
import DPIcons from '../../../Components/Icons/DPIcons';
import LoginStyles from './styles';
import {AuthContext} from '../../../Components/Contexts/AuthContext';

export default function Login() {
  const navigation = useNavigation();
  const {width, height} = useWindowDimensions();
  const fontscale = useWindowDimensions().fontScale;

  const {signIn} = useContext(AuthContext);

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
            <DPIcons name="sign-in" color="#4d4d4d" size={35 * fontscale} />
          )}
          mode="contained"
          onPress={() => {
            navigation.navigate(
              "SignIn")
          }}
          style={LoginStyles.SignIn}
          contentStyle={{width: width - 160, height: 70}}
          uppercase={false}
          labelStyle={{
            color: '#4d4d4d',
            fontWeight: 'normal',
            fontFamily: 'Montserrat-Regular',
          }}>
          Sign In
        </Button>
        <Button
          icon={() => (
            <DPIcons name="sign-up" color="#4d4d4d" size={35 * fontscale} />
          )}
          mode="outlined"
          onPress={() => {
            navigation.navigate("SignUp")
          }}
          style={LoginStyles.SignUp}
          contentStyle={{width: width - 160, height: 70}}
          uppercase={false}
          labelStyle={{
            color: '#4d4d4d',
            fontWeight: 'normal',
            fontFamily: 'Montserrat-Regular',
          }}>
          Sign Up
        </Button>
        <Button
          mode="text"
          onPress={() => {
            navigation.navigate("Tour")
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
