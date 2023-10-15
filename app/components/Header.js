import { View, Text, SafeAreaView, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useUserContext } from '../UserContext';
const Header = ({home}) => {
    const navigation = useNavigation();
    const {user} = useUserContext();
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
      <View style={{paddingHorizontal:home?25:20, marginTop:home?-20:10, display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',width:'100vw',gap:65}}>
        {
          home && (
            <View>

            <Text style={{fontSize:32}}>Welcome, </Text>
          <Text style={{fontSize:24}}>
            {user?.data?.first_name?user?.data?.first_name+"!":"User!"}
            </Text>
            </View>
          )
        }
        {
            !home && (

                <Pressable style={{backgroundColor:"#f67ea9",padding:2, width:60, height:60, borderRadius:100, display:"flex", justifyContent:'center', alignItems:'center'}} onPress={()=>{
                    navigation.goBack()
                }}><Text style={{fontSize:32}}>{"<"}</Text></Pressable>
                )
            }
            <View>
              <Pressable onPress={()=>{}}>
              <Image source={require('../assets/avatar/dadaji-removebg-preview.png')} style={{ height: 80, width:80, resizeMode: 'cover',backgroundColor:"#1c455b",borderRadius:100,margin:10}} />

              </Pressable>
            </View>
      </View>
    </SafeAreaView>
  )
}

export default Header