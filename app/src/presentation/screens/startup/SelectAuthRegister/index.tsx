import React from 'react'

import { SelectAuthRegisterScreenProps } from '@presentation/routes/stacks/StartupStack/screenProps'
import { relativeScreenWidth } from '@presentation/utils/screenDimensions'

import {
	AppName,
	BodyContainer,
	FooterContainer,
	HeaderContainer,
	PresentationText
} from './styles'
import LogoIcon from '@presentation/assets/icons/logo.svg'

import { PrimaryButton } from '@presentation/components/buttons/PrimaryButton'
import { VerticalSpacing } from '@presentation/components/common/VerticalSpacing'
import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'

function SelectAuthRegister({ navigation }: SelectAuthRegisterScreenProps) {
	const navigateToRegisterStack = () => {
		navigation.navigate('RegisterStack')
	}

	const navigateToSiginStack = () => {
		navigation.navigate('SigninStack')
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
