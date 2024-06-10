import { useFonts } from '@expo-google-fonts/inter'
import * as Updates from 'expo-updates'
import React, { useEffect } from 'react'
import { useTheme } from 'styled-components/native'

import Logo from '@assets/icons/logo.svg'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { env } from '@env'
import { getAppFonts } from '@presentation/common/fonts'

import { SplashScreenProps } from '@routes/stacks/StartupStack/screenProps'

import { Credits, NativeLoader } from './styles'
import { relativeScreenWidth } from '@presentation/common/screenDimensions'

function Splash({ navigation }: SplashScreenProps) {
	const [fontsAreLoaded] = useFonts({ ...getAppFonts() })
	const theme = useTheme()

	useEffect(() => {
		if (fontsAreLoaded) {
			checkUpdates()
		}
	}, [navigation, fontsAreLoaded])

	const checkUpdates = async () => {
		// await onFetchUpdateAsync()
	}

	const onFetchUpdateAsync = async () => {
		try {
			const update = await hasUpdates()
			if (update.isAvailable) {
				await Updates.fetchUpdateAsync()
				await Updates.reloadAsync()
				// Alert.alert('Atualização disponível', 'Vai ser rapidinho, você nem vai perceber!', [
				// 	{ text: 'OK', onPress: Updates.reloadAsync }
				// ])
			}
		} catch (error: any) {
			console.log(error)
		}
	}

	const hasUpdates = async () => {
		// eslint-disable-next-line no-undef
		if (__DEV__) return { isAvailable: false }
		return Updates.checkForUpdateAsync()
	}

	return (
		<ScreenContainer justifyContent={'center'}>
			<Logo
				width={relativeScreenWidth(15)}
				height={relativeScreenWidth(15)}
				onPress={() => console.log(env)}
			/>
			<NativeLoader size={'large'} color={theme.green1} />
			<Credits>{'from tonsa'}</Credits>
		</ScreenContainer>
	)
}

export { Splash }
