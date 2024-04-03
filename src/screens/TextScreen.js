import React, { useReducer, useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

// autoCapitalize and autoCorrect are for iphone
const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput 
        value={name}
        onChangeText={(newText) => setName(newText)}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false} />
      <Text>My name is {name}</Text>

      <Text>Enter password:</Text>
      <TextInput 
        value={password}
        onChangeText={(newText) => setPassword(newText)}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false} />
      {password.length < 5 ? <Text>Password must be longer than 5 characters</Text> : null }
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;
