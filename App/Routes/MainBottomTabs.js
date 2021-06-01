import React from 'react'
import Home from '../Screens/Users/Home';
import Profile from '../Screens/Users/Profile';
import Training from '../Screens/Users/Training';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DPIcon from '../Components/Icons/DPIcons';
import Modal from '../Components/Modal';
import { useNavigation } from '@react-navigation/core';


export default function MainBottomTabs() {

    const MainTabs = createBottomTabNavigator();
    const navigation = useNavigation();
    return (
        <MainTabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let iconColor;  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
                iconColor = focused
                  ? '#F2BB1D'
                  : '#4d4d4d';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'profile' : 'profile';
                iconColor = focused
                  ? '#F2BB1D'
                  : '#4d4d4d';
              }else if (route.name === 'MyModal') {
                iconName = focused ? 'menu' : 'menu';
                iconColor = focused
                  ? '#F2BB1D'
                  : '#4d4d4d';
              }
  
              // You can return any component that you like here!
              return <DPIcon name={iconName} size={size} color={iconColor} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#F2BB1D',
            inactiveTintColor: '#4d4d4d',
          }}> 
            <MainTabs.Screen name="MyModal" component={ Modal } />
            <MainTabs.Screen name="Home" component={Home} />
            <MainTabs.Screen name="Profile" component={Profile}/>
        </MainTabs.Navigator>
    )
}
