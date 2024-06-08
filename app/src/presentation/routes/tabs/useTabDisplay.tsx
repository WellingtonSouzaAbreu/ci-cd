import { type BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { useLayoutEffect, useMemo } from 'react'

import { HomeTabParamList } from './HomeBottomTabNavigator/types'

const useTabDisplay = <TabScreen extends keyof HomeTabParamList, Stack>
	({ navigation, route, screens }: BottomTabScreenProps<HomeTabParamList, TabScreen>
		& { screens: Array<keyof Stack> }) => {
	const visibleRoutes = useMemo(() => screens, [])

	useLayoutEffect(() => {
		const routeName = getFocusedRouteNameFromRoute(route) as keyof Stack
		navigation.setOptions({
			tabBarStyle: {
				display: routeName === undefined
					|| visibleRoutes.includes(routeName) ? 'flex' : 'none'
			}
		})
	}, [navigation, route])
}

export { useTabDisplay }
