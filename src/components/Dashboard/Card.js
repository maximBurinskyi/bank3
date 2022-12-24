import React, { useEffect, useState } from 'react';
import {StyleSheet,  View} from 'react-native';
//import {Box, Text} from '../theme';
import {SEGMENT, ICON_SIZE, PADDING} from '../../Constants';
//import theme from '../theme';
import {menus} from '../Dashboard';
import Tab from '../Tab';
import {TouchableOpacity} from 'react-native-gesture-handler';
import theme from '../theme';
import styled from 'styled-components';
import Text from '../Text';
import axios from 'axios';


function Card({navigation}) {
  const [card, setCard] = useState([]);
  const [card2, setCard2] = useState([]);
  const [balance, setBalance] = useState([]);


  useEffect(() => {
    axios.get(`http://localhost:5003/users`)
      .then(res => {
        const cards = res.data.cards[0].last_four;  // Yeah!!!!!!!!
        const balance = res.data.balance.gpa.available_balance;
        console.log(balance);
        setBalance(balance);
        const persons2 = res.data;
        //console.log(persons)
        setCard({ cards });
        setCard2({ persons2 });
        return cards;
        // console.log(persons + 'assf');
        //console.log(persons2 + 'assffffffff');
      })
},[]);

console.log(balance);
console.log(card);

  const myCards = [
    {
      id: "1",
      color: "#5750F0",
      number: "1234",
      exp: "10/2020",
      logo: require("../../../assets/visa.jpeg"),
  },
  {
      id: "2",
      color: "#C84FF1",
      number: "5678",
      exp: "08/2022",
      logo: require("../../../assets/amazon.jpeg"),
  },
  {
      id: "3",
      color: "#5298F7",
      number: "9012",
      exp: "09/2022",
      logo: require("../../../assets/paypal.jpg.webp"),
  },
  {
      id: "4",
      color: "#5297F6",
      number: "5013",
      exp: "05/2023",
      logo: require("../../../assets/mastercard.png")
  },
  {
    id: "5",
    color: "#C84FF1",
    number: "5678",
    exp: "08/2022",
    logo: require("../../../assets/mastercard.png"),
}
  ]


  const renderCard = ({item}) => (
    <CardContainer>
      <CardInfo>
        <CardLogoContainer bgColor={item.color}>
          <CardLogo source={item.logo} resizeMode="contain" />
        </CardLogoContainer>
        <CardDetails>
          <Text heavy>
            &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;{" "}
             <Text medium heavy>{item.number}</Text>  
            </Text>
          <Text small color="#727479" margin="4px 0 0 0">{item.exp}</Text>
        </CardDetails>
      </CardInfo>
      <CardActions>
        <Remove>
          <Text heavy color="#727479">Remove</Text>
        </Remove>
        <Update>
          <Text heavy>Update</Text>
        </Update>
      </CardActions>
    </CardContainer>
  )

  return (
    <Container>
      <Text center large heavy margin="16px 0 0 0">My Cards</Text>

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
          <View backgroundColor='orange'
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
                  4131 7234 1231 {card.cards}</Text>
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
              <Text style={{
                color: 'black',
                fontSize: 26,
                fontWeight: 'bold'
                              
              }}>${balance}</Text>
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

    <Cards data={myCards} renderItem={renderCard} />
    </Container>

  )
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e; 
`;

const Cards = styled.FlatList`
  padding: 0 8px;
  margin-top: 32px;
  padding-top: 220px;

`;

const CardContainer= styled.View`
  backgroundColor: #292929;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;
  
`;

const CardInfo = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #393939;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;

const CardLogoContainer = styled.View`
  width: 64px;
  height: 64px;
  background-color: ${(props) => props.bgColor};
  alignItems: center;
  justify-content: center;
  border-radius: 32px;

`;

const CardLogo = styled.Image`
  width: 40px;
  height: 40px;
`;

const CardDetails = styled.View`
  flex: 1;
  alignItems: flex-end;


`;

const CardActions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Remove = styled.TouchableOpacity`
  margin-right: 32px

`;

const Update = styled.TouchableOpacity`
  backgroundColor: #3d3d3d;
  padding: 8px;
  border-radius: 6px;

`;


export default Card;