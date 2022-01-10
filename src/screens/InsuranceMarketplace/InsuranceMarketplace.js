import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

const InsuranceMarketplace = (props) => {
  return (
    <View style={styles.container}>
      <Text>Insurance Marketplace!</Text>
      <Button title='Purchase Product' onPress={() => props.navigation.navigate('PurchasingRoot')} />
      <Button title='Go to Homepage' onPress={() => props.navigation.navigate('Home')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  }
})

export default InsuranceMarketplace