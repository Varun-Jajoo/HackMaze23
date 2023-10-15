import { View, Text, SafeAreaView, Pressable ,Image} from 'react-native'
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
                }}><Image source={require("../assets/Back.png")} style={{height:30,width:30}}/></Pressable>
                )
            }
      </View>
    </SafeAreaView>
  )
}

export default Header