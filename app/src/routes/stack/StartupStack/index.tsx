import 'react-native-gesture-handler'
import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { Splash } from '@presentation/screens/Splash'

import { StartupStackParamList } from '@routes/stack/StartupStack/types'

import { RegisterStack } from '../RegisterStack'

const Stack = createStackNavigator<StartupStackParamList>()

function StartupStack() {
	return (
		<Stack.Navigator
			initialRouteName={'Splash'}
			screenOptions={{
				headerShown: false,
				gestureEnabled: true,
				...TransitionPresets.SlideFromRightIOS
			}}
		>
			<Stack.Screen name={'Splash'} component={Splash} />
			<Stack.Screen name={'RegisterStack'} component={RegisterStack} />
		</Stack.Navigator>
	)
}

export { StartupStack }
