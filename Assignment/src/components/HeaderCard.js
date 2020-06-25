import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function HeaderCard(props) {
  return (
    <View style={styles.card}>
      <View style={{alignItems: 'center'}}>
        <FontAwesome name={props.fontName} size={24} color="grey" />
        <Text style={styles.titleText}>{props.titleText}</Text>
        <Text style={styles.value}>{props.value}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#eee',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    padding: 16,
    width: 160,
    height: 100,
    borderRadius: 4,
    margin: 10,
    elevation: 5,
  },
  titleText: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
