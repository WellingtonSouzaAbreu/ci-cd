import 'react-native-gesture-handler'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'

import { QuickLogin } from '@screens/startup/QuickLogin'
import { SelectAuthRegister } from '@screens/startup/SelectAuthRegister'
import { Splash } from '@screens/startup/Splash'

import { StartupStackParamList } from '@routes/stacks/StartupStack/types'
import { HomeBottomTabNavigator } from '@routes/tabs/HomeBottomTabNavigator'

import { RegisterStack } from '../RegisterStack'
import { SigninStack } from '../SigninStack'

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
			<Stack.Screen name={'QuickLogin'} component={QuickLogin} />
			<Stack.Screen name={'RegisterStack'} component={RegisterStack} />
			<Stack.Screen name={'SigninStack'} component={SigninStack} />
			<Stack.Screen name={'HomeTab'} component={HomeBottomTabNavigator} />
		</Stack.Navigator>
	)
}

export { StartupStack }
