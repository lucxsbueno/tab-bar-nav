import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-web-swiper';

export default function Plans() {
   return(
      <SafeAreaView style={styles.container}>
         <Swiper
            controlsProps={{
               prevTitle: 'Anterior',
               nextTitle: 'Próximo',
            }}>
            <View style={[styles.slideContainer,styles.slide1]}>
               <Text>Slide 1</Text>
            </View>
            <View style={[styles.slideContainer,styles.slide2]}>
               <Text>Slide 2</Text>
            </View>
            <View style={[styles.slideContainer,styles.slide3]}>
               <Text>Slide 3</Text>
            </View>
         </Swiper>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   slideContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   slide1: {
      backgroundColor: '#FFF',
   },
   slide2: {
      backgroundColor: '#FFF',
   },
   slide3: {
      backgroundColor: '#FFF',
   },
});