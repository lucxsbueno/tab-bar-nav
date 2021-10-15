import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Routes } from './src/routes';

import AppLoading from 'expo-app-loading';
import theme from './src/theme';
import { ThemeProvider } from 'styled-components';

import {
   useFonts,
   Roboto_400Regular,
   Roboto_500Medium,
   Roboto_700Bold
} from '@expo-google-fonts/roboto';

export default function App() {

   const [fontsLoaded] = useFonts({
      Roboto_400Regular,
      Roboto_500Medium,
      Roboto_700Bold
   });

   if(!fontsLoaded) return <AppLoading/>;

   return (
      <ThemeProvider theme={theme}>
         <NavigationContainer>
            <Routes/>
         </NavigationContainer>
      </ThemeProvider>
   );
}