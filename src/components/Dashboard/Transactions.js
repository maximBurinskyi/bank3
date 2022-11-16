import React from 'react';
import {Dimensions, View, Text} from 'react-native';
//import Ionicons from 'react-native-vector-icons/dist/Ionicons';
//import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';

//import Ionicons from '@expo/vector-icons/dist/Ionicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  TapGestureHandler,
  TouchableOpacity,
} from 'react-native-gesture-handler';
// import theme, {Box, Text} from '../theme';
import theme from '../theme';
import {Container, Content} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {menus, styles} from '../Dashboard';
import Tab from '../Tab';

const {width, height} = Dimensions.get('window');

const transactions = [
  {type: 'send', name: 'Samuel', price: 200, purpose: 'I paid money to Victor'},
  {
    type: 'received',
    name: 'Cynthia',
    price: 200,
    purpose: 'Refund from mama Deborah',
    date: 'Mar 3 2021',
  },
  {
    type: 'send',
    name: 'Samuel',
    price: 200,
    purpose: 'I bought an apple',
    date: 'Mar 3 2021',
  },
  {
    type: 'received',
    name: 'Nengi',
    price: 200,
    purpose: 'Office Payment',
    date: 'Mar 3 2021',
  },
  {
    type: 'send',
    name: 'Samuel',
    price: 200,
    purpose: 'I bought a shoe',
    date: 'Mar 3 2021',
  },
  {
    type: 'received',
    name: 'Nnanna',
    price: 200,
    purpose: 'Transfer from Emeka',
    date: 'Mar 3 2021',
  },
];

function Transactions({navigation}) {
  const {navigate} = navigation;

  
  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'flex-start'}}>
        <View style={{paddingHorizontal: 8, height: height * 0.3}}>

            <View style={{flexDirection: 'row', 
            justifyContent: 'flex-end', 
            alignItems: 'center',
            paddingTop: theme.spacing.m}}>
                <Ionicons name='settings' size={28} />
                <Text style={{marginHorizontal: 16, fontSize: 28}}>|</Text>
                
                <TouchableOpacity>
                    <Ionicons name='notifications' size={28} />
                </TouchableOpacity>            

            </View>
            <View style={{backgroundColor: 'yellow',
             paddingHorizontal: 16,
             paddingVertical: 16,
             paddingBottom: theme.spacing.m,
             marginTop: 8,
             borderRadius: 16
        }}>
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={{variant: 'title1', color: 'black', fontSize: 30}}>
                    $560.
                    <Text style={{fontSize: 12, marginRight: 16}}>00</Text>
                </Text>
                <View style={{backgroundColor: 'gray',
                paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4,
                justifyContent:'center', alignItems: 'center'
            }}>
                <Text style={{textAlign: 'center', variant: 'title1',
                fontSize: 15, color: 'black'
            }}>NGN
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <MaterialIcon name='arrow-drop-down' size={18} color={theme.colors.black} />


            </View>
            </Text>
            </View>
            </View>
            </View>
            <View style={{marginTop: 16, marginBottom: 16,}}>
                <View style={{width: 90, backgroundColor: 'gray',
                paddingHorizontal: 5, paddingVertical: 7,
                borderRadius: 4, alignItems: 'center',
                justifyContent: 'center', marginTop: 4,
            }}>
                <Text style={{fontSize: 15, color: 'black', textAlign: 'center'}}>Add money</Text>
            </View>
            </View>
        </View>
        </View>
        <Container>
          <View style={{paddingBottom: theme.spacing.xl}}>
            <View style={{paddingHorizontal: theme.spacing.m}}>
 
            <View style={{flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center'}}>
              <Text>Last 7 days</Text>
            </View>
            </View>

            <View style={{flexDirection: 'row',
             paddingHorizontal: theme.spacing.m, 
             justifyContent: 'space-between'}}>

              <View> 
                <Text>Graph</Text>
                </View>

                <View style={{paddingRight: theme.spacing.xl}}>

                  <View style={{marginBottom: theme.spacing.m}}>
                    <Text style={{variant: 'body', fontSize: 12}}> Total Spending</Text>
                    <Text style={{color: 'red', variant: 'title', fontSize: '25'}}>0.00</Text>
                  </View>

                  <View>
                    <Text style={{fontSize: 12, variant: 'body'}}>
                      Total money received
                    </Text>
                    <Text style={{color: 'green', variant: 'title1', fontSize: 25}}>
                      0.00
                    </Text>
                  </View>

                </View>
            </View>
            <View style={{paddingVertical: theme.spacing.m}}>
              {!transactions.length > 0 ? <Text style={{textAlign: 'center'}}>
                No transactions for last 7 days
              </Text> : <View>
                {transactions.map(
                  ({name, type, price, purpose, date}, index) => (
                    <View key={index}
                    style={{paddingHorizontal: theme.spacing.m, flexDirection: 'row', justifyContent: 'space-between',
                    marginBottom: theme.spacing.m,
                    alignItems: 'center',
                    paddingVertical: theme.spacing.m,
                    borderBottomWidth: 1}}>
                      <View>
                        <Text style={{variant: 'body'}}>{name}</Text>
                        <Text style={{fontSize: 5, marginTop: theme.spacing.s}}>{date}</Text>
                        </View>
                        <View>
                          <Text style={{variant: 'body', fontWeight: '600'}} color={type == 'received' ? 'green' : 'red'}>
                            {type == 'send' ? `- $${price }` : `$${price}` } 
                            </Text>
                        </View>
                    </View>
                  )

                  )}
                </View>
              }
            </View>
          </View>
        </Container>
        </View>
        
  )
}

export default Transactions;