import React from 'react';
//import {Box, Text} from '../theme';
import {menus, styles} from '../Dashboard';
import Tab from '../Tab';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import { View, Text } from 'react-native';
import theme from '../theme';
//import { theme } from 'native-base';

function More({navigation}) {
  const {navigate} = navigation;

  const {account_number} = useSelector(state => state.auth);

  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent:'flex-start'}}>
      <View style={{flex: 1, padding: theme.spacing.m}}>
        <Text style={{variant: 'title1', color: 'black', fontSize: 30}}>
          More things you can do
        </Text>

        <Text style={{marginTop: theme.spacing.m, fontWeight: '600', variant: 'title2', fontSize: 25, marginBottom: theme.spacing.m}}>
          Receive Money
        </Text>
      
      <View style={{backgroundColor: 'gray', paddingVertical: theme.spacing.m, paddingHorizontal: theme.spacing.m, borderRadius: theme.spacing.m}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'black', variant: 'body'}}>Barter Account Number</Text>
          <Text style={{variant: 'title1', color: 'black', fontSize: 18, marginLeft: theme.spacing.s, fontWeight: '700'}}>
             {account_number}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'black', variant: 'body'}}>
            Bank Name:
          </Text>
          <Text style={{variant: 'title1', color: 'black', fontSize: 18, marginLeft: theme.spacing.s, fontWeight: '700'}}>
            Bolt Skills Bank PLC
          </Text>
        </View>
      </View>
      <View style={{paddingVertical: theme.spacing.l}}>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, paddingBottom: theme.spacing.m, borderBottomColor: 'primaryLight'}}>
            <View>
              <Text style={{variant: 'title2', fontSize: 17}}>
                Invite friens
              </Text>
              <Text style={{variant: 'body', fontSize: 14}}>
                Get paid for every friend that signs up and uses applicaton
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'column', marginTop: theme.spacing.m, paddingHorizontal: theme.spacing.m}}>
          <Text style={{variant: 'title', color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Make a payment
          </Text>

          <TouchableOpacity>
            <View style={{marginTop: theme.spacing.m, flexDirection: 'row', justifyContent: 'space-between', marginTop: theme.spacing.s, borderBottomWidth: 1, borderBottomColor: 'primaryLight', paddingBottom: theme.spacing.m}}>
              <View>
                <Text style={{variant: 'title2', fontSize: 17}}>
                  Pay with qr code
                </Text>
                <Text style={{variant: 'body', fontSize: 14}}>
                  Make payments with Visa
                </Text>
              </View>
            </View>
          </TouchableOpacity>

        </View>

        <View style={{flexDirection: 'column', marginTop: theme.spacing.m, paddingHorizontal: theme.spacing.m}}>
          <Text style={{variant: 'title', color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Send Money
          </Text>

          <TouchableOpacity>
            <View style={{marginTop: theme.spacing.m, flexDirection: 'row', justifyContent: 'space-between', marginTop: theme.spacing.s, borderBottomWidth: 1, borderBottomColor: 'primaryLight', paddingBottom: theme.spacing.m}}>
              <View>
                <Text style={{variant: 'title2', fontSize: 17}}>
                  Send Money to Whatsapp
                </Text>
                <Text style={{variant: 'body', fontSize: 14}}>
                  Send Money to your friens on Whatsapp
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          
        </View>



      </View>
      </View>
    </View>
  )
}

export default More;