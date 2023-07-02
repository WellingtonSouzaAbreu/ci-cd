import 'react-native-gesture-handler'
import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { SelectAuthRegister } from '@screens/SelectAuthRegister'
import { Splash } from '@screens/Splash'

import { StartupStackParamList } from '@routes/stack/StartupStack/types'

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
			<Stack.Screen name={'SelectAuthRegister'} component={SelectAuthRegister} />
		</Stack.Navigator>
	)
}

export { StartupStack }
