import 'react-native-gesture-handler'
import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { InsertEmail } from '@screens/InsertEmail'
import { InsertPassword } from '@screens/InsertPassword'
import { SelectAuthRegister } from '@screens/SelectAuthRegister'

import { RegisterProvider } from '@contexts/RegisterContext'

import { RegisterStackParamList } from '@routes/stack/RegisterStack/types'

const Stack = createStackNavigator<RegisterStackParamList>()

function RegisterStack() {
	return (
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
				<Stack.Screen name={'InsertEmail'} component={InsertEmail} />
				<Stack.Screen name={'InsertPassword'} component={InsertPassword} />
			</Stack.Navigator>
		</RegisterProvider>
	)
}

export { RegisterStack }
