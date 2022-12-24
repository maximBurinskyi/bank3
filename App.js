import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Onboarding from './src/components/Onboarding';
import Signup from './src/components/Signup';
import { NativeBaseProvider, Box } from "native-base";
import {Provider} from 'react-redux';

import store from './src/store';
import Login from './src/components/Login';
import Password from './src/components/Password';
import Dashboard from './src/components/Dashboard';
import Tab from './src/components/Tab';
import Card from './src/components/Dashboard/Card';
import Transactions from './src/components/Dashboard/Transactions';
import More from './src/components/Dashboard/More';
import Send from './src/components/Dashboard/Send';
import SendMoney from './src/components/Dashboard/SendMoney';
import Request from './src/components/Dashboard/Request';
import RequestMoney from './src/components/Dashboard/RequestMoney';
import { useLayoutEffect } from 'react';
import {MaterialIcons} from '@expo/vector-icons';


//import { Cards } from './src/Icons';




export default function App() {
  const Stack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

  const tabBarOptions = {
    'tabBarShowLabel': false,
  }

  const screenOptions = {
    showLabel: true,
    style: {
      backgroundColor: "#1e1e1e",
      borderTopColor: "#1e1e1e",
      paddingBottom: 32,
      //tabBarActiveTintColor: "#59C1CC",
      //tabBarInactiveTintColor: 'red',
    }
  }

  const TabStackScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      })
    }, [])

    return (
      <TabStack.Navigator 
      screenOptions={({ route}) => ({
        tabBarStyle: {
          backgroundColor: '#1e1e1e',
        },
        tabBarIcon: ({ focused }) => {
          let icon = "";
          const color = focused ? "#559dff" : "#828282";
          const size = 24;
    
          switch(route.name) {
            case "Card":
              icon = "credit-card";
              break;
  
             case "SendRequest":
              icon="send";
              break; 

              case "More":
                icon = "more-vert";
                break;
    
              default:
                icon = "dashboard";
    
          }
          return <MaterialIcons name={icon} size={size} color={color} />
  
      },
      })}
      
      >
        <TabStack.Screen name='Dashboard' component={Dashboard} options={{headerShown: false}} />
        <TabStack.Screen name='Card' component={Card} options={{headerShown: false}} />
         {/* <TabStack.Screen name='Transactions' component={Transactions} /> */}
        <TabStack.Screen name='More' component={More} /> 

      </TabStack.Navigator>
    )
  }

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app22333!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Provider store={store}>
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}  />
        <Stack.Screen name="Register" component={Signup} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Password" component={Password} options={{headerShown: false}}  />
        <Stack.Screen name="Tab" component={TabStackScreen} />
         <Stack.Screen name="Send" component={Send} options={{headerShown: false}} /> 
         <Stack.Screen name="SendMoney" component={SendMoney} /> 
         <Stack.Screen name="Request" component={Request} />
         <Stack.Screen name="RequestMoney" component={RequestMoney} />


        {/* <Stack.Screen name="Card" component={Card} />  */}

          <Stack.Screen name="Dashboard" component={Dashboard} />  
         {/* <Stack.Screen name="Tab" component={Tab} />  */}
        

      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
