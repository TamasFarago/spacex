import { Text, View } from 'react-native'
import React, {useState} from 'react'
import useFetch from '../../Hooks/useFetch'

const Latest = () => {
  const {launches} = useFetch({endpoint: "past"})

  console.log("LATEST", launches)
  return (
    <View>
      <Text>Latest</Text>
    </View>
  )
}

export default Latest