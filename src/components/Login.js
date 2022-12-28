import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
//import theme, {Box, Text} from '../theme';
import {Input, Form, Item, Button} from 'native-base';
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

function Login({navigation}) {
    const {navigate} = navigation;
    const [email, setEmail] = useState('max@gmail.com');

    const onLogin = () => {
        navigate('Password', {data: {email}, type: 'LOGIN'});
    };

   
  return (
    <Container>
    <View style={{flex: 1, backgroundColor: '#1e1e1e'}}>
        <View style={{paddingHorizontal: theme.spacing.m, paddingVertical: theme.spacing.l}}>
            <Text style={{marginTop: theme.spacing.m, color: 'white', paddingTop: theme.spacing.l}}>Whether you're creating an account let's start with your email and password</Text>
        
        <View style={{marginTop: theme.spacing.m}}>
                 <TextInput 
                    style={styles.itemStyle}
                    placeholder="Email Address"
                    onChangeText={newText => setEmail(newText)}
                    defaultValue={email}
                    />

                    <Button
                    style={styles.btnStyle}
                    onPress={onLogin}
                    >
                        <Text style={{fontSize: 18, color: 'white', fontWeight: '700'}}>Continue</Text>
                        
                    </Button>

        </View>
        </View>

    </View>
    </Container>
  )
}

const Container = styled.View`
    flex: 1;
    background-color: #1e1e1e;
`;


export default Login;