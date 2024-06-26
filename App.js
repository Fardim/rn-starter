import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import { NavigationContainer } from '@react-navigation/native';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScrren';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Components" component={ComponentsScreen} options={{
          title: 'Awesome app',
        }} />
      <Stack.Screen name="List" component={ListScreen} options={{
          title: 'List Screen',
        }} />
      <Stack.Screen name="Image" component={ImageScreen} options={{
          title: 'Image Screen',
        }} />
      <Stack.Screen name="Counter" component={CounterScreen} options={{
          title: 'Counter Screen',
        }} />
      <Stack.Screen name="Color" component={ColorScreen} options={{
          title: 'Color Screen',
        }} />
      <Stack.Screen name="Square" component={SquareScreen} options={{
          title: 'Square Screen',
        }} />
      <Stack.Screen name="Text" component={TextScreen} options={{
          title: 'Text Screen',
        }} />
      <Stack.Screen name="Box" component={BoxScreen} options={{
          title: 'Box Screen',
        }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
