import React from 'react';

import { useTheme } from 'styled-components';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';

import Home from '../screens/Home';
import News from '../screens/News';
import Plans from '../screens/Plans';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export function Routes() {
   const theme = useTheme();

   return(
      <Tab.Navigator
            tabBarOptions={{
               style: {
                  backgroundColor: '#F8F8F8',
                  borderTopColor: '#EAEAEA',
                  paddingHorizontal: 10,
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
                  fontFamily: theme.fonts.medium
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
            name="Notícias"
            component={News}
            options={{
               tabBarIcon: ({size, color}) => (<Feather name="globe" size={size} color={color}/>)
            }} />

         <Tab.Screen
            name="Planos"
            component={Plans}
            options={{
               tabBarIcon: ({size, color}) => (<Feather name="shopping-bag" size={size} color={color}/>)
            }} />

         <Tab.Screen
            name="Perfil"
            component={Profile}
            options={{
               tabBarIcon: ({size, color}) => (<Feather name="user" size={size} color={color}/>)
            }} />

      </Tab.Navigator>
   );
}