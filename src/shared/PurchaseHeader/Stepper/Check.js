import React from 'react'
import { Foundation } from 'react-native-vector-icons'

const Check = ({ position, stepStatus }) => {
  return (
    <Foundation
      name='check'
      style={{
        color: stepStatus == 'current' ? '#19A1AA' : stepStatus == 'finished' ? '#ffffff' : '#ebebeb'
      }}
    />
  )
}

export default Check