
import React from 'react';
import { Text, View } from 'react-native';
import Screen1 from './Screen1';
import Screen3 from './Screen3';
import Screen2 from './Screen2';
import ScreenWin from './ScreenWin';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function App () {
  return (
    <>
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Screen1} options={{headerShown:false}} />
          <Stack.Screen name="Level" component={Screen2} options={{headerShown:false}}/>
          <Stack.Screen name="Game" component={Screen3} options={{headerShown:false}}/>
          <Stack.Screen name="Win" component={ScreenWin} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Screen1></Screen1> */}
    </>
  )
}

export default App;
