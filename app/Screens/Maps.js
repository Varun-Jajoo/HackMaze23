import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import { useLocationContext } from '../LocationContext'
export default function Maps() {
  const {location} = useLocationContext();

  return (
   
      <WebView
    source={{ uri: `https://www.google.com/maps/search/parks+near+me/@${location?.coords?.latitude},${location?.coords?.longitude},12z?entry=ttu` }}
    style={{marginTop:40}}
  />
    
    
  )
}