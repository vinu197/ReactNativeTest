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
 
  return (

    <Tab.Navigator
      initialRouteName="Folder"
      tabBarOptions={{
        activeTintColor: '#42f44b',
      }}>
      <Tab.Screen
        name="Folder"
        component={Folder}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={IMAGES.degree}
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Plus"
        component={Add}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={IMAGES.plus}
              style={{
                position: 'absolute',
                bottom: 0,
                height: 68,
                width: 68,
                borderRadius: 70,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        style={{screenLeft:10}}
        component={Setting}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={IMAGES.setting}
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>

  );
};

export default Tabs;