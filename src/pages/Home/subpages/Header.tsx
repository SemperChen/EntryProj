import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import SvgUri from 'react-native-svg-uri';
class Header extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerItem}>
          <SvgUri
            width="31"
            height="31"
            fill="#453257"
            source={require('../../../assets/SVGs/search.svg')}
          />
        </View>
        <View style={styles.headerItem}>
          <SvgUri
            width="31"
            height="31"
            fill="#D5EF75"
            source={require('../../../assets/SVGs/logo-cat.svg')}
          />
        </View>
        <View style={styles.headerItem}>
          <Image
            style={styles.avator}
            source={require('../../../assets/Imgs/avator.jpg')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#8560A9',
  },
  headerItem: {
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avator: {
    borderRadius: 15,
    width: 30,
    height: 30,
  },
});
export default Header;
