import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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

//import { Cards } from './src/Icons';


const Stack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

export default function App() {

  const TabStackScreen = () => {
    return (
      <TabStack.Navigator>
        <TabStack.Screen name='Dashboard' component={Dashboard} />
        <TabStack.Screen name='Card' component={Card} />
         <TabStack.Screen name='Transactions' component={Transactions} />
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
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Register" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Tab" component={TabStackScreen} />
         <Stack.Screen name="Send" component={Send} /> 
         <Stack.Screen name="SendMoney" component={SendMoney} /> 


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
