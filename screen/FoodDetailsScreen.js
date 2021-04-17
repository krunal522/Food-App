import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import LISTCATEGORYS from '../data/list-categoryitem';
import logo from './../assets/dhosha.jpg'

const FoodDetails = (props) => {

    let Details = props.navigation.getParam('itemDetails');
    // console.log(Details);

    // console.log(itemDetails);
    return (
        <View style={{ backgroundColor: 'white', margin: 6, borderRadius: 5 }}>
            <Image source={{ uri: Details.image }} style={styles.logo} />
            <View style={{ paddingLeft: 10 }}>
                <Text style={{ textAlign: 'left', color: 'orange', fontWeight: "bold", fontSize: 24 }}>{Details.itemName}</Text>
            </View>
            <View style={{ padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', flex: 1 }}>{Details.price} </Text>
                <TouchableOpacity style={{ backgroundColor: 'orange', padding: 12, paddingLeft: 30, paddingRight: 30, marginHorizontal: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', alignContent: 'center', justifyContent: 'center' }}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Description:</Text>
                <Text>{Details.details}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        backgroundColor: 'lightblue',
    },
    logo: {
        width: '100%',
        height: 200,
    },
})
export default FoodDetails;





