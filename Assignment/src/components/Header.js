import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function Header() {
    const navigation = useNavigation()
    return (
        <View style={{ height: 40, backgroundColor: '#006aff',flexDirection:'row',justifyContent:'space-between' }}>
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <AntDesign name={'antdesign'} size={32} color="#fff" />
                <Text style={styles.brandName}>Brand Name</Text>
            </View>
            <View style={styles.userProfile}>
            <FontAwesome name="user-circle-o" size={24} color="#fff" onPress={()=>navigation.navigate("profile")}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    brandName:{
        fontSize: 22, marginLeft: 5 ,color:'#fff'
    },
    userProfile: {
        flexDirection:'row',alignItems:'center',marginHorizontal:10 
    }
})