import React, {useEffect, useState} from 'react';
import {Dimensions, ImageBackground, StyleSheet, View, } from 'react-native';
//import theme, {Box, Text} from '../theme';
//import {Container, Content} from 'native-base';
//import {Container, Content} from 'native-base';
//import Ionicons from 'react-native-vector-icons/dist/Ionicons';
//import Entypo from 'react-native-vector-icons/Entypo';
//import { FontAwesome5, MaterialIcon, AntDesign } from 'react-native-vector-icons/MaterialIcons';
//import styled from 'styled-components';
//import {FontAwesome5, MaterialIcons, AntDesign} from '@expo/vector-icons';

//import { FontAwesome5, MaterialIcon, AntDesign } from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';
import {FontAwesome5, MaterialIcons, AntDesign} from '@expo/vector-icons';


import Ionicons from '@expo/vector-icons/Ionicons';
//import Text from './Text';
import Text from './Text';

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
import { socket, roomID, receiver, transactions } from '../store/actions/transactionAction';
import {useDispatch, useSelector} from 'react-redux';
import { backgroundColor } from '@shopify/restyle';
import theme from './theme';
import { Entypo } from '@expo/vector-icons';
//import purchaseData from '../../purchases';
import purchaseData from '../../purchases';
import axios from 'axios';
//import {send, transactions} from '../../store/actions/transactionAction';
import { Button} from 'native-base';



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

const styles2 = StyleSheet.create({
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

function Dashboard({navigation}) {
    const dispatch = useDispatch();
    
    const {navigate} = navigation;

    //User account
    const {account_balance} = useSelector(state => state.auth);
    const {allTransactions} = useSelector(state => state.auth);
    const {account_number} = useSelector(state => state.auth)
    const {name} = useSelector(state => state.auth);
    const {email} = useSelector(state => state.auth);
    const [appState, setAppState] = useState();

    // const {data, type} = route.params;
    // console.log(data);



    const renderPurchase = ({item}) => (
        <Purchase>
            <PurchaseInfo>
                <Text heavy>{item.purpose}</Text>
                {/* <Text bold margin="2px 0 2px 0">{item.store}</Text>
                <Text small color="#727479" >{item.address}</Text> */}
            </PurchaseInfo>
            <Text heavy>${" "}{item.amount}</Text>
        </Purchase>
    )
    
    const onSwitch = (routeNumber, routeName) => {
        const isCurrentRoute = routeNumber === 0 ? true : false;
        if(!isCurrentRoute) {
            navigate(routeName);
        }
    };

    const onCTA = (route) =>{
        if(route === 'Send') return  navigate('Send');
        if(route === 'Request') return  navigate('Request');
        
    };

    const onSubmit = () => {
        const data = {
            // amount: +amount,
            // purpose,
             account_number,
              email,
        };
        //console.log(data);
        dispatch(transactions(data));
       
    }

    // useEffect(() => {
    //     dispatch(transactions({ account_number, email}));

    // }, [])

    useEffect(() => {
        socket.emit("joinService", {roomID});
        console.log('joinservece');
        console.log(roomID);
        dispatch(receiver());
    },[]);

    console.log("show email" + email);

    const number = { account_number: '70506186133'};
    const number_email = { email: 'max@gmail.com'};
    //const number_email2 = { email: 'maxim10@gmail.com'}

    useEffect(() => {

        axios.post('http://127.0.0.1:5000/transactions2', number_email)
            .then((res) => {
              //dispatch({type: USER_LOADED, payload: res.data});
              console.log(res.data.transactions);

              const transactions = res.data.transactions;
              setAppState(transactions);
            })
            .catch((err) => {
              //dispatch({type: AUTH_ERROR});
              //AsyncStorage.removeItem('@token');
            });

    }, [])

    // useEffect(() => {
    //     dispatch(transactions());
    // }, [])

    console.log( 'test' + appState);

  return (
    <Container>
        <Header>
            <ProfilePhoto />
            <Welcome>
                <Text heavy medium>Welcome,</Text>
                
                <Text>{name}</Text>
            </Welcome>
            <FontAwesome5 name="cog" size={24} color="#565656" />

        </Header>
        <Text center title black>
            ${account_balance}
        </Text>
        <Text center heavy black color="#727479">Current Balance</Text>

        

        
        <View style={{alignItems: 'center', margin: 'auto'}}>
            <View style={{paddingBottom: theme.spacing.xl, showsVerticalScrollIndicator: false,  alignItems: 'center', justifyContent: 'center', margin: 'auto'}}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}  >

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
                                <Text style={{fontSize: 13, fontWeight: '700', color: 'black'}} variant='title2' fontSize={13} fontWeight={700}>{title}</Text>
                         </TouchableOpacity>

                         </View>

                 ))}

                         </View>
                         </View>

                         </View>                  

        
        
        <Purchases ListHeaderComponent={
            <>
            <TransactionsHeader>
                <Text>Last Purchases</Text>
                
                <MaterialIcons name='sort' size={24} color="#5196f4" />
            </TransactionsHeader>

            <SearchContainer>
                <AntDesign name="search1" size={18} color="#5196f4" />
                <Search placeholder='Search Transactions' />
            </SearchContainer>
            </>
        } 
        data={appState} 
        renderItem={renderPurchase}
         showsVerticalScrollIndicator={false}
        />
        
        
        <StatusBar barStyle="light-content" />
    </Container>



    // <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'flex-end'}}>
    //     <View style={{paddingHorizontal: 8}}>

    //         <View style={{flexDirection: 'row', 
    //         justifyContent: 'flex-end', 
    //         alignItems: 'center',
    //         paddingTop: theme.spacing.m}}>
    //             <Ionicons name='settings' size={28} />
    //             <Text style={{marginHorizontal: 16, fontSize: 28}}>|</Text>
                
    //             <TouchableOpacity>
    //                 <Ionicons name='notifications' size={28} />
    //             </TouchableOpacity>            

    //         </View>
    //         <View style={{backgroundColor: 'yellow',
    //          paddingHorizontal: 16,
    //          paddingVertical: 16,
    //          paddingBottom: theme.spacing.m,
    //          marginTop: 8,
    //          borderRadius: 16
    //     }}>
    //         <View>
    //             <View style={{flexDirection: 'row', justifyContent: 'space-between',
    //             alignItems: 'center'
    //         }}>
    //             <Text style={{variant: 'title1', color: 'black', fontSize: 30}}>
    //                 ${account_balance}.
    //                 <Text style={{fontSize: 12, marginRight: 16}}>00</Text>
    //             </Text>
    //             <View style={{backgroundColor: 'gray',
    //             paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4,
    //             justifyContent:'center', alignItems: 'center'
    //         }}>
    //             <Text style={{textAlign: 'center', variant: 'title1',
    //             fontSize: 15, color: 'black'
    //         }}>NGN
    //         <View style={{justifyContent: 'center', alignItems: 'center'}}>
    //         <MaterialIcon name='arrow-drop-down' size={18} color={theme.colors.black} />


    //         </View>
    //         </Text>
    //         </View>
    //         </View>
    //         </View>
    //         <View style={{marginTop: 16, marginBottom: 16,}}>
    //             <View style={{width: 90, backgroundColor: 'gray',
    //             paddingHorizontal: 5, paddingVertical: 7,
    //             borderRadius: 4, alignItems: 'center',
    //             justifyContent: 'center', marginTop: 4,
    //         }}>
    //             <Text style={{fontSize: 15, color: 'black', textAlign: 'center'}}>Add money</Text>
    //         </View>
    //         </View>
    //     </View>
    //     </View>

    //     <Container alignItems='center' margin='auto'  >
    //         <View style={{paddingBottom: theme.spacing.xl, showsVerticalScrollIndicator: false,  alignItems: 'center', justifyContent: 'center', margin: 'auto'}}
    //         >
    //             <View style={{flexDirection: 'row', flexWrap: 'wrap'}} flexDirection='row' flexWrap='wrap' justifyContent='center'>
    //                 {actions.map(({title, icon, color, cta}) => (
    //                     <View style={{backgroundColor: color, padding: theme.spacing.m, margin: theme.spacing.s, borderRadius: theme.spacing.m}} 
    //                     key={title}
    //                     width={149}
    //                     height={120}
    //                     >
    //                         <TouchableOpacity onPress={() => onCTA(cta)}>
    //                             <View style={{borderRadius: 100,
    //                              paddingVertical: theme.spacing.m,
    //                              paddingHorizontal: theme.spacing.m, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}
    //                             width={50}
    //                             justifyContent='center'
    //                             alignItems='center'
    //                             >
    //                                 {icon}
    //                             </View>
    //                             <Text variant='title2' fontSize={13} fontWeight={700}>{title}</Text>
    //                         </TouchableOpacity>

    //                     </View>

    //                 ))}
    //             </View>
    //             <TapGestureHandler>
    //                 <View style={{paddingHorizontal: theme.spacing.s, marginBottom: theme.spacing.l}}>
    //                     <View style={{marginTop: theme.spacing.l, paddingHorizontal: theme.spacing.s, backgroundColor: 'blue', paddingVertical: theme.spacing.l, borderRadius: theme.spacing.m}}
    //                     height={130}
    //                     justifyContent='center'
    //                     alignItems='center'
    //                     >
    //                        <Entypo
    //                        name='circle-with-plus' 
    //                        size={35} 
    //                        color={theme.colors.barter} />
    //                        <Text variant='body' textAlign='center' style={{paddingHorizontal: theme.spacing.l, marginTop: theme.spacing.s}}>
    //                         Tap here to create your dollar card
    //                        </Text>

    //                     </View>
    //                 </View>
    //             </TapGestureHandler>
    //             <View style={{paddingHorizontal: theme.spacing.m, marginBottom: theme.spacing.xl}}>
    //                 <ImageBackground source={pattern}
    //                     style={{height: 130, width: '100%', paddingTop: 50}}
    //                 >
    //                     <View justifyContent='center'
    //                         alignItems='center'
    //                         style={{paddingLeft: theme.spacing.l,
    //                         paddingRight: theme.spacing.xl,
    //                         borderRadius: theme.spacing.l}}
    //                     >
    //                         <Text variant='title2' color='white' fontWeight='700'
    //                         style={{fontWeight: '700', color: 'white', fontSize: 18, textAlign: 'center'}}>
    //                             Send a redeemable gift card to family and friens
    //                         </Text>
    //                     </View>
    //                 </ImageBackground>
    //             </View>
    //         </View>
            
    //     </Container>
    //     {/* Tab aplication */}
    //     <View height={70} backgroundColor='danger'>
    //         <View style={{...StyleSheet.tabs}}>
    //             {menus.map(({icon, text, routeName}, index) => (
    //                 <View {...{index}} style={{...styles.tab}} key={index}>
    //                     <Tab
    //                     onPress={(index, route) => onSwitch(index, route)}
    //                     {...{index, text, routeName}} >
    //                         {icon}
    //                     </Tab>
    //                 </View>
    //             ))}
    //         </View>
    //     </View>
    // </View>
    //     </Container>
    //     {/* Tab aplication */}
    //     <View height={70} backgroundColor='danger'>
    //         <View style={{...StyleSheet.tabs}}>
    //             {menus.map(({icon, text, routeName}, index) => (
    //                 <View {...{index}} style={{...styles.tab}} key={index}>
    //                     <Tab
    //                     onPress={(index, route) => onSwitch(index, route)}
    //                     {...{index, text, routeName}} >
    //                         {icon}
    //                     </Tab>
    //                 </View>
    //             ))}
    //         </View>
    //     </View>
    // </View>
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

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #964ff0;
`;

const Header = styled.View`
    flex_direction: row;
    align-items: center;
    margin: 16px 16px 32px 16px;
`;

const ProfilePhoto = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

const Welcome = styled.View`
    flex: 1;
    padding: 0 16px;
`;

const Purchases = styled.FlatList`
    backgroundColor: #2c2c2c;
    padding: 16px;
`;

const TransactionsHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;


const SearchContainer = styled.View`
    backgroundColor: #3d3d3d;
    flex_direction: row;
    align-items: center;
    padding: 0 8px;
    border-radius: 6px;
    margin: 16px 0;
`;

const Search = styled.TextInput`
    flex: 1;
    padding: 8px 16px;
    font-family: "Avenir";
    color: #dbdbdb;
`;

const Purchase = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: #393939;
    padding-bottom: 12px;
    margin-bottom: 12px;


`;

const PurchaseInfo = styled.View``;

const StatusBar = styled.StatusBar``;

const Send = styled.TouchableOpacity`
    margin: 16px;
    background_color: #5196f4;
    padding: 16px 32px;
    align-items: center;
    border-radius: 12px;

`;

export default Dashboard;