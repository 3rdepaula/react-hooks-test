import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Pages/Home'
import Naves from '../Pages/Naves'
import Planets from '../Pages/Planets'
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    Icon.loadFont();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Personagens') {
                    iconName = focused
                    ? 'ios-person'
                    : 'ios-person-outline';
                } else if (route.name === 'Naves') {
                    iconName = focused ? 'ios-rocket' : 'ios-rocket-outline';
                }else if (route.name === 'Planets') {
                    iconName = focused ? 'ios-planet' : 'ios-planet-outline';
                }
                return <Icon name={iconName} size={size} color={color} />;
            },
            })}
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Personagens" component={Home} />
            <Tab.Screen name="Naves" component={Naves} />
            <Tab.Screen name="Planets" component={Planets} />
        </Tab.Navigator>
    )
};

export default TabNavigation;