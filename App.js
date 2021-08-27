/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppContext from './config/AppContext';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';


const Tab = createBottomTabNavigator()

const ButtonScreen = () =>{
  return null
}
const App= () => {
  const [openGlobalModalFor,setOpenGlobalModalFor] = useState(null)
  const navigationRef = useRef()
  
  const closeModal = ()=>{
    setOpenGlobalModalFor(null)
  }
  return (
   <AppContext.Provider value={{openGlobalModalFor,closeModal}}>
     <StatusBar
            backgroundColor="white"
                barStyle="dark-content"
            />
     <NavigationContainer
     ref={navigationRef}
     onStateChange={()=>{
      setOpenGlobalModalFor(null)
    }}
     >
       <Tab.Navigator initialRouteName="screen1" screenOptions={{tabBarShowLabel: false,}}>
         <Tab.Screen name="screen1" component={Screen1} options={{
           tabBarIcon:()=><Text>1</Text>,
           headerShown:false
           }} />
         <Tab.Screen name="buttonScreen" component={ButtonScreen} options={{
              tabBarIcon:(params)=>{
                return <View style={{width:50,height:50,backgroundColor:'orange',borderRadius:50,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:35,transform:[{rotate:openGlobalModalFor? "45deg" : "0deg"}]}}>+</Text></View>
              },
              
            }}
         listeners={(params)=>({
           tabPress:(event)=>{
             event.preventDefault()
             const currentScreenName = navigationRef.current.getCurrentRoute().name
              console.log(currentScreenName)
              if(openGlobalModalFor){
                setOpenGlobalModalFor(null)
              }
              else{
                if(currentScreenName == 'screen1'){
                  setOpenGlobalModalFor('screen1')
                }
                else if(currentScreenName == 'screen2'){
                  setOpenGlobalModalFor('screen2')
                }
              }

           }
         })}
         
          />
         <Tab.Screen name="screen2" component={Screen2} options={{
           tabBarIcon:()=><Text>2</Text>,
           headerShown:false
           }} />

       </Tab.Navigator>

     </NavigationContainer>

   </AppContext.Provider>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
