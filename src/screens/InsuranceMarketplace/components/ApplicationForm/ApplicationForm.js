import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Text, Button, BackHandler } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { PurchaseFlowContext } from '../../../../shared/context/PurchaseFlow'

const ApplicationForm = (props) => {
  const { purchaseFlowActions } = useContext(PurchaseFlowContext)
  const isFocused = useIsFocused()

  useEffect(() => {
    const onBack = () => {
      purchaseFlowActions.back(props.navigation)
      return true
    }

    const backHandler = BackHandler.addEventListener("hardwareBackPress", onBack)
    return () => {
      backHandler.remove()
    }
  }, [isFocused])
  return (
    <View style={styles.container}>
      <Text>Application Form</Text>
      <Button title='Next' onPress={() => purchaseFlowActions.next(props.navigation)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  }
})

export default ApplicationForm;
