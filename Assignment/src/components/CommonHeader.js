import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function CommonHeader(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.buttonContainer}>
        <AntDesign
          name="left"
          size={32}
          color="#fff"
          style={{marginLeft: 20}}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Text style={styles.screenTitle}>{props.screenName}</Text>
      <View style={styles.profileButtonContainer}>
        <FontAwesome
          name="user-circle-o"
          size={24}
          color="#fff"
          onPress={() => navigation.navigate('profile')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 40,
    backgroundColor: '#006aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  screenTitle: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
