import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/screens/Home';
import Slider from './src/screens/Slider'
// import Tabs from './src/components/Tabs';
const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="SliderScreen"
          screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="SliderScreen" component={Slider} />
        <Stack.Screen name="HomeScreen" component={Home} />
        {/* <Stack.Screen name="Tabs" component={Tabs} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
