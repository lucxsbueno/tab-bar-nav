import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Profile() {
   return(
      <View style={styles.container}>
         <Text>Profile</Text>
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