import React from 'react';
import { View, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

const App = () => {

  const response = ["rock", "paper", "scissors"];

  rock = () => {
    var choice = response[Math.floor(Math.random()* response.length)];
    if(choice === response[0]){
      ToastAndroid.show("Tie!", ToastAndroid.LONG);
    }else if(choice === response[1]){
      ToastAndroid.show("You Lost!", ToastAndroid.LONG);
    }else if(choice === response[2]){
      ToastAndroid.show("You Lost!", ToastAndroid.LONG);
    }
  }

  paper = () => {
    var choice = response[Math.floor(Math.random()* response.length)];
    if(choice === response[1]){
      ToastAndroid.show("Tie!", ToastAndroid.LONG);
    }else if(choice === response[2]){
      ToastAndroid.show("You Lost!", ToastAndroid.LONG);
    }else if(choice === response[0]){
      ToastAndroid.show("You Lost!", ToastAndroid.LONG);
    }
  }

  scissors = () => {
    var choice = response[Math.floor(Math.random()* response.length)];
    if(choice === response[2]){
      ToastAndroid.show("Tie!", ToastAndroid.SHORT);
    }else if(choice === response[0]){
      ToastAndroid.show("You Lost!", ToastAndroid.SHORT);
    }else if(choice === response[1]){
      ToastAndroid.show("You Lost!", ToastAndroid.SHORT);
    }
  }

  return (
    <View style={styles.conatiner}>
      <TouchableOpacity onPress={this.rock}>
        <Icon name={"hand-rock"} style={styles.icon} />
      </TouchableOpacity>
      <View style={{flexDirection: "row"}}>
        <TouchableOpacity onPress={this.paper}>
          <Icon name="hand-paper" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.scissors}>
          <Icon name="hand-scissors" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50
  },

  icon: {
    fontSize: 130,
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    padding: 20,
    
  }
})

export default App;
