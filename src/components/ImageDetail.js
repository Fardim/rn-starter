import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ImageDetail = ({title, imageSource, score}) => {
    return (
        <View>
            <Image style={styles.small} source={imageSource}></Image>
            <Text>{title}</Text>
            <Text>Image score - {score}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    small: {
        width: 200,
        height: 200
    }
});

export default ImageDetail;