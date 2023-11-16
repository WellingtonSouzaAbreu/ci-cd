import { useFonts } from '@expo-google-fonts/inter'
import * as Updates from 'expo-updates'
import React, { useEffect } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
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

	useEffect(() => {
		checkUpdates()
	}, [])

	const checkUpdates = async () => {
		await onFetchUpdateAsync()
	}

	const onFetchUpdateAsync = async () => {
		try {
			const update = await hasUpdates()
			if (update.isAvailable) {
				// setConfirmationModalIsVisible(true)
				Alert.alert('Has Update', '', [
					{
						text: 'OK',
						onPress: Updates.reloadAsync,
					},
				])
			} else {
				setTimeout(() => {
					initializeSession()
				}, 3000)
			}
		} catch (error: any) {
			console.log(error)
			setTimeout(() => {
				initializeSession()
			}, 3000)
		}
	}

	const hasUpdates = async () => {
		// eslint-disable-next-line no-undef
		if (__DEV__) return { isAvailable: false }
		return Updates.checkForUpdateAsync()
	}

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
