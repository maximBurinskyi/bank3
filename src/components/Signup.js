import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
//import theme, {Box, Text} from "./theme";
import { Input, Form, Item, Button } from "native-base";
//import { View } from "react-native";
import {register} from '../store/actions/authActions';
import { useDispatch } from "react-redux";
import theme from "./theme";


const styles = StyleSheet.create({
    itemStyle: {
        marginTop: 22,
        paddingLeft: 20,
        borderBottomWidth: 0.3,
        borderBottomColor: 'gray'
    },
    btnStyle: {
        width: '100%', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#964ff0',
        borderRadius: 5,
        marginTop: 20,
        fontSize: 18
    }
});

function Signup({navigation}) {
    const {navigate} = navigation;
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [userRef, setUserRef] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        if (!email || !name) {
            return alert('Please enter a valid email and name');
        }

        const data = {
            name,
            email,
            phone,
            userRef,
            password,
        };

        navigate('Password', {data, type: 'REGISTER'});

    }

    return (
        // <View style={{flex: 1, backgroundColor: 'white'}}>
        //     <View style={{}} >
        //         <View style={{}}>
                    
        //         </View>
        //     </View>
        // </View>
        <>
        <View style={{flex: 1, backgroundColor: '#1e1e1e'}}>
            <View style={{paddingHorizontal: theme.spacing.m,
            paddingVertical: theme.spacing.m}}>
                <View style={{marginTop: theme.spacing.m}}>
            
                
               {/* <Form>
                    <Item style={{...styles.itemStyle}}>
                        <Input placeholder="Name & Surname"
                         defaultValue={name}
                          onChangeText={(text) => setName(text)}/>
                    </Item> 

                </Form> */}
                
                <TextInput 
                    style={styles.itemStyle}
                    placeholder="Name & Surname"
                    placeholderTextColor='white'
                    onChangeText={newText => setName(newText)}
                    defaultValue={name}
                    />

                <TextInput 
                    style={styles.itemStyle}
                    placeholder="Email Address"
                    placeholderTextColor='white'
                    onChangeText={newText => setEmail(newText)}
                    defaultValue={email}
                    />

                <TextInput 
                    style={styles.itemStyle}
                    placeholder="Password"
                    placeholderTextColor="white"
                    onChangeText={newText => setPassword(newText)}
                    defaultValue={password}
                    />

                <TextInput 
                    style={styles.itemStyle}
                    placeholder="Phone Number"
                    placeholderTextColor='white'
                    onChangeText={newText => setPhone(newText)}
                    defaultValue={phone}
                    />

                <TextInput 
                    style={styles.itemStyle}
                    placeholder="Refferal Code (Optional)"
                    placeholderTextColor='white'
                    onChangeText={newText => setUserRef(newText)}
                    defaultValue={userRef}
                    />
                    <Button
                    style={styles.btnStyle}
                    onPress={onSubmit}
                    >
                        <Text style={{fontSize: 18, color: 'white'}}>
                        Continue
                        </Text>
                    </Button>
                
                    </View>
              </View>
                
        </View>
        </>
    )
}

export default Signup;