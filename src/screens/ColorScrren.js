import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        onPress={() => {
            setColors([...colors, randomRgb()]);
            console.log(colors)
        }}
        title="Add a color"
      />

      <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={true}
                data={colors}
                extraData={colors}
                renderItem={({item}) => {
                    console.log(item)
                    return (
                        <View style={{height: 100, width: 100, backgroundColor: `${item}`}}></View>
                    );
                }}
                keyExtractor={(item, index) => index}
            />
    </View>
  );
};

const styles = StyleSheet.create({});

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorScreen;
