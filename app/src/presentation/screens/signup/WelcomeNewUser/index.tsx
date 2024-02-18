import 'react-native-gesture-handler'
import React from 'react'
import { useTheme } from 'styled-components'

import { relativeScreenDensity, relativeScreenHeight } from '@presentation/utils/screenDimensions'

import { CarouselContext, CarouselItemText, Content } from './styles'
import CheckedList from '@presentation/assets/images/checkedList.svg'
import EmbraceMoney from '@presentation/assets/images/embraceMoney.svg'
import MoneyBag from '@presentation/assets/images/moneyBag.svg'

import { CustomCarousel } from '@presentation/components/carousel/CustomCarousel'
import { PrimaryCheckbox } from '@presentation/components/checkbox/PrimaryCheckbox'
import { FormContainer } from '@presentation/components/containers/FormContainer'
import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'

import { useViewController } from './index.controller'

function WelcomeNewUser() {
	const {
		termsOfServiceHasAccepted,
		setTermsOfServiceHasAccepted,
		getUserName,
		submitTermsAndConditions
	} = useViewController()
	const theme = useTheme()

	return (
		<ScreenContainer
			topSafeAreaColor={theme.green4}
			padding={0}
		>
			<FormContainer
				title={`Tudo certo, ${getUserName()}?`}
				errorMessage={'Você deve aceitar os termos e condições primeiro!'}
				validateField={() => termsOfServiceHasAccepted}
				onSubmit={submitTermsAndConditions}
			>
				<Content>
					<CustomCarousel
						height={relativeScreenHeight(35)}
					>
						<CarouselContext>
							<MoneyBag height={'80%'} width={'70%'} />
							<CarouselItemText>{'Gerencie sua grana'}</CarouselItemText>
						</CarouselContext>
						<CarouselContext>
							<CheckedList height={'80%'} width={'70%'} />
							<CarouselItemText>{'Tudo organizado'}</CarouselItemText>
						</CarouselContext>
						<CarouselContext>
							<EmbraceMoney height={'80%'} width={'70%'} />
							<CarouselItemText>{'E tenha controle  da sua vida financeira'}</CarouselItemText>
						</CarouselContext>
					</CustomCarousel>
				</Content>
				<PrimaryCheckbox
					size={relativeScreenDensity(20)}
					fillColor={theme.green1}
					text={'Aceito os termos de serviço e privacidade'}
					isChecked={termsOfServiceHasAccepted}
					onPress={(isChecked: boolean) => setTermsOfServiceHasAccepted(isChecked)}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { WelcomeNewUser }
