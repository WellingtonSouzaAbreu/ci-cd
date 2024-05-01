import * as AuthSession from 'expo-auth-session/providers/google'
import React, { useEffect } from 'react'
import { Alert } from 'react-native'

import LogoIcon from '@assets/icons/logo.svg'
import { PrimaryButton } from '@components/buttons/PrimaryButton'
import { VerticalSpacing } from '@components/common/VerticalSpacing'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { firebaseAuthentication } from '@config/firebase/config'
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth'

import { SelectAuthRegisterScreenProps } from '@routes/stacks/StartupStack/screenProps'

import {
	AppName,
	BodyContainer,
	FooterContainer,
	HeaderContainer,
	PresentationText
} from './styles'
import { relativeScreenWidth } from '@presentation/common/screenDimensions'

function SelectAuthRegister({ navigation }: SelectAuthRegisterScreenProps) {
	/* const configureGoogle = () => {
		console.log('config start')
		GoogleSignin.configure({ webClientId: '1098749319538-c6aq3ptap99kmra8jrau1f651k6ms9v3.apps.googleusercontent.com', })
		console.log('config finish')
	}

	useEffect(() => {
		configureGoogle()
	}, []) */

	const navigateToRegisterStack = () => {
		navigation.navigate('RegisterStack')
	}

	const navigateToSiginStack = () => {
		navigation.navigate('SigninStack')
	}

	const [tokenGoogle, setTokenGoogle] = React.useState<string | undefined>()

	const [request, response, promptAsyncGoogle] = AuthSession.useAuthRequest({
		clientId: '1098749319538-c6aq3ptap99kmra8jrau1f651k6ms9v3.apps.googleusercontent.com',
		iosClientId: '1098749319538-7aqvlop59p1crlldvjsjt5233l6ln00u.apps.googleusercontent.com',
	}, {})

	React.useEffect(() => {
		if (response?.type === 'success') {
			const { authentication } = response
			console.log(authentication?.accessToken)

			authAgoraVaiPoha(authentication?.accessToken)

			setTokenGoogle(authentication.accessToken)
		}
	}, [response, tokenGoogle])

	const authAgoraVaiPoha = async (token: string) => {
		const fireCredential = GoogleAuthProvider.credential(null, token)
		const userCredential = await signInWithCredential(firebaseAuthentication, fireCredential)

		console.log(userCredential)
		Alert.alert('Logado com sucesso no firebase!', userCredential.user.uid)
	}

	const authSession = () => {
		promptAsyncGoogle()
	}

	return (
		<ScreenContainer withPadding>
			<HeaderContainer>
				<LogoIcon width={relativeScreenWidth(15)} height={relativeScreenWidth(15)} />
				<AppName>{'My Finances'}</AppName>
			</HeaderContainer>

			<BodyContainer>
				<PresentationText>{'Mantenha suas finanças sob controle\n e tome decisões inteligentes sobre seu dinheiro'}</PresentationText>
			</BodyContainer>

			<FooterContainer>
				<PrimaryButton
					label={'Criar conta'} filled={false}
					onPress={navigateToRegisterStack}
				/>
				<VerticalSpacing />
				<PrimaryButton
					label={'Entrar'}
					onPress={authSession}
				/>
			</FooterContainer>
		</ScreenContainer>
	)
}

export { SelectAuthRegister }
