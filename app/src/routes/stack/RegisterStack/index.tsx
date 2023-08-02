import 'react-native-gesture-handler'
import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { InsertEmail } from '@screens/InsertEmail'
import { InsertPassword } from '@screens/InsertPassword'
import { InsertUserName } from '@screens/InsertUserName'
import { SelectAuthRegister } from '@screens/SelectAuthRegister'

import { AlertProvider } from '@contexts/AlertContext'
import { RegisterProvider } from '@contexts/RegisterContext'

import { RegisterStackParamList } from '@routes/stack/RegisterStack/types'

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
				</Stack.Navigator>
			</RegisterProvider>
		</AlertProvider>
	)
}

export { RegisterStack }
