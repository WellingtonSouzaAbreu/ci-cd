import 'react-native-gesture-handler'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'

import { StartupStackParamList } from '@routes/stacks/StartupStack/types'

import { Splash } from '@presentation/screens/Splash'

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
