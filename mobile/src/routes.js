import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main'
import Profile from './pages/Profile'

const Stack = createStackNavigator()

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTintColor: '#FFF',
                    headerStyle: {
                        backgroundColor: '#7D48E7'
                    }
                }}
            >
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ title: 'DevRadar' }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{ title: 'Perfil no GitHub' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;