import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'

import { AlertProvider } from '@contexts/AlertContext'
import { RegisterProvider } from '@contexts/RegisterContext'

import { RegisterStackParamList } from '@routes/stacks/RegisterStack/types'

import { Home } from '@presentation/screens/Home'
import { InsertEmail } from '@presentation/screens/InsertEmail'
import { InsertPassword } from '@presentation/screens/InsertPassword'
import { InsertUserName } from '@presentation/screens/InsertUserName'
import { SelectAuthRegister } from '@presentation/screens/SelectAuthRegister'
import { WelcomeNewUser } from '@presentation/screens/WelcomeNewUser'

const Stack = createStackNavigator<RegisterStackParamList>()

function RegisterStack() {
	return (
		<AlertProvider>
			<RegisterProvider>
				<Stack.Navigator
					initialRouteName={'SelectAuthRegister'}
					screenOptions={{
						headerShown: false,
						gestureEnabled: true,
						...TransitionPresets.SlideFromRightIOS
					}}
				>
					<Stack.Screen name={'SelectAuthRegister'} component={SelectAuthRegister} />
					<Stack.Screen name={'InsertUserName'} component={InsertUserName} />
					<Stack.Screen name={'InsertEmail'} component={InsertEmail} />
					<Stack.Screen name={'InsertPassword'} component={InsertPassword} />
					<Stack.Screen name={'WelcomeNewUser'} component={WelcomeNewUser} />
					<Stack.Screen name={'Home'} component={Home} />
				</Stack.Navigator>
			</RegisterProvider>
		</AlertProvider>
	)
}

export { RegisterStack }
