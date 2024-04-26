/* eslint-disable import/no-default-export */
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { AlertProvider } from '@contexts/AlertContext'
import { LoaderProvider } from '@contexts/LoaderContext/index'
import { UserDataProvider } from '@contexts/UserDataContext'

import { StartupStack } from '@routes/stacks/StartupStack'

import { defaultTheme } from '@presentation/common/theme'

// REFACTOR Remove expo-system-ui - usada somente para builds em desenvolvimento

export default function App() {
	return (
		<NavigationContainer>
			<ThemeProvider theme={defaultTheme}>
				<AlertProvider>
					<LoaderProvider>
						<UserDataProvider>
							<StartupStack />
						</UserDataProvider>
					</LoaderProvider>
				</AlertProvider>
			</ThemeProvider>
		</NavigationContainer>
	)
}
