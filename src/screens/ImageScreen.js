import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native"
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/forest.png')} score={9} />
            <ImageDetail title="Beach" imageSource={require('../../assets/beach.png')} score={6} />
            <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.png')} score={8} />
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ImageScreen;