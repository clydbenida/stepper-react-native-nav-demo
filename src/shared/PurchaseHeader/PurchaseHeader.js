import React, { useContext } from 'react'
import { View, StyleSheet, Text, Dimensions, Pressable } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'

import { PurchaseFlowContext } from '../context/PurchaseFlow';
import Stepper from './Stepper/Stepper';

const { height, width } = Dimensions.get('screen')

const PurchaseHeader = (props) => {
  const { purchaseFlowActions, purchaseState } = useContext(PurchaseFlowContext)
  console.log('CURRENT PURCHASE STATE', purchaseState)
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Pressable onPress={() => purchaseFlowActions.back(props.navigation)}>
          <Ionicons name='arrow-back-sharp' size={25} color='#000' />
        </Pressable>
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10 }}>{purchaseState.currentPosition.title}</Text>
      </View>
      <View style={styles.stepperContainer}>
        <Stepper />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: '#FFF',
  },
  upper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.05,
    marginVertical: 15,
  },
  stepperContainer: {
    paddingHorizontal: 15
  }
})

export default PurchaseHeader;
