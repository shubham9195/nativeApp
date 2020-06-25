import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function InvoiceCard() {
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={{ borderWidth: 1, borderColor: '#eee', shadowOpacity: 0.8, shadowRadius: 5, padding: 16, width: 320, height: 200, borderRadius: 2, margin: 10, elevation: 4 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Vedic Chai</Text>
                        <View style={{ flexDirection: 'row', backgroundColor: '#f9d6ff', width: 100, height: 30, borderRadius: 10, padding: 10, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
                            <Text style={{ color: 'purple', }}>Product</Text>
                        </View>
                    </View>
                    <View>
                        <FontAwesome name="pencil" size={20} color="black" />
                    </View>
                </View>
                <View style={{ paddingVertical: 10, borderBottomColor: "grey", borderBottomWidth: 1 }}>
                    <Text><Text style={{color:'rgba(0, 0, 0, 0.54)',fontWeight:'bold'}}>SKU:</Text>76125432012334</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomColor: "grey", borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{color:'rgba(0, 0, 0, 0.54)',fontWeight:'bold'}}>HSN Number</Text>
                        <Text>1234567</Text>
                    </View>
                    <View style={{ flexDirectiosn: 'column' }}>
                        <Text style={{color:'rgba(0, 0, 0, 0.54)',fontWeight:'bold'}}>Item Price</Text>
                        <Text>10,000,00.00</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                        <Text style={{color:'rgba(0, 0, 0, 0.54)',fontWeight:'bold'}}>Tax Rate</Text>
                        <Text>5%</Text>
                    </View>
                    <View>
                        <Text style={{color:'rgba(0, 0, 0, 0.54)',fontWeight:'bold'}}>Unit</Text>
                        <Text>KG</Text>
                    </View>
                    <View>
                        <Text style={{color:'rgba(0, 0, 0, 0.54)',fontWeight:'bold'}}>Initial Stock</Text>
                        <Text>23</Text>
                    </View>
                </View>

            </View>
        </View>
    );
}
