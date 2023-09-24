import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'

import { AuthProvider } from '@contexts/AuthContext'

import { SigninStackParamList } from '@routes/stacks/SigninStack/types'

import { Home } from '@presentation/screens/home/Home'
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
				<Stack.Screen name={'Home'} component={Home} />
			</Stack.Navigator>
		</AuthProvider>
	)
}

export { SigninStack }
