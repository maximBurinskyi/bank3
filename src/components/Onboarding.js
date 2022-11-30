import  React, {Fragment, useEffect, useRef} from 'react';
import {Dimensions, View, Text, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';
import Butterfly from '../Icons/Butterfly';
import theme, {Box} from './theme';
import {StackActions} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
import Animated from 'react-native-reanimated';
import Slide from './Slide';

const slides = [
  {
    title: 'Borderless Payment Experience',
    body:
      'Create custom virtua USD card at affordable rates for your payments and subscriptions',
  },
  {
    title: 'Your Better financial Half',
    body:
      'Managing Your funds should be the easiest task on your to-do-lis, so we created Barter just for you',
  },
  { 
    title: 'Take Control Over Your Money Anytime, Anywhere',
    body:
      "Always know what's going on with your money. Thanks for the instant notification",
  },
  {
    title: 'Account Protection',
    body: 'Barter is secured by Flutterwave. Your money is always safe with us',
  },
];




function Onboarding({navigation}) {
  const scroll = useRef(null);
  const {navigate} = navigation; 
  const {isAuthenticated} = useSelector(state => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigation.dispatch(StackActions.replace('Dashboard'));
    }
  }, [isAuthenticated]);

  const onRegister = () => {
    navigate('Register');
  }

  const onLogin = () => {
    navigate('Login');
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <View style={{ height: height * 0.6}} >
        <View style={{ flexDirection:'row', 
        justifyContent:'center',
         alignItems:'center', 
         paddingTop: theme.spacing.m}}>
           {/* <Butterfly style={{width: 40, height: 40}} /> */}
          <Text style={{variant: 'title1', 
          fontSize: 32, 
          color: 'black', 
          fontWeight: 'bold', 
          textDecorationStyle: 'solid' }}>
            Bank           
          </Text>
          <Text style={{marginLeft: theme.spacing.s, fontSize: 12}}>that was built for your</Text>
          </View>
          <View>
            <Animated.ScrollView ref={scroll}  horizontal 
            snapToInterval={width}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            
            >
             {slides.map(({title, body}, index) => (
              <Fragment key={index}>
                <Slide {...{title, body}}/>
              </Fragment>
             ))} 

            </Animated.ScrollView>
          </View>
        
      </View>
      <View>
        <Text>Bank</Text>
      </View>

      <View style={{paddingHorizontal: theme.spacing.l}}>
      <Text style={{fontSize: 14, paddingHorizontal: theme.spacing.l, fontWeight: '600'}}>For frictionless and seamless Onboarding click below:</Text>
      </View>
      
      <View style={{flex: 1}}>

        <TouchableOpacity    
         onPress={onRegister}>
          <View style={{
          width: width * 0.8,
          backgroundColor: 'blue',
          paddingVertical: theme.spacing.m,
          borderRadius: theme.spacing.m,
          marginBottom: theme.spacing.s,
          fontWeight: '700'
          //height: height * 0.5,

        }}>
            <Text style={{textAlign: 'center', color: 'white', variant: 'title1', fontSize: 18}}>Create an account</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onLogin}>
          <View style={{
          width: width * 0.8,
          backgroundColor: 'gray',
          paddingVertical: theme.spacing.m,
          borderRadius: theme.spacing.m,
          marginBottom: theme.spacing.s,
          fontWeight: '700'
          //height: height * 0.5,

        }} >
            <Text style={{textAlign: 'center', fontSize: 18}}>Login</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
}
export default Onboarding;