import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CommonHeader from '../components/CommonHeader';
import Form from '../components/Form';

const Bills = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <CommonHeader screenName="Bills" />
            <Form />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const theme = {
  colors: {
    primary: '#006aff',
  },
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  formContainer: {
    margin: 12,
  },
  saveButton: {
    marginTop: 20,
  },
});

export default Bills;
