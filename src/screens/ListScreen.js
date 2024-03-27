import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";


const Item = ({title}) => {
    console.log(title);
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};

const ListScreen = () => {
    const friendList = [
        {key: '1',name: 'Fardim', age: 1 },
        {key: '2',name: 'Kaiser', age: 2 },
        {key: '3',name: 'Joe', age: 3 },
        {key: '4',name: 'Jobar', age: 4 },
        {key: '5',name: 'Friend 5', age: 5 },
        {key: '6',name: 'Friend 6', age: 6 },
        {key: '7',name: 'Friend 7', age: 7 },
        {key: '8',name: 'Friend 8', age: 8 },
        {key: '9',name: 'Friend 9', age: 9 },
        {key: '10',name: 'Friend 10', age: 10 },
        {key: '11',name: 'Friend 11', age: 11 },
        {key: '12',name: 'Friend 12', age: 12 },
    ];
    return (
        // <SafeAreaView style={styles.container}>
        // </SafeAreaView>
            <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={true}
                data={friendList}
                renderItem={({item}) => {
                    return (
                        // <Item title={item.name} />
                            <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
                    )
                }}
                keyExtractor={item => item.key}
            />
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      color: 'black',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    textStyle: {
        marginVertical: 50
    }
  });

export default ListScreen;