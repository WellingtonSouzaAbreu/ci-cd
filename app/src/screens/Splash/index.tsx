import React from 'react'
import { ActivityIndicator } from 'react-native'

import { useFonts } from '@expo-google-fonts/inter'
import { SplashScreenProps } from '@routes/stack/StartupStack/screenProps'
import { useTheme } from 'styled-components/native'

import { getAppFonts } from '@utils/fonts'
import { relativeScreenWidth } from '@utils/screenDimensions'

import Logo from '@assets/icons/logo.svg'

import { ScreenContainer } from '@components/containers/ScreenContainer'

import { Credits } from './styles'

function Splash({ navigation }: SplashScreenProps) {
	const [fontsAreLoaded] = useFonts({ ...getAppFonts() })

	const theme = useTheme()

	return (
		<ScreenContainer>
			{
				fontsAreLoaded
					? (
						<Logo
							width={relativeScreenWidth(15)}
							height={relativeScreenWidth(15)}
							onPress={() => navigation.navigate('SelectAuthRegister')}
						/>
					)
					: (
						<ActivityIndicator size={'large'} color={theme.green1} />
					)
			}
			<Credits>{'from nobody'}</Credits>
		</ScreenContainer>
	)
}

export { Splash }
