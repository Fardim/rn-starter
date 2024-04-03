import React, { useReducer, useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

// autoCapitalize and autoCorrect are for iphone
const BoxScreen = () => {

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child # 1</Text>
      <Text style={styles.textStyle}>Child # 2</Text>
      <Text style={styles.textStyle}>Child # 3</Text>
      <Text style={styles.textStyle}>Child # 4</Text>
    </View>

  );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        height: 200
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
    }
});

export default BoxScreen;
