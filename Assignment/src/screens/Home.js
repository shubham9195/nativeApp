import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from '../components/Header';
import HeaderCard from '../components/HeaderCard';
import CardComponent from '../components/CardComponent';
const Home = () => {
  return (
    <>
      <StatusBar barStyle="default" backgroundColor="#006aff" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Header />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{flexDirection: 'row', margin: 10}}>
              <HeaderCard
                fontName={'rupee'}
                titleText="Total Due"
                value="INR 35,800.00"
              />
              <HeaderCard
                fontName={'clock-o'}
                titleText="Upcoming Due"
                value="INR 35,800.00"
              />
              <HeaderCard
                fontName={'money'}
                titleText="Total Paid"
                value="INR 35,800.00"
              />
            </ScrollView>
          </View>
          <CardComponent
            title="Last Transaction"
            firstButton="View"
            secondButton="More"
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
});

export default Home;
