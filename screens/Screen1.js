import React,{useContext} from 'react'
import { View, Text, TouchableOpacity,} from 'react-native'
import AppContext from '../config/AppContext'
import {SafeAreaView} from 'react-native-safe-area-context'

export default function Screen1() {
    const AppState = useContext(AppContext)
    
    return (
        <SafeAreaView edges={['top','right','left']}>

       
        <View style={{position:'relative',width:'100%',height:'100%',backgroundColor:AppState.openGlobalModalFor=='screen1'? 'rgba(0,0,0,0.4)' : 'transparent'}}>
            
            <Text style={{fontSize:40,textAlign:'center'}}>Screen1</Text>

            
            {AppState.openGlobalModalFor=='screen1' && (
                <View style={{width:'100%',height:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
                    <View style={{position:'absolute',backgroundColor:'white',width:'70%',height:'40%',borderRadius:15,padding:20}}>
                        <TouchableOpacity onPress={AppState.closeModal} style={{borderBottomWidth:1}}>
                            <Text  style={{fontSize:25,textAlign:'right'}}>X</Text>
                        </TouchableOpacity>
                        <View style={{padding:10}}>

                        <Text>This is modal content for screen1</Text>
                        </View>

                    </View>

                </View>
            )}
        </View>
        </SafeAreaView>
    )
}
