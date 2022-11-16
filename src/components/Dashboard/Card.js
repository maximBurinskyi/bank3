import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import {Box, Text} from '../theme';
import {SEGMENT, ICON_SIZE, PADDING} from '../../Constants';
//import theme from '../theme';
import {menus} from '../Dashboard';
import Tab from '../Tab';
import {TouchableOpacity} from 'react-native-gesture-handler';
import theme from '../theme';

function Card({navigation}) {
  return (
    <View justifyContent='flex-end' flex={1}>
      <View style={{flex: 1, paddingHorizontal: theme.spacing.m, paddingVertical: theme.spacing.m}}>
        <View justifyContent='space-between' alignItems='center' flexDirection='row'>
          <View></View>

          <TouchableOpacity>
            <View style={{borderRadius: theme.spacing.s, width: 120, backgroundColor: 'primaryLight', justifyContent: 'center', alignItems: 'center', paddingVertical: theme.spacing.s}}>
              <Text style={{variant: 'body'}} >New Card</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: theme.spacing.xl}}>
          <View backgroundColor='yellow'
          style={{borderRadius: theme.spacing.l, height: 220, paddingVertical: theme.spacing.l}}>
            <View flexDirection='row' 
            alignItems='center' 
            justifyContent='space-between' style={{paddingRight: 1}}
             >
              <View backgroundColor='red'
              style={{borderTopRightRadius: theme.spacing.l,
                borderBottomRightRadius: theme.spacing.l,
                paddingLeft: theme.spacing.m,
                paddingRight: theme.spacing.m
              }}
              >
                <Text style={{fontWeight: '400', color: 'white'}} variant='body'>
                  Limited use card
                </Text>
              </View>
              <View>
                <Text style={{variant: 'title2'}} color='white'>560</Text>
              </View>
            </View>
              <View style={{marginTop: theme.spacing.m, paddingHorizontal: theme.spacing.l}}>
                <Text style={{fontSize: 12, color: 'green'}}>
                  MAKSYM BURYNSKYI
                </Text>
                <Text style={{marginTop: theme.spacing.s, color: 'black', fontSize: 25}}>
                  413 7234 1231 5453</Text>
              </View>
              <View style={{justifyContent: 'space-between', 
            flexDirection: 'row', 
            paddingHorizontal: theme.spacing.l,
            marginTop: theme.spacing.m,
            alignItems: 'center'}}>
              <View style={{flexDirection: 'row',
            alignItems: 'center'}}>
              <View style={{marginRight: theme.spacing.s}}>
                <Text style={{fontSize: '9', lineHeight: 18, color: 'black'}}>
                  Valid {'\n'}Till
                </Text>
              </View>
              <View>
                <Text style={{color: 'black', variant: 'body' }}>01/24{' '}</Text>
              </View>
            </View>
            <View>
              <Text style={{variant: 'title1',
            fontSize: '25',
            color: 'black',
            textTransform: 'uppercase'}}>{' '}Visa</Text>
            </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Card;