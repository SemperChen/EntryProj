import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Header from './subpages/Header';
import Body from './subpages/Body';
import {createDrawerNavigator} from '@react-navigation/drawer';

class Home extends React.PureComponent {
  render() {
    return (
        <View style={styles.container}>
          <SafeAreaView>
            <Header />
          </SafeAreaView>
          <View style={styles.scrollContainer}>
            <Body />
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
});
export default Home;
