import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
// import LISTCATEGORYS from '../data/list-categoryitem';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../Store/action/meal';

import { FontAwesome } from '@expo/vector-icons';

const FoodListScreen = (props) => {
    const dispatch = useDispatch();
    const allFood = useSelector(state => state.allfoods.filteredFood);
    const favFood = useSelector(state => state.allfoods.favoriteFood);

    // console.log(props.navigaticonsolon.state.params);

    console.log('krunal', props);
    const FILTERLIST = allFood.filter((item, index) => {
        return props.navigation.getParam('itemDetails').id == item.catagory_id;
        console.log('item', item);
        // console.log('index', index);
    })

    const gotoFoodDetails = (Item) => {
        props.navigation.navigate('FoodDetails', { itemDetails: Item });
    }

    const renderfoodItem = ({ item }) => {
        const onLikeChangeHandler = (id) => {
            dispatch(toggleFavorite(id));
        }

        const status = favFood.includes(item.id);
        return (
            <View>
                <TouchableOpacity
                    style={[styles.foodItem, { backgroundColor: item.color }]}
                    onPress={() => gotoFoodDetails(item)} >
                    <ImageBackground source={{ uri: item.image }} style={styles.image}>
                    </ImageBackground>

                    <View style={{ margin: 5, display: 'flex', flexDirection: 'row' }} >
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'left', fontWeight: 'bold', color: 'black', fontSize: 15 }} >{item.itemName}</Text>
                            <Text style={{ textAlign: 'left', fontWeight: 'bold', color: 'black', fontSize: 12 }} >{item.price} </Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'right' }}>
                                <FontAwesome name={status ? 'heart' : 'heart-o'} onPress={() => onLikeChangeHandler(item.id)} color='#F76D28' size={30} style={{ textAlign: 'right' }} />
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity >
            </View >
        );
    }
    return (
        <View style={styles.screen}>
            <FlatList
                data={FILTERLIST}
                renderItem={renderfoodItem}
                numColumns={1}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        // marginTop: 10,
        // marginLeft: 50,
        // marginRight: 10,
    
    

    },
    foodItem: {
        display: 'flex',
        height: 300,
        width: 300,
        margin: 5,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        alignContent: 'center',
    },
    image: {
        resizeMode: 'stretch',
        flex: 1,
        // elevation: 5,
        // shadowOffset: {
        //     width: 5,
        //     height: 5,
        // },
        // shadowOpacity: 0.37,
        // shadowRadius: 7.49,
        justifyContent: 'center',
    },
});
export default FoodListScreen;