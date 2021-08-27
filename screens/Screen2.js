import React,{useContext}  from 'react'
import { View, Text } from 'react-native'
import AppContext from '../config/AppContext'
import {SafeAreaView} from 'react-native-safe-area-context'



export default function Screen2() {
    const AppState = useContext(AppContext)
    console.log(AppState)
    return (
        <SafeAreaView edges={['top','right','left']}>

        
        <View style={{width:'100%',height:'100%',position:'relative',backgroundColor:AppState.openGlobalModalFor=='screen2' ? 'rgba(0,0,0,0.5)' : 'transparent'}}>
            <Text style={{textAlign:'center',fontSize:40}}>Screen 2</Text>
            {
                AppState.openGlobalModalFor=='screen2' && (
                    <View style={{position:'absolute',bottom:20,width:'100%',height:200,flexDirection:'row',justifyContent:'center',alignItems:'center',}}>

                        <View style={{width:'60%',height:'100%',backgroundColor:'white',padding:20,borderRadius:20}}>
                            <Text>This is second screen trigger action</Text>
                        </View>

                        <View style={{position:'absolute',bottom:0,flexDirection:'row',justifyContent:'center',width:'100%'}}>

                        <View style={{backgroundColor:'white',width:50,height:50,transform:[{rotate:"45deg"}]}}>

                        </View>
                        </View>
                    </View>

                )
            }

        </View>
        </SafeAreaView>
    )
}
