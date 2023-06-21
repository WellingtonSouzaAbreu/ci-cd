import React from 'react'
import { ActivityIndicator } from 'react-native'

import { useFonts } from '@expo-google-fonts/inter'

import { getAppFonts } from '@utils/fonts'
import { relativeScreenWidth } from '@utils/screenDimensions'

import Logo from '@assets/icons/logo.svg'

import { Container, Credits } from './styles'

function SplashScreen() {
	const [fontsAreLoaded] = useFonts({ ...getAppFonts() })

	return (
		<Container>
			{
				fontsAreLoaded
					? (
						<Logo
							width={relativeScreenWidth(15)}
							height={relativeScreenWidth(15)}
						/>
					)
					: (
						<ActivityIndicator
							size={'large'}
							color={'#2D9964'}
						/>
					)
			}
			<Credits>{'from nobody'}</Credits>
		</Container>
	)
}

export { SplashScreen }
