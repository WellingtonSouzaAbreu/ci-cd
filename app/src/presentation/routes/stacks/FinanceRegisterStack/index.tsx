import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'

import { SelectFinanceCategory } from '@screens/home/registerFinance/SelectFinanceCategory'
import { SelectFinanceType } from '@screens/home/registerFinance/SelectFinanceType'

import { FinanceRegisterProvider } from '@contexts/FinanceRegisterContext'

import { FinanceRegisterStackParamList } from '@routes/stacks/FinanceRegisterStack/types'

const Stack = createStackNavigator<FinanceRegisterStackParamList>()

function FinanceRegisterStack() {
	return (
		<FinanceRegisterProvider>
			<Stack.Navigator
				initialRouteName={'SelectFinanceType'}
				screenOptions={{
					headerShown: false,
					gestureEnabled: true,
					...TransitionPresets.SlideFromRightIOS
				}}
			>
				<Stack.Screen name={'SelectFinanceType'} component={SelectFinanceType} />
				<Stack.Screen name={'SelectFinanceCategory'} component={SelectFinanceCategory} />
			</Stack.Navigator>
		</FinanceRegisterProvider>
	)
}

export { FinanceRegisterStack }
