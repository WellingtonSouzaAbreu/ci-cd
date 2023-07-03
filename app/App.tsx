/* eslint-disable import/no-default-export */
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { StartupStack } from '@routes/stack/StartupStack'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '@common/theme'

export default function App() {
	return (
		<NavigationContainer>
			<ThemeProvider theme={defaultTheme}>
				<StartupStack />
			</ThemeProvider>
		</NavigationContainer>
	)
}
