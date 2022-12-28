import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
//import theme, {Box, Text} from '../theme';
import {Input, Form, Item, Button, Stack} from 'native-base';
import {StackActions} from '@react-navigation/native';
import {register, login, transactions} from '../store/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import theme from './theme';
import styled from 'styled-components';
import axios from 'axios';


const styles = StyleSheet.create({
    itemStyle: {
        marginTop: 20,
        paddingLeft: 20,
        color: 'white'
    },
    btnStyle: {
        width: '100%', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#393939',
        borderRadius: 5,
        marginTop: 10
    }
});

function Password({navigation, route}) {
    const {navigate} = navigation;
    const dispatch = useDispatch();
    const [password, setPassword] = useState('max');
    const {data, type} = route.params;
    const [appState, setAppState] = useState([]);

    const {isAuthenticated} = useSelector(state => state.auth);

    const {msg} = useSelector(state => state.err);

    const onSubmit = () => {
        if (type === 'REGISTER') {
            const {name, email, password, phone, userRef} = data;

            const newUser = {
                name,
                email,
                phone,
                userRef,
                password,
            };

            dispatch(register(newUser));
    
        } else if (type === 'LOGIN') {
            const {email} = data;
            dispatch(login({email, password}))
            //dispatch(transactions(email))
        }
    }
    

    useEffect(() => {
        if (isAuthenticated) {
            navigation.dispatch(StackActions.replace('Tab'))
        }

    }, [isAuthenticated])


    const number = { account_number: '70506186133'};

    useEffect(() => {

        axios.post('http://127.0.0.1:5000/transactions', number)
            .then((res) => {
              //dispatch({type: USER_LOADED, payload: res.data});
              //console.log(res.data);

              const transactions = res.data;
              setAppState(transactions);
            })
            .catch((err) => {
              //dispatch({type: AUTH_ERROR});
              //AsyncStorage.removeItem('@token');
            });

    }, [])



        //console.log(appState)


  return (
    <View style={{flex: 1, backgroundColor: '#1e1e1e', justifyContent: 'flex-start',
    position: 'relative'}}>
        <View style={{paddingHorizontal: theme.spacing.m, 
            paddingVertical: theme.spacing.m, marginTop: theme.spacing.m}}>
                            <Text style={{marginTop: theme.spacing.m, color: 'white', paddingTop: theme.spacing.l, alignItems: 'center' }}>You need to provide your password below </Text>

            <View>
                <View>{msg ? (<Text>{msg}</Text>) : null}</View>
            </View>


            <TextInput 
                    style={styles.itemStyle}
                    placeholder="Password"
                    onChangeText={newText => setPassword(newText)}
                    defaultValue={password}
                    />

            <Button
                    style={styles.btnStyle}
                    onPress={onSubmit}
                    >
                        <Text style={{fontSize: 18, color: 'white', fontWeight: '700'}}>
                        {type === 'LOGIN' ? 'Login' : 'Register'}    
                        </Text>
                    </Button>
        </View>
    </View>
  )
}

export default Password;