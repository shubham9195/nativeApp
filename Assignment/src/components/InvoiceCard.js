import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function InvoiceCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerContainer}>
          <View style={styles.headerRow}>
            <Text style={styles.headerTitle}>{props.headerTitle}</Text>
            <View style={styles.chip}>
              <Text style={{color: 'purple'}}>Product</Text>
            </View>
          </View>
          <View>
            <FontAwesome name="pencil" size={20} color="black" />
          </View>
        </View>
        <View style={styles.captionBody}>
          <Text>
            <Text style={styles.titleText}>SKU:</Text>
            {props.sku}
          </Text>
        </View>
        <View style={styles.cardBody}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.titleText}>HSN Number</Text>
            <Text>{props.hsnNumber}</Text>
          </View>
          <View style={{flexDirectiosn: 'column'}}>
            <Text style={styles.titleText}>Item Price</Text>
            <Text>{props.price}</Text>
          </View>
        </View>
        <View style={styles.footerSection}>
          <View>
            <Text style={styles.titleText}>Tax Rate</Text>
            <Text>{props.taxRate}</Text>
          </View>
          <View>
            <Text style={styles.titleText}>Unit</Text>
            <Text>{props.units}</Text>
          </View>
          <View>
            <Text style={styles.titleText}>Initial Stock</Text>
            <Text>{props.stock}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#eee',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    padding: 16,
    width: 320,
    height: 200,
    borderRadius: 2,
    margin: 10,
    elevation: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerRow: {
    flexDirection: 'row',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  chip: {
    flexDirection: 'row',
    backgroundColor: '#f9d6ff',
    width: 100,
    height: 30,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  titleText: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontWeight: 'bold',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  footerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  captionBody: {
    paddingVertical: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
});
