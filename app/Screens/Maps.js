import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
export default function Maps() {
  return (
   
      <WebView
    source={{ uri: "https://www.google.com/maps/search/parks+near+me/@19.0631522,72.7069402,12z?entry=ttu" }}
    style={{marginTop:40}}
  />
    
    
  )
}