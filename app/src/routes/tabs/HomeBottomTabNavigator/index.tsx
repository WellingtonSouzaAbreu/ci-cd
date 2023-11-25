import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { useTheme } from 'styled-components'

import GraphActiveIcon from '@presentation/assets/icons/graph-active.svg'
import GraphInactiveIcon from '@presentation/assets/icons/graph-inactive.svg'
import HomeActiveIcon from '@presentation/assets/icons/home-active.svg'
import HomeInactiveIcon from '@presentation/assets/icons/home-inactive.svg'
import PlusActiveIcon from '@presentation/assets/icons/plus-active.svg'
import PlusInactiveIcon from '@presentation/assets/icons/plus-inactive.svg'

import { HistoryAndMetrics } from '@presentation/screens/home/HistoryAndMetrics'
import { Home } from '@presentation/screens/home/Home'
import { Register } from '@presentation/screens/home/Register'

const Tab = createBottomTabNavigator()

function HomeBottomTabNavigator() {
	const theme = useTheme()

	const renderHomeIcon = (focused: boolean) => {
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
			initialRouteName={'HistoryAndMetrics'}
			screenOptions={{
				tabBarHideOnKeyboard: true,
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveBackgroundColor: theme.white1,
				// tabBarInactiveBackgroundColor: theme.green1,
				tabBarActiveTintColor: theme.green5,
				// tabBarInactiveTintColor: theme.white1,
			}}
		>
			<Tab.Screen
				name={'Home'}
				component={Home}
				options={{ tabBarIcon: ({ focused }) => renderHomeIcon(focused) }}
			/>
			<Tab.Screen
				name={'Register'}
				component={Register}
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
