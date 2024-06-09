/* eslint-disable import/no-default-export */
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { AlertProvider } from '@contexts/AlertContext'
import { AuthProvider } from '@contexts/AuthContext'
import { LoaderProvider } from '@contexts/LoaderContext/index'

import { StartupStack } from '@routes/stacks/StartupStack'

import { defaultTheme } from '@presentation/common/theme'

export default function App() {
	// TRY
	return (
		<NavigationContainer>
			<ThemeProvider theme={defaultTheme}>
				<AlertProvider>
					<LoaderProvider>
						<AuthProvider>
							<StartupStack />
						</AuthProvider>
					</LoaderProvider>
				</AlertProvider>
			</ThemeProvider>
		</NavigationContainer>
	)
}
