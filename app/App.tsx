/* eslint-disable import/no-default-export */
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '@presentation/common/theme'

export default function App() {
	return (
		<NavigationContainer>
			<ThemeProvider theme={defaultTheme}>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text>
						{'Something'}
					</Text>
				</View>
				{/* <AlertProvider>
					<LoaderProvider>
						<AuthProvider>
							<StartupStack />
						</AuthProvider>
					</LoaderProvider>
				</AlertProvider> */}
			</ThemeProvider>
		</NavigationContainer>
	)
}
