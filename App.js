import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.maintext}>Waffles are nice! They are the best!!</Text>
        <Image
          style={styles.mainImage}
          source={{
            uri: "https://www.wellplated.com/wp-content/uploads/2016/01/Blender-Whole-Wheat-Waffles-Recipe.jpg"
         }}
        />

      <Button
          onPress={this._moreWaffle}
          title="Click me to learn more about waffles!"
        />

      </View>
    );

  }

  _moreWaffle = () => {
    Alert.alert("Go and get waffles now they are amazing!!!")
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainImage: {
    borderColor: "#6171A7",
    borderWidth: 10,
    width: 350,
    height: 350
  },

  maintext: {
    color: "steelblue"
  }
});
