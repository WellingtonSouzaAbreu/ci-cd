import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'

import { AuthProvider } from '@presentation/contexts/AuthContext'

import { SigninStackParamList } from '@presentation/routes/stacks/SigninStack/types'
import { HomeBottomTabNavigator } from '@routes/tabs/HomeBottomTabNavigator'

import { InsertEmailAccount } from '@presentation/screens/signin/InsertEmailAccount'
import { InsertPasswordAccount } from '@presentation/screens/signin/insertPasswordAccount'

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
				<Stack.Screen name={'Home'} component={HomeBottomTabNavigator} />
			</Stack.Navigator>
		</AuthProvider>
	)
}

export { SigninStack }
