import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import CheckedList from '@assets/images/checkedList.svg'
import EmbraceMoney from '@assets/images/embraceMoney.svg'
import MoneyBag from '@assets/images/moneyBag.svg'
import { CustomCarousel } from '@components/carousel/CustomCarousel'
import { PrimaryCheckbox } from '@components/checkbox/PrimaryCheckbox'
import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'

import { useAuthContext } from '@contexts/AuthContext'

import { WelcomeNewUserScreenProps } from '@routes/stacks/RegisterStack/screenProps'

import { CarouselContext, CarouselItemText, Content } from './styles'
import { relativeScreenDensity, relativeScreenHeight } from '@presentation/common/screenDimensions'

function WelcomeNewUser({ navigation }: WelcomeNewUserScreenProps) {
	const { userRegistrationData } = useAuthContext()

	const [termsOfServiceHasAccepted, setTermsOfServiceHasAccepted] = useState<boolean>(false)

	const getUserName = () => {
		if (userRegistrationData && !userRegistrationData.name) return 'amigo'
		if (userRegistrationData.name.includes(' ')) {
			return userRegistrationData.name.split(' ')[0]
		}
		return userRegistrationData.name
	}

	const submitTermsAndConditions = () => {
		navigation.reset({ index: 0, routes: [{ name: 'HomeTab' }] })
	}

	const theme = useTheme()

	return (
		<ScreenContainer topSafeAreaColor={theme.green4}>
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
