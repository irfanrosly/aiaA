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
  StyleSheet,
  FlatList,
  View,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Text } from '../components/atom';
import { Card } from '../components/molecules';
import axios from 'axios';
import type { RootState } from '../config/store';
import { useSelector } from 'react-redux';

const mockData = require('../mocks/apiData.json');
console.log('mockData', mockData);

const HomeScreen = () => {
  const [data, setData] = useState(mockData);

  const homeData = useSelector((state: RootState) => state.home);
  console.log('homeData : ', data);
  const changeOrder = () => {
    const newData = data.sort((a, b) => a.Name < b.Name);
    console.log('new', newData);
    // setData(newData);
  };
  const testAxios = () => {
    axios.get('http://webcode.me').then(resp => {
      console.log(resp.data);
    });
  };
  // const fetchData = async () => {
  //   // const response = await axios.get(
  //   //   'https://tastedive.com/api/similar?apiKey=443477-AIAAsses-W51EUAVP&q=red+hot+chili+peppers%2C+pulp+fiction',
  //   // );
  //   // console.log('toi ', response);
  // };
  useEffect(() => {
    testAxios();
  }, []);
  const { width, height } = Dimensions.get('window');

  const Item = ({ title }) => (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.Name} />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.5 }}>
          <Carousel
            loop
            width={width}
            height={'100%'}
            autoPlay={true}
            data={homeData?.favItem}
            // scrollAnimationDuration={1000}
            // onSnapToItem={index => console.log('current index:', index)}
            renderItem={item => <Card item={item?.item} />}
            style={{}}
          />
        </View>
        <View style={{ flex: 0.6, marginHorizontal: 8 }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={{ flex: 1 }}
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
  cardContainer: {
    height: 48,
    width: '100%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 4,
    marginHorizotal: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
});

export default HomeScreen;
