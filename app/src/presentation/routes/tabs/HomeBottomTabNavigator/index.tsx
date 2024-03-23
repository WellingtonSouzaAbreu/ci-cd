import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useContext } from 'react'
import { useTheme } from 'styled-components'

import { UserDataContext } from '@contexts/UserDataContext'

import { FinanceRegisterStack } from '@routes/stacks/FinanceRegisterStack'

import GraphActiveIcon from '@assets/icons/graph-active.svg'
import GraphInactiveIcon from '@assets/icons/graph-inactive.svg'
import HomeActiveIcon from '@assets/icons/home-active.svg'
import HomeInactiveIcon from '@assets/icons/home-inactive.svg'
import PlusActiveIcon from '@assets/icons/plus-active.svg'
import PlusInactiveIcon from '@assets/icons/plus-inactive.svg'

import { HistoryAndMetrics } from '@screens/home/HistoryAndMetrics'
import { Home } from '@screens/home/Home'

const Tab = createBottomTabNavigator()

function HomeBottomTabNavigator() {
	const { userDataContext } = useContext(UserDataContext)
	const theme = useTheme()

	const renderHomeIcon = (focused: boolean) => {
		console.log(userDataContext)
		return focused
			? <HomeActiveIcon height={'60%'} width={'60%'} />
			: <HomeInactiveIcon height={'40%'} width={'40%'} />
	}

	const renderRegisterIcon = (focused: boolean) => {
		return focused
			? <PlusActiveIcon height={'60%'} width={'60%'} />
			: <PlusInactiveIcon height={'40%'} width={'40%'} />
	}

	const renderInfoIcon = (focused: boolean) => {
		return focused
			? <GraphActiveIcon height={'60%'} width={'60%'} />
			: <GraphInactiveIcon height={'40%'} width={'40%'} />
	}

	return (
		<Tab.Navigator
			initialRouteName={'Register'}
			screenOptions={{
				tabBarHideOnKeyboard: true,
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveBackgroundColor: theme.white1,
				tabBarActiveTintColor: theme.green5,
			}}
		>
			<Tab.Screen
				name={'Home'}
				component={Home}
				options={{ tabBarIcon: ({ focused }) => renderHomeIcon(focused) }}
			/>
			<Tab.Screen
				name={'Register'}
				component={FinanceRegisterStack}
				options={{ tabBarIcon: ({ focused }) => renderRegisterIcon(focused) }}
			/>
			<Tab.Screen
				name={'HistoryAndMetrics'}
				component={HistoryAndMetrics}
				options={{ tabBarIcon: ({ focused }) => renderInfoIcon(focused) }}
			/>
		</Tab.Navigator>
	)
}

export { HomeBottomTabNavigator }
