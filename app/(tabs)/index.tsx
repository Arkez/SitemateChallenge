import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import useFetchData from '../api/hooks/useFetchData';
import { useEffect } from 'react';

export default function HomeScreen() {


  // const setData =() => {
  //   console.log(useFetchData().data)
  // }
  // useEffect(()=>{
  //  const { data } = useFetchData();
  //  console.log(data)
  // })

  const { data } = useFetchData();
  console.log(data)
  return (
    <ThemedView style={styles.wrapContainer}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!Test</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        {/* <Button
  onPress={setData}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/> */}
      </ThemedView>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  wrapContainer: {
    marginTop: 48,
  },
  // reactLogo: {
  //   height: 178,
  //   width: 290,
  //   bottom: 0,
  //   left: 0,
  //   position: 'absolute',
  // },
});
