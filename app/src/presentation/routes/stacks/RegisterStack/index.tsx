import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'

import { InsertEmail } from '@screens/signup/InsertEmail'
import { InsertPassword } from '@screens/signup/InsertPassword'
import { InsertUserName } from '@screens/signup/InsertUserName'
import { WelcomeNewUser } from '@screens/signup/WelcomeNewUser'

import { RegisterProvider } from '@contexts/RegisterContext'

import { RegisterStackParamList } from '@routes/stacks/RegisterStack/types'
import { HomeBottomTabNavigator } from '@routes/tabs/HomeBottomTabNavigator'

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
