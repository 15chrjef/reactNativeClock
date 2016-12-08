import Exponent from 'exponent';
import React from 'react';
import { Font } from 'exponent';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      time: Date(),
      fontLoaded: false,
    }
  }
  componentDidMount() {
     Font.loadAsync({
      OpenSans: require('./assets/fonts/OpenSans-Bold.ttf'),
      Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
      Aref: require('./assets/fonts/ArefRuqaa-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  componentWillMount(){
    var self = this;
    setInterval( function(){
      var time = Date()
      time = time.slice(time.indexOf(':') - 3, time.indexOf('G') -1)
      self.setState({
        time: time
      })
    })
  }
  render() {
    if(this.state.fontLoaded) {
       return (
          <View style={styles.container}>
            <View style={styles.clock}>
              <Text style={{ fontFamily: Font.Aref, fontSize: 50 }}>{this.state.time}</Text>
            </View>
          </View>
        );
    } else {
      return (
        <View><Text>Loading...</Text></View>
      )
    }
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clock: {
    borderRadius: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 10,
    width: 260,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 50
  }
});

Exponent.registerRootComponent(App);
