import React, { useContext } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { PurchaseFlowContext } from '../../../../shared/context/PurchaseFlow'

const ProposalForm = (props) => {
  const { purchaseFlowActions } = useContext(PurchaseFlowContext)
  return (
    <View style={styles.container}>
      <Text>Proposal Form</Text>
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

export default ProposalForm;
