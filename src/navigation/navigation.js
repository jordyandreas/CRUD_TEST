import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

//import pages
import Contact from '../pages/contact_'
import ContactDetail from '../pages/contactDetail_'

const StackContact = createStackNavigator();
const SlideAnimate = { ...TransitionPresets.SlideFromRightIOS }

const Navigation = () => (
    <NavigationContainer>
        <StackContact.Navigator
            initialRouteName='Contact'
            headerMode='none'
        >
            <StackContact.Screen options={SlideAnimate} name='Contact' component={Contact} />
            <StackContact.Screen options={SlideAnimate} name='ContactDetail' component={ContactDetail} />
        </StackContact.Navigator>
    </NavigationContainer>
)

export default Navigation;