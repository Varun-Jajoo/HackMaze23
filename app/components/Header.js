import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const Header = ({home}) => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
      <View style={{paddingHorizontal:20, marginTop:10}}>
        {
            !home && (

                <Pressable style={{backgroundColor:"#f67ea9",padding:2, width:60, height:60, borderRadius:100, display:"flex", justifyContent:'center', alignItems:'center'}} onPress={()=>{
                    navigation.goBack()
                }}><Text style={{fontSize:32}}>{"<"}</Text></Pressable>
                )
            }
      </View>
    </SafeAreaView>
  )
}

export default Header