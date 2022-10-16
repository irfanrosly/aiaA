/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Button, Text } from './app/components/atom';
import { Card } from './app/components/molecules';

const App = () => {
  const width = Dimensions.get('window').width;

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Carousel
          loop
          width={width}
          height={width}
          autoPlay={true}
          data={[...new Array(6).keys()]}
          // scrollAnimationDuration={1000}
          onSnapToItem={index => console.log('current index:', index)}
          renderItem={({ index }) => <Card id={index} />}
        />
        <Button title="Hello World" />
        <Text>Welcome to the Jungle!</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
