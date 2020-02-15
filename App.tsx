/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View, Button, Text, ScrollView, Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './src/pages/Login';
import Home from './src/pages/Home/index';
const {height} = Dimensions.get('window');
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const App = () => {
  return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height:height
  },
});
export default App;
