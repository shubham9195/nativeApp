import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  FlatList,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CommonHeader from '../components/CommonHeader';
import {Title} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import List from '../const/data/List';

const renderItem = ({item}) => {
  return (
    <View style={styles.rowList}>
      <View style={styles.listBody}>
        <Title>{item.name}</Title>
        <AntDesign
          name="right"
          size={32}
          color="#006aff"
          style={{marginLeft: 20}}
        />
      </View>
    </View>
  );
};
const Settings = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <CommonHeader screenName="Settings" />
            <Title style={styles.heading}>Payment Reports</Title>
            <FlatList
              data={List}
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
  rowList: {
    borderWidth: 1,
    margin: 8,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 4,
  },
  listBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    textAlign: 'center',
    padding: 12,
    fontSize: 20,
  },
});

export default Settings;
