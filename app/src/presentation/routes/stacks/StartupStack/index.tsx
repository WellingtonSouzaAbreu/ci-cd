import 'react-native-gesture-handler'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'

import { HomeBottomTabNavigator } from '@presentation/routes/tabs/HomeBottomTabNavigator'

import { StartupStackParamList } from '@presentation/routes/stacks/StartupStack/types'

import { SelectAuthRegister } from '@presentation/screens/startup/SelectAuthRegister'
import { Splash } from '@presentation/screens/startup/Splash'

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
			<Stack.Screen
				name={'RegisterStack'}
				component={RegisterStack}
				options={{ gestureEnabled: false }}
			/>
			<Stack.Screen
				name={'SigninStack'}
				component={SigninStack}
				options={{ gestureEnabled: false }}
			/>
			<Stack.Screen name={'HomeTab'} component={HomeBottomTabNavigator} />
		</Stack.Navigator>
	)
}

export { StartupStack }
