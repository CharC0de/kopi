import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../app/screens/HomeScreen';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <DrawerNavigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
    </DrawerNavigator>
  )
}

export default DrawerNavigator