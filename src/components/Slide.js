import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import theme from './theme';
//import {Box, Text} from '../../theme';

const {width} = Dimensions.get('window');

function Slide({title, body}) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', 
    marginTop: theme.spacing.l}}>
        <View style={{height: 300, width: 300, backgroundColor: 'gray',
            marginBottom: theme.spacing.m}}>
            <View style={{justifyContent: 'center',
             alignItems: 'center', paddingHorizontal: theme.spacing.l}}>
                <Text style={{color: 'black', fontSize: 22, lineHeight: 20, marginTop: theme.spacing.m, marginBottom: theme.spacing.s, variant: 'hero', fontWeight: 'bold'}}>{title}</Text>
                <Text style={{color: 'black', textAlign: 'center', fontSize: 16, fontWeight: '400'}}>{body}</Text>
            </View>
        </View>
    </View>
  )
}

export default Slide;
