import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Homepage from './src/screens/Homepage/Homepage'
import InsuranceMarketplace from './src/screens/InsuranceMarketplace/InsuranceMarketplace'
import { PurchasingRoot } from './src/navigations/PurchasingFlow'

export default function App() {
  const RootStack = createStackNavigator()
  return (
    <NavigationContainer>
      <StatusBar />
      {/* Set up react-navigation */}
      <RootStack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Home" component={Homepage} />
        <RootStack.Screen name="InsuranceMarketplace" component={InsuranceMarketplace} />
        <RootStack.Screen name="PurchasingRoot" component={PurchasingRoot} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}