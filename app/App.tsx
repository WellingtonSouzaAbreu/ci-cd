/* eslint-disable import/no-default-export */
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { LoaderProvider } from '@presentation/contexts/LoaderContext/index'
import { UserDataProvider } from '@presentation/contexts/UserDataContext'
import { StartupStack } from '@presentation/routes/stacks/StartupStack'

import { AlertProvider } from '@contexts/AlertContext'

import { defaultTheme } from '@presentation/common/theme'

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
