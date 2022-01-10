import React, { useContext } from 'react'
import { View } from 'react-native'
import StepIndicator from 'react-native-step-indicator'

import { PurchaseFlowContext } from '../../context/PurchaseFlow'
import Check from './Check'
import { PURCHASE_FLOW } from '../../context/PurchaseFlow/reducer'

const Stepper = () => {
  const { purchaseState } = useContext(PurchaseFlowContext)
  return (
    <View style={{ width: '100%' }}>
      <StepIndicator
        currentPosition={purchaseState?.currentPosition?.index}
        // labels={["First", "Second", "Third", "Fourth", "Fifth", "Sixth"]}
        customStyles={customStyles}
        stepCount={PURCHASE_FLOW.length}
        renderStepIndicator={Check}
      />
    </View>
  )
}

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: '#19A1AA',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#19A1AA',
  stepStrokeUnFinishedColor: '#EBEBEB',
  separatorFinishedColor: '#19A1AA',
  separatorUnFinishedColor: '#EBEBEB',
  stepIndicatorFinishedColor: '#19A1AA',
  stepIndicatorUnFinishedColor: '#FFF',
  stepIndicatorCurrentColor: '#EBEBEB',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#EBEBEB',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#EBEBEB',
  labelColor: '#EBEBEB',
  labelSize: 13,
  currentStepLabelColor: '#EBEBEB'
}

export default Stepper