import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import CATEGORIES from './../data/dummy-catergorys';
import { HeaderButtons } from 'react-navigation-header-buttons';
import { FontAwesome } from '@expo/vector-icons';
import logo from './../assets/dhosha.jpg'
import { useSelector } from 'react-redux';

const CategoryScreen = (props) => {

	const gotoFoodList = (Item) => {
		props.navigation.navigate('FoodList', { itemDetails: Item });
	}
	const renderCategoryItem = ({ item }) => {
		return (
			<TouchableOpacity
				style={[styles.categoryItem, { backgroundColor: item.color }]}
				onPress={() => gotoFoodList(item)}>
				<ImageBackground source={{ uri: item.image }} style={styles.image}>
					<View>
						<Text style={styles.item}>{item.title}</Text>
					</View>
				</ImageBackground>
			</TouchableOpacity>
		);
	}
	const lastName = useSelector(state => state.allfoods.lastName);
	return (
		<View style={styles.screen}>
			{/* 
			<Text>My name is {lastName}</Text> */}
			<FlatList
				data={CATEGORIES}
				renderItem={renderCategoryItem}
				numColumns={2}
			/>
		</View>
	);
}

CategoryScreen.navigationOptions = (navData) => {

	return {
		HeaderTitle: 'Food Categories',
		headerStyle: {
			backgroundColor: 'orange',
		},
		headerTintColor: 'white',
		headerTitleAlign: 'center',

		headerLeft: <HeaderButtons>
			<FontAwesome name="bars" style={{ padding: 20, }} size={30} color="black"
				onPress={() => {
					// <Image source={logo} style={styles.logo} />
					navData.navigation.toggleDrawer()
				}}></FontAwesome>
		</HeaderButtons>
	}

};
const styles = StyleSheet.create({
	screen: {
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
	},
	item: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: '#424242c2',
		textAlign: 'center',
		borderRadius: 5,
		margin: 8,
		padding: 4,
		alignItems: 'center',
	},
	categoryItem: {
		height: 270,
		width: 240,
		margin: 10,
		backgroundColor: '#fd7e14',
		flex: 1,
		borderWidth: 1,
		borderRadius: 5,
	},
	image: {
		resizeMode: 'stretch',
		flex: 1,
		elevation: 15,
		shadowOffset: {
			width: 8,
			height: 9,
		},
		shadowOpacity: 0.37,
		shadowRadius: 7.49,
		justifyContent: 'center',
	},
	logo: {
		width: 100,
		height: 100,
	},
});
export default CategoryScreen;