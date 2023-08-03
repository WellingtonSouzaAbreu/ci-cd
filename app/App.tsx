/* eslint-disable import/no-default-export */
import React from 'react'
import { StatusBar } from 'react-native'

import { defaultTheme } from '@presentation/common/theme'
import { NavigationContainer } from '@react-navigation/native'
import { StartupStack } from '@routes/stacks/StartupStack'
import { ThemeProvider } from 'styled-components'

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
