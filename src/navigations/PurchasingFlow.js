import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { getHeaderTitle } from '@react-navigation/elements'

import PurchaseHeader from '../shared/PurchaseHeader/PurchaseHeader'
import ProposalForm from '../screens/InsuranceMarketplace/components/ProposalForm/ProposalForm'
import RequiredDocuments from '../screens/InsuranceMarketplace/components/RequiredDocuments/RequiredDocuments'
import ApplicationForm from '../screens/InsuranceMarketplace/components/ApplicationForm/ApplicationForm'
import { PurchaseFlowProvider, PurchaseFlowContext } from '../shared/context/PurchaseFlow'
import { PURCHASE_FLOW } from '../shared/context/PurchaseFlow/reducer'

const PurchaseStack = createStackNavigator()
const PurchaseTabs = createMaterialTopTabNavigator()

export const PurchasingRoot = () => {
  return (
    <PurchaseFlowProvider>
      <PurchaseStack.Navigator
        screenOptions={{
          headerMode: 'screen',
          header: ({ navigation, route, options, back }) => {
            const title = getHeaderTitle(options, route.name)
            return (
              <PurchaseHeader title={title} navigation={navigation} />
            )
          }
        }}
      >
        <PurchaseStack.Screen name='Purchasing' component={PurchasingFlow} />
      </PurchaseStack.Navigator>
    </PurchaseFlowProvider>
  )
}

const PurchasingFlow = (props) => {
  return (
    <PurchaseTabs.Navigator
      screenOptions={{
        swipeEnabled: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          top: -1,
          height: 0,
          borderColor: '#FFF'
        },
      }}
      backBehavior='order'
    >
      <PurchaseTabs.Screen name='ProposalForm' component={ProposalForm} />
      <PurchaseTabs.Screen name='RequiredDocuments' component={RequiredDocuments} />
      <PurchaseTabs.Screen name='ApplicationForm' component={ApplicationForm} />
    </PurchaseTabs.Navigator>
  )
}