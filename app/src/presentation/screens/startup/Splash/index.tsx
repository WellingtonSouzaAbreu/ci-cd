import { useFonts } from '@expo-google-fonts/inter'
import * as Updates from 'expo-updates'
import React, { useEffect } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import { useTheme } from 'styled-components/native'

import Logo from '@assets/icons/logo.svg'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { getAppFonts } from '@presentation/common/fonts'

import { useUserDomain } from '@domain/user/useUserDomain'

import { SplashScreenProps } from '@routes/stacks/StartupStack/screenProps'

import { useAuthenticationService } from '@services/authentication/useAuthenticationService'

import { useUserRepository } from '@data/user/useUserRepository'

import { Credits } from './styles'
import { relativeScreenWidth } from '@presentation/common/screenDimensions'

const { hasValidLocalUser, handleMethodWithDeviceAuthentication } = useUserDomain()

function Splash({ navigation }: SplashScreenProps) {
	const [fontsAreLoaded] = useFonts({ ...getAppFonts() })
	const theme = useTheme()

	useEffect(() => {
		if (fontsAreLoaded) {
			checkUpdates()
		}
	}, [navigation, fontsAreLoaded])

	const checkUpdates = async () => {
		await onFetchUpdateAsync()
	}

	const onFetchUpdateAsync = async () => {
		try {
			const update = await hasUpdates()
			if (update.isAvailable) {
				Alert.alert('Atualização disponível', 'Vai ser rapidinho, você nem vai perceber', [
					{
						text: 'OK',
						onPress: Updates.reloadAsync,
					},
				])
			} else {
				return initializeSession()
			}
		} catch (error: any) {
			console.log(error)
			initializeSession()
		}
	}

	const hasUpdates = async () => {
		// eslint-disable-next-line no-undef
		if (__DEV__) return { isAvailable: false }
		return Updates.checkForUpdateAsync()
	}

	const initializeSession = async () => {
		try {
			const hasLocalUserData = await hasValidLocalUser(useUserRepository)

			if (hasLocalUserData) {
				await handleMethodWithDeviceAuthentication(performQuickSingin, useAuthenticationService)
			} else {
				return navigateToAuthRegisterScreen()
			}
		} catch (err) {
			navigateToAuthRegisterScreen()
		}
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
			routes: [{ name: 'HomeTab' }]
		})
	}

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
