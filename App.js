import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './Navigation/Navigator';
import foodReducers from './Store/action/reducers/allfood';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// import { FontAwesome } from '@expo/vector-icons';
// import * as Fonts from 'expo-font';
// import AppLoading from 'expo-app-loading';

// const fetchFonts = () => {
//   return Fonts.loadAsync({
//     'lobi': require('./assets/font/Lobster-Regular.ttf')
//   });
// }


export default function App() {

  // console.log(foodReducers);

  const rootReducer = combineReducers({
    allfoods: foodReducers
  });
  
  const store = createStore(rootReducer);
  //   const [appLoaded, setAppLoaded] = useState(false);

  //   if (!appLoaded) {
  //     return (
  //       <AppLoading
  //         startAsync={fetchFonts()}
  //         onFinish={setAppLoaded(true)}
  //         onError={(err) => console.log(err)}
  //       />
  //     );
  //   }
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
