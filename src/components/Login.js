import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
//import theme, {Box, Text} from '../theme';
import {Input, Form, Item, Button} from 'native-base';
import theme from './theme';


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

function Login({navigation}) {
    const {navigate} = navigation;
    const [email, setEmail] = useState('max@gmail.com');

    const onLogin = () => {
        navigate('Password', {data: {email}, type: 'LOGIN'});
    };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{paddingHorizontal: theme.spacing.m, paddingVertical: theme.spacing.m}}>
            <Text style={{marginTop: theme.spacing.m}}>Whether you're creating an account let's start with your email and password</Text>
        
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
  )
}

export default Login;