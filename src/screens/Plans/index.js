import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Plans() {
   return(
      <View style={styles.container}>
         <Text>Plans</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF'
   }
})