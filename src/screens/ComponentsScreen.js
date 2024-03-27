import React from "react";
import { StyleSheet, Text, View } from "react-native";


const ComponentsScreen = () => {
    const greeting = <Text>Bye there!</Text>;
    return (
        <View>
            <Text style={styles.textStyle}>This is the ComponentsScreen</Text>
            {greeting}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;