import React, {useEffect} from 'react';
import {Dimensions, ImageBackground, StyleSheet, View, Text} from 'react-native';
//import theme, {Box, Text} from '../theme';
import {Container, Content} from 'native-base';
//import Ionicons from 'react-native-vector-icons/dist/Ionicons';
//import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Ionicons from '@expo/vector-icons/Ionicons';

import {
  Bills,
  Butterfly,
  Phone,
  Home,
  Transactions,
  More,
  Cards,
} from '../Icons';
//import Animated from 'react-native-reanimated';
//import {pattern} from '../assets/images';
import { pattern } from '../../assets/images';
//import {SEGMENT, ICON_SIZE, PADDING} from '../src/Constants';
import { SEGMENT, ICON_SIZE, PADDING } from '../Constants';
import Tab from './Tab';
import {
  TapGestureHandler,
  TouchableOpacity,
} from 'react-native-gesture-handler';
//import {socket, roomID, receiver} from '../../store/actions/transactionAction';
import {useDispatch, useSelector} from 'react-redux';
import { backgroundColor } from '@shopify/restyle';
import theme from './theme';
import { Entypo } from '@expo/vector-icons';

//const {width, height} = Dimensions.get('window');

const actions = [
  {
    title: 'Request Money',
    icon: <Butterfly width={20} height={20} />,
    color: '#FDD1FF',
    cta: 'Request',
  },
  {
    title: 'Send Money',
    icon: <Butterfly width={20} height={20} />,
    color: '#F9F9D6',
    cta: 'Send',
  },
  {
    title: 'Buy Airtime',
    icon: <Phone width={20} height={20} />,
    color: '#DCF5FF',
    cta: 'Buy',
  },
  {
    title: 'Pay Bills',
    icon: <Bills width={20} height={20} />,
    color: '#C6E1DD',
    cta: 'Pay',
  },
];


export const menus = [
  {text: 'Home', icon: <Home width={30} height={30} />, routeName: 'Home'},
  {text: 'Cards', icon: <Cards width={30} height={30} />, routeName: 'Card'},
  {
    text: 'Transactions',
    icon: <Transactions width={30} height={30} />,
    routeName: 'Transactions',
  },
  {text: 'More', icon: <More width={30} height={30} />, routeName: 'More'},
];

function Dashboard({navigation}) {
    const {navigate} = navigation;

    //User account
    const {account_balance} = useSelector(state => state.auth);
    
    const onSwitch = (routeNumber, routeName) => {
        const isCurrentRoute = routeNumber === 0 ? true : false;
        if(!isCurrentRoute) {
            navigate(routeName);
        }
    };

    const onCTA = (route) =>{
        if(route === 'Send') return  navigate('Send');
        
    };


  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'flex-end'}}>
        <View style={{paddingHorizontal: 8}}>

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
                    ${account_balance}.
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
        <Container alignItems='center' margin='auto'  >
            <View style={{paddingBottom: theme.spacing.xl, showsVerticalScrollIndicator: false,  alignItems: 'center', justifyContent: 'center', margin: 'auto'}}
            >
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}} flexDirection='row' flexWrap='wrap' justifyContent='center'>
                    {actions.map(({title, icon, color, cta}) => (
                        <View style={{backgroundColor: color, padding: theme.spacing.m, margin: theme.spacing.s, borderRadius: theme.spacing.m}} 
                        key={title}
                        width={149}
                        height={120}
                        >
                            <TouchableOpacity onPress={() => onCTA(cta)}>
                                <View style={{borderRadius: 100,
                                 paddingVertical: theme.spacing.m,
                                 paddingHorizontal: theme.spacing.m, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}
                                width={50}
                                justifyContent='center'
                                alignItems='center'
                                >
                                    {icon}
                                </View>
                                <Text variant='title2' fontSize={13} fontWeight={700}>{title}</Text>
                            </TouchableOpacity>

                        </View>

                    ))}
                </View>
                <TapGestureHandler>
                    <View style={{paddingHorizontal: theme.spacing.s, marginBottom: theme.spacing.l}}>
                        <View style={{marginTop: theme.spacing.l, paddingHorizontal: theme.spacing.s, backgroundColor: 'blue', paddingVertical: theme.spacing.l, borderRadius: theme.spacing.m}}
                        height={130}
                        justifyContent='center'
                        alignItems='center'
                        >
                           <Entypo
                           name='circle-with-plus' 
                           size={35} 
                           color={theme.colors.barter} />
                           <Text variant='body' textAlign='center' style={{paddingHorizontal: theme.spacing.l, marginTop: theme.spacing.s}}>
                            Tap here to create your dollar card
                           </Text>

                        </View>
                    </View>
                </TapGestureHandler>
                <View style={{paddingHorizontal: theme.spacing.m, marginBottom: theme.spacing.xl}}>
                    <ImageBackground source={pattern}
                        style={{height: 130, width: '100%', paddingTop: 50}}
                    >
                        <View justifyContent='center'
                            alignItems='center'
                            style={{paddingLeft: theme.spacing.l,
                            paddingRight: theme.spacing.xl,
                            borderRadius: theme.spacing.l}}
                        >
                            <Text variant='title2' color='white' fontWeight='700'
                            style={{fontWeight: '700', color: 'white', fontSize: 18, textAlign: 'center'}}>
                                Send a redeemable gift card to family and friens
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
            
        </Container>
        {/* Tab aplication */}
        <View height={70} backgroundColor='danger'>
            <View style={{...StyleSheet.tabs}}>
                {menus.map(({icon, text, routeName}, index) => (
                    <View {...{index}} style={{...styles.tab}} key={index}>
                        <Tab
                        onPress={(index, route) => onSwitch(index, route)}
                        {...{index, text, routeName}} >
                            {icon}
                        </Tab>
                    </View>
                ))}
            </View>
        </View>
    </View>
  )
}


export const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.primaryLight,
    },
    tab: {
        width: SEGMENT,
        height: ICON_SIZE + PADDING * 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Dashboard;