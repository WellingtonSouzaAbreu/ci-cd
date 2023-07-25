import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'

import { useFonts } from '@expo-google-fonts/inter'
import { SplashScreenProps } from '@routes/stack/StartupStack/screenProps'
import { useTheme } from 'styled-components/native'

// import { handleMethodWithAuthentication } from '@services/auth'
import { getAppFonts } from '@utils/fonts'
import { relativeScreenWidth } from '@utils/screenDimensions'

import Logo from '@assets/icons/logo.svg'

import { ScreenContainer } from '@components/containers/ScreenContainer'

import { Credits } from './styles'

function Splash({ navigation }: SplashScreenProps) {
	// const {} = useContext()

	const [fontsAreLoaded] = useFonts({ ...getAppFonts() })
	const theme = useTheme()

	const navigateToAuthRegisterScreen = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'RegisterStack' }]
		})
	}

	/* const navigateToHomeScreen = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'RegisterStack' }]
		})
	} */

	const performQuickLogout = async () => {
		navigateToAuthRegisterScreen()
	}

	const initializeSession = async () => {
		// const hasLocalUserData = true // Check local user

		performQuickLogout()
		/* if (hasLocalUserData) {
			setTimeout(async () => handleMethodWithAuthentication(performQuickLogout), 1000)
		} else {
			setTimeout(async () => navigateToHomeScreen(), 1000)
		} */
	}

	useEffect(() => {
		if (fontsAreLoaded) {
			initializeSession()
		}
	}, [navigation, fontsAreLoaded])

	return (
		<ScreenContainer justifyContent={'center'}>
			{
				fontsAreLoaded
					? (
						<Logo
							width={relativeScreenWidth(15)}
							height={relativeScreenWidth(15)}
							onPress={() => navigation.navigate('RegisterStack')}
						/>
					)
					: (
						<ActivityIndicator size={'large'} color={theme.green1} />
					)
			}
			<Credits>{'from tonsa'}</Credits>
		</ScreenContainer>
	)
}

export { Splash }
