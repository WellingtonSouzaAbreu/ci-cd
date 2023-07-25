import 'react-native-gesture-handler'
import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { InsertEmail } from '@screens/InsertEmail'
import { SelectAuthRegister } from '@screens/SelectAuthRegister'

import { RegisterStackParamList } from '@routes/stack/RegisterStack/types'

const Stack = createStackNavigator<RegisterStackParamList>()

function RegisterStack() {
	return (
		<Stack.Navigator
			initialRouteName={'SelectAuthRegister'}
			screenOptions={{
				headerShown: false,
				gestureEnabled: true,
				...TransitionPresets.SlideFromRightIOS
			}}
		>
			<Stack.Screen name={'InsertEmail'} component={InsertEmail} />
			<Stack.Screen name={'SelectAuthRegister'} component={SelectAuthRegister} />
		</Stack.Navigator>
	)
}

export { RegisterStack }
