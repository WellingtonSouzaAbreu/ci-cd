import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'

import { FinanceRegisterProvider } from 'src/contexts/FinanceRegisterContext'

import { FinanceRegisterStackParamList } from '@presentation/routes/stacks/FinanceRegisterStack/types'

import { SelectFinanceCategory } from '@presentation/screens/home/registerFinance/SelectFinanceCategory'
import { SelectFinanceType } from '@presentation/screens/home/registerFinance/SelectFinanceType'

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
