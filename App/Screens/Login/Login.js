import React from "react";
import {Text, View} from 'react-native';
import LoginStyles from './Styles';

export default function Login()
{
  return (
    <View>
      <Text style={LoginStyles.LoginText}>This is login screen</Text>
    </View>
  );
}
