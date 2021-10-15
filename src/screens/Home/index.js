import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { RectButton } from 'react-native-gesture-handler'

export default function Home() {
   return (
      <View style={styles.container}>
            <LinearGradient
               // Button Linear Gradient
               colors={['#FF5200', '#FF6B13', '#FF7917']}
               start={{ x: 0.0, y: 0.0 }}
               end={{ x: 1.0, y: 0.0 }}
               style={styles.gradient}
               >
                  <RectButton style={styles.button}>
                     <Text style={styles.text}>Fazer consulta</Text>
                  </RectButton>
            </LinearGradient>

      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
      justifyContent: 'flex-end',
      backgroundColor: '#FFF'
   },
   gradient: {
      borderRadius: 32,
      overflow: 'hidden'
   },
   background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
   },
   button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 32,

   },
   text: {
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff',
   },
});