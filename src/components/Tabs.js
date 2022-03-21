import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import { IMAGES } from '../constants/themes';
import Folder from '../screens/Folder';
import Setting from '../screens/Setting';
import Add from '../screens/Add';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  const customTabBarStyle = {
    activeTintColor: '#0091EA',
    inactiveTintColor: 'gray',
    style: {backgroundColor: 'white' },
}
  return (

    <Tab.Navigator
    
      screenOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,

        },
      }}>
      <Tab.Screen
        name="Folder"
        component={Folder}
        options={{
          tabBarIconStyle: ({ focussed }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image

                source={IMAGES.degree}
                resizeMode='contain'
                style={{ width: 25, height: 25, tintColor: focussed ? '#e32f45' : '#748c94' }}
              />
              <Text style={{ color: focussed ? '#e32f45' : '#748c94' }}>Folder</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIconStyle: ({ focussed }) => (
            <View
              style={{
                position: 'absolute',
                bottom: 0, // space from bottombar
                height: 68,
                width: 68,
                borderRadius: 68,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image

                source={IMAGES.plus}
                resizeMode='contain'
                style={{ width: 25, height: 25, tintColor: focussed ? '#e32f45' : '#748c94' }}
              />
              <Text style={{ color: focussed ? '#e32f45' : '#748c94' }}>Folder</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Setting" component={Setting} />

    </Tab.Navigator>

  );
};

export default Tabs;