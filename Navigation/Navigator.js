import { createAppContainer } from 'react-navigation';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import FilterScreen from '../screen/FilterScreen';

import CategoryScreen from '../screen/CategoryScreen';
import FoodListScreen from '../screen/FoodListScreen';
import FoodDetailsScreen from '../screen/FoodDetailsScreen';
import FavoriteScreen from '../screen/FavouriteScreen';

const Navigator = createStackNavigator({
    Category: CategoryScreen,
    FoodList: {
        screen: FoodListScreen
    },
    FoodDetails: FoodDetailsScreen,
    Favorite: FavoriteScreen,
    Filter: FilterScreen
});

const BottomTabNavigation = createBottomTabNavigator({
    // food: Navigator,
    // Favorite: FavoriteScreen,
    Food: {
        screen: Navigator,
        navigationOptions: {
            tabBarLabel: '',
            tabBarIcon: ({ tintColor, activeColor }) => (
                <Icon name="ios-home" color={tintColor} size={30} />
            )
        }
    },
    Favorite: {
        screen: FavoriteScreen,
        navigationOptions: {
            tabBarLabel: ' Favorite',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-bookmark" color={tintColor} size={30} />
            )
        }
    },
},
    {
        tabBarOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: 'tomato',
            inactiveTintColor: 'gray',

            // labelStyle: {
            //     paddingBottom: 0,
            //     fontSize: 15,
            //     fontWeight: 'bold',
            //     marginTop: 0,

            // },
            // style: {
            //     // backgroundColor: 'blue',
            //     justifyContent: 'center',
            //     alignItems: 'center',
            //     display: 'flex',
            //     padding: 10,
            //     paddingTop: 0,
            // }
        }
    });

const DrawerNavigation = createDrawerNavigator({
    Home: {
        screen: BottomTabNavigation,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="ios-home" color={tintColor} size={25} />
            )
        }
    },
    Filter: {
        screen: BottomTabNavigation,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="ios-filter-outline" color={tintColor} size={25} />
            )
        }
    },
    Favorite: {
        screen: BottomTabNavigation,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="bookmark-sharp" color={tintColor} size={25} />
            )
        }
    },
},
    {
        contentoption: {
            activeTintColor: 'pink',
            activeBackgroundColor: 'skyblue',
        },
    }

);
export default createAppContainer(DrawerNavigation);

