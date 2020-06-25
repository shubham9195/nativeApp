import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  FlatList,
} from 'react-native';

import {CardData} from '../const/data/cardData';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CommonHeader from '../components/CommonHeader';
import InvoiceCard from '../components/InvoiceCard';
const renderItem = ({item, index}) => {
  return (
    <InvoiceCard
      key={index}
      headerTitle={item.headerTitle}
      hsnNumber={item.hsnNumber}
      price={item.price}
      taxRate={item.taxRate}
      units={item.units}
      stock={item.stock}
      sku={item.sku}
    />
  );
};
const Invoice = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <CommonHeader screenName="Invoice" />
            <FlatList
              data={CardData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
});

export default Invoice;
