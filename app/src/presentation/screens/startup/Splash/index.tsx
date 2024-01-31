import { useFonts } from '@expo-google-fonts/inter'
import * as Updates from 'expo-updates'
import React, { useEffect } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import { useTheme } from 'styled-components/native'

import { getAppFonts } from '@presentation/utils/fonts'
import { relativeScreenWidth } from '@presentation/utils/screenDimensions'

import { SplashScreenProps } from '@routes/stacks/StartupStack/screenProps'

import { userRepositoryAdapter } from '@data/user/userRepositoryAdapter'
import { UserAdapter } from '@presentation/adapters/user/UserAdapter'

import { Credits } from './styles'
import Logo from '@presentation/assets/icons/logo.svg'

import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'

const { hasValidLocalUser, handleAuthenticatedMethod } = UserAdapter()

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
				Alert.alert('Atualização disponível', 'Vai ser rapidinho, você nem vai perceber', [
					{
						text: 'OK',
						onPress: Updates.reloadAsync,
					},
				])
			} else {
				initializeSession()
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
		const hasLocalUserData = await hasValidLocalUser(userRepositoryAdapter)

		if (hasLocalUserData) {
			await handleAuthenticatedMethod(performQuickSingin)
		} else {
			return navigateToAuthRegisterScreen()
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
