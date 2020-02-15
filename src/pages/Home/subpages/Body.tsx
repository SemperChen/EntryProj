import React from 'react';
import {Image, View, Text, StyleSheet, FlatList} from 'react-native';
import SvgUri from 'react-native-svg-uri';
let postData = require('./mock_data.json');
class Body extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        data: postData.posts,
        isRefreshing: false,
        isShowLoadMore: false,
    }
}
  _renderItemSeparatorComponent = () => (
      <View style={{ height:1, backgroundColor:'#E8E8E8' }}></View>
   );
  
  render() {    
    return (
      <View style={styles.postList}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <View style={styles.postBox}>
            <View style={styles.postHeader}>
              <View style={styles.postUser}>
                <Image source={{uri: item.avator}} style={styles.postAvator} />
                <Text style={styles.postBy}>{item.publishBy}</Text>
              </View>
              <View>
                <Text style={styles.postChannel}>{item.channel}</Text>
              </View>
            </View>
            <View>
              <View>
                <Text style={styles.postTitle}>{item.title}</Text>
                <View style={{flexDirection: 'row'}}>
                  <SvgUri
                    width="18"
                    height="18"
                    fill="#8560A9"
                    source={require('../../../assets/SVGs/time.svg')}
                  />
                  <Text style={styles.postTime}>
                    {item.publishTime[0] + ' - ' + item.publishTime[1]}
                  </Text>
                </View>
                <Text numberOfLines={3} style={styles.postContent}>
                  {item.content}
                </Text>
              </View>
              <View style={styles.postFooter}>
                <View style={{flexDirection: 'row', marginRight: 50}}>
                  <SvgUri
                    width="16"
                    height="16"
                    fill="#AECB4F"
                    source={require('../../../assets/SVGs/check.svg')}
                  />
                  <Text style={{color: '#453257', marginLeft: 5}}>
                    I am going!
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <SvgUri
                    width="16"
                    height="16"
                    fill="#FF5C5C"
                    source={require('../../../assets/SVGs/like.svg')}
                  />
                  <Text style={{color: '#453257', marginLeft: 5}}>I like it</Text>
                </View>
              </View>
            </View>
          </View>
        
          )}
          ItemSeparatorComponent={ this._renderItemSeparatorComponent }
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postList: {
    flex: 1,
  },
  postBox: {
    marginLeft: 22,
    paddingRight: 22,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  postUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postAvator: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight: 10,
  },
  postChannel: {
    borderRadius: 13,
    height: 26,
    lineHeight: 24,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#8560A9',
    borderWidth: 1,
    borderColor: '#8560A9',
  },
  postBy: {
    color: '#67616D',
    fontWeight: 'bold',
  },
  postTitle: {
    fontSize: 25,
    color: '#453257',
    fontWeight: '500',
    marginBottom: 10,
  },
  postTime: {
    color: '#8560A9',
    fontSize: 14,
    marginLeft: 5,
  },
  postContent: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 18,
    color: '#67616D',
  },
  postFooter: {
    flexDirection: 'row',
  },
});
export default Body;
