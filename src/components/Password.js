import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
//import theme, {Box, Text} from '../theme';
import {Input, Form, Item, Button, Stack} from 'native-base';
import {StackActions} from '@react-navigation/native';
import {register, login} from '../store/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';


const styles = StyleSheet.create({
    itemStyle: {
        marginTop: 20,
        paddingLeft: 20
    },
    btnStyle: {
        width: '100%', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 5,
        marginTop: 10
    }
});

function Password({navigation, route}) {
    const {navigate} = navigation;
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const {data, type} = route.params;
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
        }
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigation.dispatch(StackActions.replace('Tab'))
        }

    }, [isAuthenticated])


  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'flex-start', position: 'relative'}}>
        <View>
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
                        {type === 'LOGIN' ? 'Login' : 'Register'}
                    </Button>
        </View>
    </View>
  )
}

export default Password;