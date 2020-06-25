//this component also can become short but lack of time for now
import React from 'react';
import {StyleSheet, Text, View, Image, Linking, Platform} from 'react-native';
import {Title, Card, Button} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import Entypo from 'react-native-vector-icons/Entypo';
const Profile = props => {
  const navigation = useNavigation();

  // const { id, name, position, picture, phone, salary, email } = props.route.params.item

  const openDial = () => {
    if (Platform.OS === 'android') {
      Linking.openURL(`tel:9538110780`);
    } else {
      Linking.openURL(`telPrompt:9538110780`);
    }
  };
  return (
    <View style={styles.root}>
      <View style={{backgroundColor: '#006aff'}}>
        <AntDesign
          name="left"
          size={32}
          color="#fff"
          style={{marginLeft: 20}}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{height: '20%', backgroundColor: '#006aff'}}>
        <View style={{alignItems: 'center'}}>
          <FontAwesome
            name="user-circle-o"
            size={80}
            color="#fff"
            style={{marginTop: 70}}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Title>Shubham Kumar</Title>
          <Text style={{fontSize: 15}}>Frontend Developer</Text>
        </View>
        <Card
          style={styles.myCard}
          onPress={() => {
            Linking.openURL('mailto:shubham.kr9195@gmail.com');
          }}>
          <View style={styles.cardContent}>
            <MaterialIcons name="email" size={32} color="#006aff" />
            <Text style={styles.myText}>shubham.kr9195@gmail.com</Text>
          </View>
        </Card>
        <Card
          style={styles.myCard}
          onPress={() => {
            openDial();
          }}>
          <View style={styles.cardContent}>
            <Entypo name="phone" size={32} color="#006aff" />
            <Text style={styles.myText}>9538110780</Text>
          </View>
        </Card>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 10,
          }}>
          <Button
            icon="account-edit"
            mode="contained"
            theme={theme}
            onPress={() => console.log('Pressed')}>
            Action 1
          </Button>
          <Button
            icon="delete"
            mode="contained"
            theme={theme}
            onPress={() => console.log('Pressed')}>
            Action 2
          </Button>
        </View>
      </View>
    </View>
  );
};
const theme = {
  colors: {
    primary: '#006aff',
  },
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  myCard: {
    margin: 3,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 8,
  },
  myText: {
    fontSize: 18,
    marginTop: 3,
    marginLeft: 5,
  },
});
export default Profile;
