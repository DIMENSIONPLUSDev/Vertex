import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Login from '../Screens/Guests/Login';
import Tour from '../Screens/Guests/Tour';
import SignIn from '../Components/Browsers/Auth/SignIn';
import Browser from '../Components/Browsers/Browser';
import {useNavigation} from '@react-navigation/core';
import {Image, TouchableOpacity} from 'react-native';
import DPIcons from '../Components/Icons/DPIcons';
import SignUp from '../Components/Browsers/Auth/SignUp';
import Training from '../Screens/Guests/Training';
import Compass from '../Screens/Compass';
import CaseStudies from '../Screens/Guests/Read/CaseStudies';
import TAT from '../Screens/Guests/Read/TAT';
import SinglePosts from '../Screens/SinglePosts';
import NewsLetters from '../Screens/Guests/Read/NewsLetters';
import Articles from '../Screens/Guests/Read/Articles';
import Lenght from '../Screens/Guests/UnitConvertor/Lenght';
import Area from '../Screens/Guests/UnitConvertor/Area';
// Delete it later


const RootStack = createStackNavigator();


const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <DPIcons
        name="arrow-left"
        size={26}
        color="#4d4d4d"
        style={{paddingLeft: 15}}
      />
    </TouchableOpacity>
  );
};

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator initialRouteName="Login">
    <RootStack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />
    <RootStack.Screen
      name="Tour"
      component={Tour}
      options={{
        headerLeft: () => (
          <BackButton />
        ),
        headerRight: () => (
          <Image
            source={require('../Assets/Images/Logo/Logo.png')}
            style={{
              marginRight: 10,
              height: 35,
              width: 35,
              resizeMode: 'contain',
            }}
          />
        ),
        headerTitle: () => (
          <Image
            source={require('../Assets/Images/Logo/Vertex.png')}
            style={{
              marginRight: 10,
              height: 40,
              width: 40,
              resizeMode: 'contain',
            }}
          />
        ),
        headerTitleAllowFontScaling: true,
        headerTitleStyle: {fontWeight: '400', color: '#F2BB1D'},
        headerTitleAlign: 'center',

      }}
    />
    <RootStack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        headerLeft: () => (
          <BackButton />
        ),
        headerTitle: "Sign In",
        headerRight: () => (
          <Image
            source={require('../Assets/Images/Logo/Vertex.png')}
            style={{
              marginRight: 10,
              height: 40,
              width: 40,
              resizeMode: 'contain',
            }}
          />
        ),
        headerTitleAllowFontScaling: true,
        headerTitleStyle: {fontWeight: '400', color: '#F2BB1D', fontFamily: 'Montserrat-Medium'},
        headerTitleAlign: 'center',
      }}
    />
    <RootStack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        headerLeft: () => (
          <BackButton />
        ),
        headerTitle: "Sign Up",
        headerRight: () => (
          <Image
            source={require('../Assets/Images/Logo/Vertex.png')}
            style={{
              marginRight: 10,
              height: 40,
              width: 40,
              resizeMode: 'contain',
            }}
          />
        ),
        headerTitleAllowFontScaling: true,
        headerTitleStyle: {fontWeight: '400', color: '#F2BB1D', fontFamily: 'Montserrat-Medium'},
        headerTitleAlign: 'center',

      }}
    />
    <RootStack.Screen
      name="CaseStudies"
      component={CaseStudies}
      options={{
        headerRight: () => (
          <Image
            source={require('../Assets/Images/Logo/Logo.png')}
            style={{
              marginRight: 10,
              height: 35,
              width: 35,
              resizeMode: 'contain',
            }}
          />
        ),
        headerLeft: () => <BackButton />,
        title: 'Case Studies',
        headerTitleAllowFontScaling: true,
        headerTitleStyle: {
          fontWeight: '400',
          color: '#F2BB1D',
          fontFamily: 'Montserrat-Medium',
        },
        headerTitleAlign: 'center',
      }}
    />
    <RootStack.Screen
      name="TAT"
      component={TAT}
      options={{
        headerRight: () => (
          <Image
            source={require('../Assets/Images/Logo/Logo.png')}
            style={{
              marginRight: 10,
              height: 35,
              width: 35,
              resizeMode: 'contain',
            }}
          />
        ),
        headerLeft: () => <BackButton />,
        title: 'Tips and Tricks',
        headerTitleAllowFontScaling: true,
        headerTitleStyle: {
          fontWeight: '400',
          color: '#F2BB1D',
          fontFamily: 'Montserrat-Medium',
        },
        headerTitleAlign: 'center',
      }}
    />
    <RootStack.Screen
      name="NewsLetters"
      component={NewsLetters}
      options={{
        headerRight: () => (
          <Image
            source={require('../Assets/Images/Logo/Logo.png')}
            style={{
              marginRight: 10,
              height: 35,
              width: 35,
              resizeMode: 'contain',
            }}
          />
        ),
        headerLeft: () => <BackButton />,
        title: 'NewsLetters',
        headerTitleAllowFontScaling: true,
        headerTitleStyle: {
          fontWeight: '400',
          color: '#F2BB1D',
          fontFamily: 'Montserrat-Medium',
        },
        headerTitleAlign: 'center',
      }}
    />
    <RootStack.Screen
      name="Articles"
      component={Articles}
      options={{
        headerRight: () => (
          <Image
            source={require('../Assets/Images/Logo/Logo.png')}
            style={{
              marginRight: 10,
              height: 35,
              width: 35,
              resizeMode: 'contain',
            }}
          />
        ),
        headerLeft: () => <BackButton />,
        title: 'Articles',
        headerTitleAllowFontScaling: true,
        headerTitleStyle: {
          fontWeight: '400',
          color: '#F2BB1D',
          fontFamily: 'Montserrat-Medium',
        },
        headerTitleAlign: 'center',
      }}
    />
    <RootStack.Screen
      name="SinglePosts"
      component={SinglePosts}
      options={{
        headerRight: () => (
          <Image
            source={require('../Assets/Images/Logo/Logo.png')}
            style={{
              marginRight: 10,
              height: 35,
              width: 35,
              resizeMode: 'contain',
            }}
          />
        ),
        headerLeft: () => <BackButton />,
        title: '',
        headerTitleAllowFontScaling: true,
        headerTitleStyle: {
          fontWeight: '400',
          color: '#F2BB1D',
          fontFamily: 'Montserrat-Medium',
        },
        headerTitleAlign: 'center',
      }}
    />
    {/* <RootStack.Screen
      name="UnitConvertor"
      component={UnitConvertorTabs}
      options={{
        headerRight: () => (
          <Image
            source={require('../Assets/Images/Logo/Logo.png')}
            style={{
              marginRight: 10,
              height: 35,
              width: 35,
              resizeMode: 'contain',
            }}
          />
        ),
        headerLeft: () => <BackButton />,
        title: 'Unit Convertor',
        headerTitleAllowFontScaling: true,
        headerTitleStyle: {
          fontWeight: '400',
          color: '#F2BB1D',
          fontFamily: 'Montserrat-Medium',
        },
        headerTitleAlign: 'center',
      }}
    /> */}
    <RootStack.Screen
      name="Training"
      component={Training}
      options={{
        headerRight: () => (
          <Image
            source={require('../Assets/Images/Logo/Logo.png')}
            style={{
              marginRight: 10,
              height: 35,
              width: 35,
              resizeMode: 'contain',
            }}
          />
        ),
        headerLeft: () => <BackButton />,
        title: 'Upcoming Trainings',
        headerTitleAllowFontScaling: true,
        headerTitleStyle: {
          fontWeight: '400',
          color: '#F2BB1D',
          fontFamily: 'Montserrat-Medium',
        },
        headerTitleAlign: 'center',
      }}
    />
    <RootStack.Screen
      name="Compass"
      component={Compass}
      options={{
        headerRight: () => (
          <Image
            source={require('../Assets/Images/Logo/Logo.png')}
            style={{
              marginRight: 10,
              height: 35,
              width: 35,
              resizeMode: 'contain',
            }}
          />
        ),
        headerLeft: () => <BackButton />,
        title: 'Compass',
        headerTitleAllowFontScaling: true,
        headerTitleStyle: {
          fontWeight: '400',
          color: '#F2BB1D',
          fontFamily: 'Montserrat-Medium',
        },
        headerTitleAlign: 'center',
      }}
    />
    <RootStack.Screen
      name="Browser"
      component={Browser}
      options={{
        title: '',
        headerLeft: () => <BackButton />,
      }}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
