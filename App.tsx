/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  View,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Button, Text } from './app/components/atom';
import { Card } from './app/components/molecules';
import axios from 'axios';

const mockData = require('./app/mocks/apiData.json');
console.log('mockData', mockData);

const App = () => {
  const [data, setData] = useState(mockData);

  const changeOrder = () => {
    const newData = data.sort((a, b) => a.Name < b.Name);
    console.log('new', newData);
    // setData(newData);
  };
  // const test = () => {
  //   axios.get('http://webcode.me').then(resp => {
  //     console.log(resp.data);
  //   });
  // };
  const fetchData = async () => {
    // const response = await axios.get(
    //   'https://tastedive.com/api/similar?apiKey=443477-AIAAsses-W51EUAVP&q=red+hot+chili+peppers%2C+pulp+fiction',
    // );
    // console.log('toi ', response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const { width, height } = Dimensions.get('window');

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.Name} />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'blue', flex: 1 }}>
        <Carousel
          loop
          width={width}
          height={height * 0.4}
          autoPlay={true}
          data={[...new Array(6).keys()]}
          // scrollAnimationDuration={1000}
          // onSnapToItem={index => console.log('current index:', index)}
          renderItem={({ index }) => <Card id={index} />}
          style={{ backgroundColor: 'yellow' }}
        />
        <View style={{ flex: 0.6 }}>
          <Button title="Change Order" onPress={() => changeOrder()} />
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
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
