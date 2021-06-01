import {StyleSheet, Dimensions } from 'react-native';
const { width, height} = Dimensions.get('window')
const LoginStyles = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    flex: 1,
    
  },
  LogoView: {
    flex: 2,
    alignItems:"center",
    paddingVertical: 40
  },
  Logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 'auto',

  },
  LoginView: {
    flex: 3,
    alignItems:"center",
    paddingBottom: 30,
    paddingTop: 50
  },
  SignIn:{
    marginTop: 'auto',
    elevation: 0,
    borderRadius: 5
  },
  SignUp: {
    marginTop: 30,
    elevation: 0
  },
  Tour: {
    marginTop: 'auto',
    fontWeight: '100'
  }
});

export default LoginStyles;
