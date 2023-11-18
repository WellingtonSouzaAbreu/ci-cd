import { useFonts } from '@expo-google-fonts/inter'
import * as Updates from 'expo-updates'
import React, { useEffect } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import { useTheme } from 'styled-components/native'

import { getAppFonts } from '@presentation/utils/fonts'
import { relativeScreenWidth } from '@presentation/utils/screenDimensions'

import { UserGatewayLocalAdapter } from '@data/localStorage/gatewayAdapters/UserGatewayLocalAdapter'

import { SplashScreenProps } from '@routes/stacks/StartupStack/screenProps'

import { Credits } from './styles'
import Logo from '@presentation/assets/icons/logo.svg'

import { UserAdapter } from '@presentation/adapters/UserAdapter'

import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'

const { handleAuthenticatedMethod } = UserAdapter()
const { hasValidLocalUser } = UserGatewayLocalAdapter()

function Splash({ navigation }: SplashScreenProps) {
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
				initializeSession()
			}
		} catch (error: any) {
			// console.log(error)
			console.log('No Updates catch')
			initializeSession()
		}
	}

	const hasUpdates = async () => {
		// eslint-disable-next-line no-undef
		if (__DEV__) return { isAvailable: false }
		return Updates.checkForUpdateAsync()
	}

	const initializeSession = async () => {
		const hasLocalUserData = await hasValidLocalUser()

		setTimeout(async () => {
			if (hasLocalUserData) {
				const res = await handleAuthenticatedMethod(performQuickSingin)
				console.log(res)
				if (res) {
					return navigateToHomeScreen()
				}
				return navigateToAuthRegisterScreen()
			}

			navigateToAuthRegisterScreen()
		}, 2000)
	}

	const performQuickSingin = async () => {
		navigateToHomeScreen()
	}

	const navigateToAuthRegisterScreen = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'SelectAuthRegister' }]
		})
	}

	const navigateToHomeScreen = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'Home' }]
		})
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
