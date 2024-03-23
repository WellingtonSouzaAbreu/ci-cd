import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'

import { RegisterProvider } from 'src/contexts/RegisterContext'

import { RegisterStackParamList } from '@presentation/routes/stacks/RegisterStack/types'
import { HomeBottomTabNavigator } from '@routes/tabs/HomeBottomTabNavigator'

import { InsertEmail } from '@presentation/screens/signup/InsertEmail'
import { InsertPassword } from '@presentation/screens/signup/InsertPassword'
import { InsertUserName } from '@presentation/screens/signup/InsertUserName'
import { WelcomeNewUser } from '@presentation/screens/signup/WelcomeNewUser'

const Stack = createStackNavigator<RegisterStackParamList>()

function RegisterStack() {
	return (
		<RegisterProvider>
			<Stack.Navigator
				initialRouteName={'InsertUserName'}
				screenOptions={{
					headerShown: false,
					gestureEnabled: true,
					...TransitionPresets.SlideFromRightIOS
				}}
			>
				<Stack.Screen name={'InsertUserName'} component={InsertUserName} />
				<Stack.Screen name={'InsertEmail'} component={InsertEmail} />
				<Stack.Screen name={'InsertPassword'} component={InsertPassword} />
				<Stack.Screen name={'WelcomeNewUser'} component={WelcomeNewUser} />
				<Stack.Screen name={'HomeTab'} component={HomeBottomTabNavigator} />
			</Stack.Navigator>
		</RegisterProvider>
	)
}

export { RegisterStack }
