import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

export default function CommonHeader(props) {
    const navigation = useNavigation()
    return (
        <View style={{ height: 40, backgroundColor: '#006aff', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name="arrowleft" size={32} color="#fff" style={{ marginLeft: 20 }} onPress={()=>navigation.goBack()}/>
            </View>
    <Text style={{color:'#fff',alignSelf:'center',fontSize:16,fontWeight:'bold'}}>{props.screenName}</Text>
            <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:10 }}>
                <FontAwesome name="user-circle-o" size={24} color="#fff" onPress={() => navigation.navigate("profile")} />
            </View>
        </View>
    );
}
