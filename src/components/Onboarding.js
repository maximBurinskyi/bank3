import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Butterfly from '../Icons/Butterfly';
import {Box} from './theme';


function Onboarding({navigation}) {
  const {navigate} = navigation; 

  const onRegister = () => {
    navigate('Register');
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

      </View>
    </View>
  );
}
export default Onboarding;