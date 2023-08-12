/* eslint-disable import/no-default-export */
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { LoaderProvider } from '@contexts/LoaderContext/index'

import { StartupStack } from '@routes/stacks/StartupStack'

import { defaultTheme } from '@presentation/common/theme'

export default function App() {
	return (
		<NavigationContainer>
			<ThemeProvider theme={defaultTheme}>
				<LoaderProvider>
					<StatusBar backgroundColor={'green'} />
					<StartupStack />
				</LoaderProvider>
			</ThemeProvider>
		</NavigationContainer>
	)
}
