import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'


const Homepage = (props) => {
  return (
    <View style={styles.container}>
      <Text>Homepage</Text>
      <Button title="Go to Marketplace" onPress={() => props.navigation.navigate('InsuranceMarketplace')} />
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

export default Homepage