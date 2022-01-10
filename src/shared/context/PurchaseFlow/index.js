import React, { useReducer } from 'react'
import { initialState, PURCHASE_FLOW, reducer } from './reducer'

export const PurchaseFlowContext = React.createContext()

export const PurchaseFlowProvider = (props) => {
  const [purchaseState, dispatch] = useReducer(reducer, initialState)

  const actions = {
    next: (navigation) => {
      dispatch({ type: 'next' })
      navigation.navigate(PURCHASE_FLOW[purchaseState.currentPosition.index + 1].routeName)
    },
    back: (navigation, type) => {
      if (purchaseState.currentPosition.index == 0) {
        navigation.navigate('InsuranceMarketplace')
      } else {
        dispatch({ type: 'back' })
        navigation.navigate(PURCHASE_FLOW[purchaseState.currentPosition.index - 1].routeName)
      }
    }
  }

  return (
    <PurchaseFlowContext.Provider value={{ purchaseFlowActions: actions, purchaseState }}>
      {props.children}
    </PurchaseFlowContext.Provider>
  )
}