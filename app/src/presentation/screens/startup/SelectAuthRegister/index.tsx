import React from 'react'

import LogoIcon from '@assets/icons/logo.svg'
import { PrimaryButton } from '@components/buttons/PrimaryButton'
import { VerticalSpacing } from '@components/common/VerticalSpacing'
import { ScreenContainer } from '@components/containers/ScreenContainer'

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
	const navigateToRegisterStack = () => {
		navigation.push('RegisterStack')
	}

	const navigateToSiginStack = () => {
		navigation.push('SigninStack')
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
					onPress={navigateToSiginStack}
				/>
			</FooterContainer>
		</ScreenContainer>
	)
}

export { SelectAuthRegister }
