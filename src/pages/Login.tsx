import * as React from 'react';
import SvgUri from 'react-native-svg-uri';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from 'react-native';
let {height} = Dimensions.get('window');
height = height - 90;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      user: '',
      pass: '',
      userInputState: false,
      passInputState: false,
   };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View >
            <KeyboardAvoidingView
              behavior={'position'}
              style={styles.welcomePic}>
              <ImageBackground
                source={require('../assets/Imgs/Street-Dance-01.jpg')}
                style={{width: '100%', height: '100%'}}>
                <View style={styles.colorFilter}>
                  <View style={styles.textBox}>
                    <Text
                      style={{
                        color: '#D5EF7F',
                        fontSize: 18,
                        fontWeight: '500',
                        textAlign: 'center',
                      }}>
                      FIND THE MOST LOVED ACTIVITIES
                    </Text>
                    <Text
                      style={{
                        color: '#D5EF7F',
                        fontSize: 29,
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      BLACK CAT
                    </Text>
                  </View>
                  <View style={styles.logoBox}>
                    <View style={styles.welcomeLogo}>
                      <SvgUri
                        style={styles.insideBorder}
                        width="55"
                        height="55"
                        fill="#D5EF75"
                        source={require('../assets/SVGs/logo-cat.svg')}
                      />
                    </View>
                  </View>
                  <View style={styles.inputBox}>
                    <View style={styles.loginInput}>
                      <SvgUri
                        style={styles.inputSvg}
                        width="22"
                        height="22"
                        fill="#D3C1E5"
                        source={require('../assets/SVGs/user.svg')}
                      />
                      <TextInput
                        selectionColor="#4C4C4C"
                        style={styles.textInput}
                        placeholder="Username"
                        placeholderTextColor="#AC8EC9"
                        onFocus={(value)=>this.setState({userInputState: true, user: value})}
                        onBlur={()=>this.setState({userInputState: false})}
                        backgroundColor={this.state.userInputState? "#FFFFFF33":"transparent"}
                      />
                    </View>
                    <View style={styles.loginInput}>
                      <SvgUri
                        style={styles.inputSvg}
                        width="22"
                        height="22"
                        fill="#D3C1E5"
                        source={require('../assets/SVGs/password.svg')}
                      />
                      <TextInput
                        selectionColor="#4C4C4C"
                        secureTextEntry={true}
                        style={styles.textInput}
                        placeholder="Password"
                        placeholderTextColor="#AC8EC9"
                        onFocus={(value)=>this.setState({passInputState: true, pass: value})}
                        onBlur={()=>this.setState({passInputState: false})}
                        backgroundColor={this.state.passInputState? "#FFFFFF33":"transparent"}
                      />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </KeyboardAvoidingView>
            <TouchableOpacity
              style={styles.signinButton}
              onPress={() => navigation.navigate('Home')}
              activeOpacity={0.9}>
              <Text style={{color: '#453257', fontSize: 20, fontWeight: '500'}}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // height: height,
    flex:1
  },
  welcomePic: {
    flex: 1,
  },
  signinButton: {
    backgroundColor: '#D5EF7F',
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorFilter: {
    width: '100%',
    height: '100%',
    backgroundColor: '#8560A9B3',
  },
  logoBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#998F93',
    borderWidth: 1,
    width: 84,
    height: 84,
    borderRadius: 42,
  },
  insideBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#D5EF7F',
    borderWidth: 1,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  textBox: {
    marginTop: '20%',
    height: '24%',
    textAlign: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: '100%',
    fontSize: 18,
    color: '#453257',
    paddingLeft: 40,
    borderRadius: 25,
  },
  loginInput: {
    height: 50,
    borderRadius: 25,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 20,
    width: '70%',
  },
  inputSvg: {
    zIndex:100,
    position: 'absolute',
    top: 14,
    left: 14,
  },
});

export default Login;
