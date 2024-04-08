import React, { useReducer, useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

// autoCapitalize and autoCorrect are for iphone
const BoxScreen = () => {

  return (
    <View style={styles.viewStyle}>
      {/* <Text style={styles.textOneStyle}>Child # 1</Text>
      <Text style={styles.textTwoStyle}>Child # 2</Text>
      <Text style={styles.textThreeStyle}>Child # 3</Text> */}
      <View style={{height: 100, width: 100, backgroundColor: `gray`}}></View>
      <View style={styles.viewStyleMiddle}></View>
      <View style={{height: 100, width: 100, backgroundColor: `bisque`}}></View>
    </View>

  );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "flex-start",
        height: 300
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
    
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        ...StyleSheet.absoluteFillObject // same as the bottom 5 line
        // position: "absolute",
        // top: 0,
        // right: 0,
        // bottom : 0,
        // left: 0
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
    },
    viewStyleMiddle: {
      height: 100,
      width: 100,
      backgroundColor: `bisque`,
      alignSelf: "flex-end"
      // marginTop: 100,
    }
});

export default BoxScreen;
