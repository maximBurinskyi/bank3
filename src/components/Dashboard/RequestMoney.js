import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
//import theme, {Box, Text} from '../theme';
import {Button} from 'native-base';
//import {StackActions} from '@react-navigation/native';
//import {send} from '../../store/actions/transactionAction';
import {useDispatch} from 'react-redux';
import theme from '../theme';
import {request, send} from '../../store/actions/transactionAction';
import {StackActions} from '@react-navigation/native';



function RequestMoney({navigation, route}) {
    const {amount} = route.params;
    const dispatch = useDispatch();
    const [purpose, setPurpose] = useState('');
    const [account, setAccount] = useState('');

    const onSend = () => {
        const data = {
            amount: +amount,
            purpose,
            account: +account,
        };
        console.log(data);
        dispatch(request(data));
        navigation.dispatch(StackActions.replace('Dashboard'));
    }
  return (
    <View style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.l
    }}>
        <Text style={{marginBottom: theme.spacing.l}}>Recepient's details</Text>
        <View style={{borderBottomWidth: 1, paddingVertical: theme.spacing.m,
        paddingHorizontal: theme.spacing.m}}>
            <Text style={{fontWeight: '900', fontSize: 15}}>Bolt Skills Bank plc</Text>
        </View>
        <View style={{borderBottomWidth: 1, paddingVertical: theme.spacing.m, marginBottom: theme.spacing.m}}>
            <TextInput 
            placeholder='Account Number'
            style={{
                width: '100%',
                fontSize: 15,
                paddingVertical: 0
            }}
            keyboardType='number-pad'
            placeholderTextColor='#000'
            defaultValue={account}
            onChangeText={text => setAccount(text)}
            />
        </View>
        <View style={{borderBottomWidth: 1, paddingVertical: theme.spacing.m,
        marginBottom: theme.spacing.m}}>
             <TextInput 
            placeholder='Purpose'
            style={{
                width: '100%',
                fontSize: 15,
                paddingVertical: 0
            }}
            placeholderTextColor='#000'
            defaultValue={purpose}
            onChangeText={text => setPurpose(text)}
            />
        </View>
        <View style={{
            marginTop: theme.spacing.m,

        }}>
            <Button style={{
                width: '100%',
                backgroundColor: theme.colors.barter,
                textAlign: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                paddingVertical: 12
            }} onPress={onSend}>
                <Text style={{fontSize: 23, fontWeight: 'bold'}}>
                    Continue
                </Text>
            </Button>
        </View>
    </View>
  )
}

export default RequestMoney;