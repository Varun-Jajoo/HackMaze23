import { View, Text } from 'react-native'
import React from 'react'

const Exercise = () => {
  return (
    <WebView
    source={{ uri: `https://www.google.com/maps/search/parks+near+me/@${location?.coords?.latitude},${location?.coords?.longitude},12z?entry=ttu` }}
    style={{marginTop:40}}
  />
  )
}

export default Exercise