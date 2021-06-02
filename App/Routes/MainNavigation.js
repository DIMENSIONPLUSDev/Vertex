import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, useIsDrawerOpen} from '@react-navigation/drawer';
import React from 'react';
import { Pressable, Image, useWindowDimensions } from 'react-native';
import Home from '../Screens/Users/Home';
import Browser from '../Components/Browsers/Browser';
import Compass from '../Screens/Compass';
import DPIcon from '../Components/Icons/DPIcons';
import { useNavigation } from '@react-navigation/core';
import Training from '../Screens/Users/Training';
import CaseStudies from '../Screens/Users/Read/CaseStudies';
import SinglePosts from '../Screens/SinglePosts';
import TAT from '../Screens/Users/Read/TAT';
import NewsLetters from '../Screens/Users/Read/NewsLetters';
import Articles from '../Screens/Users/Read/Articles';
import VastuCompass from '../Screens/Users/VastuCompass';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function MainNavigation({ navigation }) {
  const MainStack = createStackNavigator();
  const fontscale = useWindowDimensions().fontScale;
  const isDrawerOpen = useIsDrawerOpen();

  const BackButton = () => {
    const navigation = useNavigation();
    return (
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <DPIcon
          name="arrow-left"
          size={26}
          color="#4d4d4d"
          style={{paddingLeft: 15}}
        />
      </Pressable>
    );
  };

  return (
    <MainStack.Navigator headerMode="float">
      <MainStack.Screen name="Home" component={Home} 
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
        headerTitle: () => (
          <Image
            source={require('../Assets/Images/Logo/Vertex.png')}
            style={{
              height: 40,
              width: 40,
              resizeMode: 'contain',
            }}
          />
        ),
        headerLeft: () =>  {
          if(isDrawerOpen)
          {
            return(
              <Pressable style={{ marginLeft: 10 }} onPress={ () =>
              {
                navigation.closeDrawer();
              }
              }>
              <AntDesign name="close" size={32 * fontscale} color="#4d4d4d" />
              </Pressable>
            );
          }
            return(
              <Pressable style={{ marginLeft: 10 }} onPress={ () =>
              {
                navigation.openDrawer();
              }
              }>
              <DPIcon name="menu" size={31 * fontscale} color="#4d4d4d" />
              </Pressable>
            );
          },
        headerTitleAllowFontScaling: true,
        headerTitleStyle: {fontWeight: '400', color: '#F2BB1D'},
        headerTitleAlign: 'center',

      }}
      />
      <MainStack.Screen
        name="Browser"
        component={Browser}
        options={{
          title: '',
          headerLeft: () => <BackButton />,
        }}
      />
      <MainStack.Screen
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
      <MainStack.Screen
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
          title: 'Trainings',
          headerTitleAllowFontScaling: true,
          headerTitleStyle: {
            fontWeight: '400',
            color: '#F2BB1D',
            fontFamily: 'Montserrat-Medium',
          },
          headerTitleAlign: 'center',
        }}
      />
      <MainStack.Screen
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
      <MainStack.Screen
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
      <MainStack.Screen
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
          title: 'NewsLetter',
          headerTitleAllowFontScaling: true,
          headerTitleStyle: {
            fontWeight: '400',
            color: '#F2BB1D',
            fontFamily: 'Montserrat-Medium',
          },
          headerTitleAlign: 'center',
        }}
      />
      <MainStack.Screen
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
      <MainStack.Screen
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
    <MainStack.Screen
      name="VastuCompass"
      component={VastuCompass}
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
        title: 'Vastu Compass',
        headerTitleAllowFontScaling: true,
        headerTitleStyle: {
          fontWeight: '400',
          color: '#F2BB1D',
          fontFamily: 'Montserrat-Medium',
        },
        headerTitleAlign: 'center',
      }}
    />
    </MainStack.Navigator>
  );
}
