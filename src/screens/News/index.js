import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function News() {
   return(
      <View style={styles.container}>
         <Text>News</Text>
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