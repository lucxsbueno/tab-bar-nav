import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo, Feather } from '@expo/vector-icons';

import Home from '../screens/Home';
import News from '../screens/News';
import Plans from '../screens/Plans';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export function Routes() {
   return(
      <Tab.Navigator
            tabBarOptions={{
               style: {
                  backgroundColor: '#F9F9FB',
                  borderTopColor: '#EAEAEA',
                  borderTopWidth: 1,
                  elevation: 0,
                  height: 67,
               },
               activeTintColor: '#FF5300',
               inactiveTintColor: '#CFCFCF',
               tabStyle: {
                  paddingBottom: 5,
                  paddingTop: 5
               },
               labelStyle: {
                  fontSize: 14,
                  fontWeight: '600'
               }
            }}
         >

         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarIcon: ({size, color}) => (<Feather name="home" size={size} color={color}/>)
            }} />

         <Tab.Screen
            name="News"
            component={News}
            options={{
               tabBarIcon: ({size, color}) => (<Feather name="globe" size={size} color={color}/>)
            }} />

         <Tab.Screen
            name="Plans"
            component={Plans}
            options={{
               tabBarIcon: ({size, color}) => (<Feather name="credit-card" size={size} color={color}/>)
            }} />

         <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
               tabBarIcon: ({size, color}) => (<Feather name="user" size={size} color={color}/>)
            }} />

      </Tab.Navigator>
   );
}