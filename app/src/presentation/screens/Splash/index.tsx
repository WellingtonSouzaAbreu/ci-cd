import { useFonts } from '@expo-google-fonts/inter'
import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components/native'

import { getAppFonts } from '@presentation/utils/fonts'
import { relativeScreenWidth } from '@presentation/utils/screenDimensions'

import { SplashScreenProps } from '@routes/stacks/StartupStack/screenProps'

// import { handleMethodWithAuthentication } from '@services/auth'

import { Credits } from './styles'
import Logo from '@presentation/assets/icons/logo.svg'

import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'

function Splash({ navigation }: SplashScreenProps) {
	// const {} = useContext()

	const [fontsAreLoaded] = useFonts({ ...getAppFonts() })
	const theme = useTheme()

	const navigateToAuthRegisterScreen = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'SelectAuthRegister' }]
		})
	}

	/* const navigateToHomeScreen = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'RegisterStack' }]
		})
	} */

	const performQuickSingin = async () => {
		// navigateToHomeScreen()
		navigateToAuthRegisterScreen()
	}

	const initializeSession = async () => {
		// const hasLocalUserData = true // Check local user

		performQuickSingin()
		/* if (hasLocalUserData) {
			setTimeout(async () => handleMethodWithAuthentication(performQuickSingin), 1000)
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
