import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'

import { InsertEmailAccount } from '@screens/signin/InsertEmailAccount'
import { InsertPasswordAccount } from '@screens/signin/insertPasswordAccount'

import { AuthProvider } from '@contexts/AuthContext'

import { SigninStackParamList } from '@routes/stacks/SigninStack/types'
import { HomeBottomTabNavigator } from '@routes/tabs/HomeBottomTabNavigator'

const Stack = createStackNavigator<SigninStackParamList>()

function SigninStack() {
	return (
		<AuthProvider>
			<Stack.Navigator
				initialRouteName={'InsertEmailAccount'}
				screenOptions={{
					headerShown: false,
					gestureEnabled: true,
					...TransitionPresets.SlideFromRightIOS
				}}
			>
				<Stack.Screen name={'InsertEmailAccount'} component={InsertEmailAccount} />
				<Stack.Screen name={'InsertPasswordAccount'} component={InsertPasswordAccount} />
				<Stack.Screen name={'HomeTab'} component={HomeBottomTabNavigator} />
			</Stack.Navigator>
		</AuthProvider>
	)
}

export { SigninStack }
