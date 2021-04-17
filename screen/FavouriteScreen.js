import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import LISTCATEGORYS from '../data/list-categoryitem';
// import { FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../Store/action/meal';

import { FontAwesome } from '@expo/vector-icons';

const FavouriteScreen = (props) => {

    const dispatch = useDispatch();
    const allFood = useSelector(state => state.allfoods.filteredFood);
    const favFood = useSelector(state => state.allfoods.favoriteFood);


    let fav = allFood.filter((value, index) => {
        return favFood.includes(value.id);
    })
    // console.log(props.navigaticonsolon.state.params);

    const gotoFoodDetails = (Item) => {
        props.navigation.navigate('FoodDetails', { itemDetails: Item });
    }
    const renderfoodItem = ({ item }) => {

        const onLikeChangeHandler = () => {
            // dispatch(toggleFavorite(id));
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
                                <FontAwesome name='heart-o' onPress={() => onLikeChangeHandler(item.id)} color='#F76D28' size={30} style={{ textAlign: 'right' }} />
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
                data={fav}
                renderItem={renderfoodItem}
                numColumns={1}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    foodItem: {
        display: 'flex',
        height: 280,
        width: 300,
        margin: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        alignSelf: 'center',
        alignContent: 'center',
    },
    image: {
        // resizeMode: 'stretch',
        flex: 1,
        elevation: 5,
        shadowOffset: {
            width: 5,
            height: 9,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        justifyContent: 'center',
    },
});
export default FavouriteScreen;