import React, {useState} from 'react';
import { TextInput, View, Text } from 'react-native';
import theme from '../theme';
//import theme, {Box, Text} from '../theme';
//import {Nigeria} from '../../Icons';
import {Nigeria} from '../../Icons';
import { Button } from 'native-base';
//import {TextInput} from 'react-native-gesture-handler';
//import {Button} from 'native-base';

import { useDispatch } from 'react-redux';
//import { socket, roomID, receiver } from '../store/actions/transactionAction';
import {socket, roomID} from '../../store/actions/transactionAction';






function Send({navigation}) {
    const [amount, setAmount] = useState('');
    const {navigate} = navigation;
    const dispatch = useDispatch();


    const onSend = () => {
        if (amount < 100) {
            alert('Amount is less than 100')
        } else  {
            navigate('SendMoney', {amount})
        }
        // new Promise(function (res) {
        //     res(navigate('SendMoney', {amount}));
        // }).then(() => {
        //     socket.emit('joinService', {roomID});
        // })
        
    }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'green',
    flexDirection: 'row', justifyContent: 'space-between', 
    alignItems: 'center', paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.l}}>

        <View>
            <Text style={{color: 'black',
        marginBottom: theme.spacing.s,
         fontWeight: 'bold'}}>Amount of send</Text>
        

        <TextInput placeholder='0.00' 
        style={{
            padding: 7,
         height: 50, 
         width: '100%',
          fontWeight: 'bold', 
          fontSize: 23}}
        keyboardType='number-pad' 
        placeholderTextColor='#000'
         defaultValue={amount}
        onChangeText={(amount) => setAmount(amount)} />
    
    </View>
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderLeftWidth: 1,
        paddingLeft: theme.spacing.m,
    }}>
        <Nigeria style={{height: 20, with: 20}} />
        <Text style={{marginLeft: theme.spacing.s, 
            variant: 'body',
             fontSize: 13,
              color: 'black'}}>NGN</Text>
              </View>
    </View>
    <View style={{marginTop: theme.spacing.l}}>
        <Button style={{
            width: '100%',
            backgroundColor: theme.colors.barter,
            textAlign: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            paddingVertical: 12
        }} onPress={onSend}>
            <Text style={{fontSize: 23, fontWeight: 'bold'}}>Continue</Text>
        </Button>
    </View>
    </View>
  )
}

export default Send;