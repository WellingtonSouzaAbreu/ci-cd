/* eslint-disable import/no-default-export */
import React from 'react'

import { SplashScreen } from '@screens/SplashScreen';
import { ThemeProvider } from 'styled-components';

export default function App() {
	return (
		<ThemeProvider theme={{}}>
			<SplashScreen />
		</ThemeProvider>
	)
}
