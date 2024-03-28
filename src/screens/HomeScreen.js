import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native"

const HomeScreen = ({navigation}) => {
    // console.log(props);
    const myName = 'Fardim kaiser';
    return (
        <View>
            <Text style={styles.text1}>Getting started with React Native!</Text>
            <Text style={styles.text2}>My name is {myName}</Text>
            {/* button is a self closing element */}
            <Button 
                onPress={() => navigation.navigate('Components')}
                title="Go to Components Demo" />
            <Button 
                onPress={() => navigation.navigate('List')}
                title="Go to List Demo" />
            <Button 
                onPress={() => navigation.navigate('Image')}
                title="Go to Image Screen" />
            <Button 
                onPress={() => navigation.navigate('Counter')}
                title="Go to Counter Screen" />
            <Button 
                onPress={() => navigation.navigate('Color')}
                title="Go to Color Screen" />
            {/* TouchableOpacity is not a self closing element */}
            {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
                <Text>Go to List Demo</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    text1: {
        fontSize: 45
    },
    text2: {
        fontSize: 20
    }
});

export default HomeScreen;