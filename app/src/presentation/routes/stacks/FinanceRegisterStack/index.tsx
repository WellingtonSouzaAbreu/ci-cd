import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'

import { RegisterProvider } from '@contexts/RegisterContext'

import { FinanceRegisterStackParamList } from '@presentation/routes/stacks/FinanceRegisterStack/types'

import { SelectFinanceType } from '@presentation/screens/home/registerFinances/SelectFinanceType'

const Stack = createStackNavigator<FinanceRegisterStackParamList>()

function FinanceRegisterStack() {
	return (
		<RegisterProvider>
			<Stack.Navigator
				initialRouteName={'SelectFinanceType'}
				screenOptions={{
					headerShown: false,
					gestureEnabled: true,
					...TransitionPresets.SlideFromRightIOS
				}}
			>
				<Stack.Screen name={'SelectFinanceType'} component={SelectFinanceType} />
			</Stack.Navigator>
		</RegisterProvider>
	)
}

export { FinanceRegisterStack }
