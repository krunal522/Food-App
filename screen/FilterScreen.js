import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const FilterScreen = (props) => {

    const [isVeg, setIsVeg] = useState(false);
    const [isNonVeg, setIsNonVeg] = useState(false);
    const [isPrice, setIsPrice] = useState(false);

    return (
        <View>
            <View style={{ backgroundColor: 'pink', padding: 8, marginTop: 10, borderBottomWidth: 2, borderRadius: 4, margin: 4 }}>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ fontWeight: "bold", fontSize: 18, flex: 1, }}>Veg</Text>
                    <View style={{ alignSelf: 'flex-end', }}>
                        <Switch value={isVeg} onValueChange={setIsVeg}
                            trackColor={{ false: "red", true: "gray" }}
                            thumbColor={isVeg ? "green" : "red"}
                        />
                    </View>
                </View>

            </View>
           
        </View>
    );
    
}




// FilterScreen.navigationOptions = {
//     headerTitle: 'Filter'
// }

FilterScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filter Screen',

        headerStyle: {
            backgroundColor: 'orange',
            height: 70,
            alignItems: 'center',
            textAlign: 'center'
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',

        headerRight: <HeaderButtons>
            <TouchableOpacity>
                <FontAwesome name="save" style={{ padding: 10 }} size={30} />
            </TouchableOpacity>

        </HeaderButtons>
    };
};


const styles = StyleSheet.create({

});

export default FilterScreen;