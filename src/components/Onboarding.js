import  React, {useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Butterfly from '../Icons/Butterfly';
import {Box} from './theme';
import {StackActions} from '@react-navigation/native';



function Onboarding({navigation}) {
  const {navigate} = navigation; 
  const {isAuthenticated} = useSelector(state => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigation.dispatch(StackActions.replace('Dashboard'));
    }
  }, [isAuthenticated]);

  const onRegister = () => {
    navigate('Register');
  }

  const onLogin = () => {
    navigate('Login');
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ height: 0.65}} >
        <View style={{ flexDirection:'row', justifyContent:'center',
         alignItems:'center'}}>
          <Text variant>
            <Butterfly style={{width: 40, height: 40}} />
          </Text>
          <Box>
            <Text>344</Text>
          </Box>
        </View>
      </View>
      <Text>Onboarding</Text>
      <View style={{flex: 1}}>

        <TouchableOpacity onPress={onRegister}>
          <View style={{ 
          borderRadius: 'medium',
          
          }}>
            <Text style={{textAlign: 'center', fontSize: 18}}>Create an account</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onLogin}>
          <View style={{ 
          borderRadius: 'medium',
          
          }}>
            <Text style={{textAlign: 'center', fontSize: 18}}>Login</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
}
export default Onboarding;