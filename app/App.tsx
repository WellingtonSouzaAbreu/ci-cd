/* eslint-disable import/no-default-export */
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { StartupStack } from '@routes/stacks/StartupStack'

import { defaultTheme } from '@presentation/common/theme'

export default function App() {
	return (
		<NavigationContainer>
			<ThemeProvider theme={defaultTheme}>
				<StatusBar backgroundColor={'green'} />
				<StartupStack />
			</ThemeProvider>
		</NavigationContainer>
	)
}
