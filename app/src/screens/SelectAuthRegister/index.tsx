import React from 'react'

import { relativeScreenWidth } from '@utils/screenDimensions'

import LogoIcon from '@assets/icons/logo.svg'

import { PrimaryButton } from '@components/buttons/PrimaryButton'
import { VerticalSpacing } from '@components/common/VerticalSpacing'
import { ScreenContainer } from '@components/containers/ScreenContainer'

import {
	AppName, BodyContainer, FooterContainer, HeaderContainer, PresentationText
} from './styles'

function SelectAuthRegister() {
	return (
		<ScreenContainer>
			<HeaderContainer>
				<LogoIcon width={relativeScreenWidth(15)} height={relativeScreenWidth(15)} />
				<AppName>{'My Finances'}</AppName>
			</HeaderContainer>

			<BodyContainer>
				<PresentationText>{'Mantenha suas finanças sob controle\n e tome decisões inteligentes sobre seu dinheiro'}</PresentationText>
			</BodyContainer>

			<FooterContainer>
				<PrimaryButton label={'Criar conta'} filled={false} />
				<VerticalSpacing />
				<PrimaryButton label={'Entrar'} />
			</FooterContainer>
		</ScreenContainer>
	)
}

export { SelectAuthRegister }
