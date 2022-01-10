import React from 'react'
import { Foundation } from 'react-native-vector-icons'

const Check = ({ position, stepStatus }) => {
  return (
    <Foundation
      name='check'
      style={{
        color: stepStatus == 'current' || stepStatus == 'finished' ? '#ffffff' : '#ebebeb',
        backgroundColor: stepStatus == 'current' || stepStatus == 'finished' ? '#19A1AA' : '#ffffff'
      }}
    />
  )
}

export default Check