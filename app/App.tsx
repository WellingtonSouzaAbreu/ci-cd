/* eslint-disable import/no-default-export */
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { AlertProvider } from '@contexts/AlertContext'
import { AuthProvider } from '@contexts/AuthContext'
import { FinanceRegisterProvider } from '@contexts/FinanceRegisterContext'
import { LoaderProvider } from '@contexts/LoaderContext/index'

import { StartupStack } from '@routes/stacks/StartupStack'

import { defaultTheme } from '@presentation/common/theme'

export default function App() {
	return (
		<NavigationContainer>
			<ThemeProvider theme={defaultTheme}>
				<AlertProvider>
					<LoaderProvider>
						<FinanceRegisterProvider>
							<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
								<Text>
									{'Something'}
								</Text>
							</View>
							{/* <StartupStack /> */}
						</FinanceRegisterProvider>
					</LoaderProvider>
				</AlertProvider>
			</ThemeProvider>
		</NavigationContainer>
	)
}
