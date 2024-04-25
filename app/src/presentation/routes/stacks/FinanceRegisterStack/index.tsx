import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'

import { InsertFinanceReminder } from '@screens/home/registerFinance/InsertFinanceReminder'
import { InsertFinanceValue } from '@screens/home/registerFinance/InsertFinanceValue'
import { SelectFinanceCategory } from '@screens/home/registerFinance/SelectFinanceCategory'
import { SelectFinanceDate } from '@screens/home/registerFinance/SelectFinanceDate'
import { SelectFinanceType } from '@screens/home/registerFinance/SelectFinanceType'

import { FinanceRegisterProvider } from '@contexts/FinanceRegisterContext'

import { FinanceRegisterStackParamList } from '@routes/stacks/FinanceRegisterStack/types'
import { RegisterTabScreenProps } from '@routes/tabs/HomeBottomTabNavigator/screenProps'
import { useTabDisplay } from '@routes/tabs/useTabDisplay'

const Stack = createStackNavigator<FinanceRegisterStackParamList>()

function FinanceRegisterStack({ route, navigation }: RegisterTabScreenProps) {
	useTabDisplay<'Register', FinanceRegisterStackParamList>({
		navigation,
		route,
		screens: ['SelectFinanceType'],
	})

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
				<Stack.Screen name={'InsertFinanceValue'} component={InsertFinanceValue} />
				<Stack.Screen name={'InsertFinanceReminder'} component={InsertFinanceReminder} />
				<Stack.Screen name={'SelectFinanceDate'} component={SelectFinanceDate} />
			</Stack.Navigator>
		</FinanceRegisterProvider>
	)
}

export { FinanceRegisterStack }
