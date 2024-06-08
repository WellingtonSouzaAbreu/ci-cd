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

import { useUserDomain } from '@domain/user/useUserDomain'

import { useAlertContext } from '@contexts/AlertContext'
import { useAuthContext } from '@contexts/AuthContext'
import { useLoaderContext } from '@contexts/LoaderContext'

import { CarouselContext, CarouselItemText, Content } from './styles'
import { relativeScreenDensity, relativeScreenHeight } from '@presentation/common/screenDimensions'

const { performSignup, updateUserRepository } = useUserDomain()

function WelcomeNewUser() {
	const { showContextModal } = useAlertContext()
	const { setLoaderIsVisible } = useLoaderContext()
	const { userRegistrationData, setUserDataOnContext } = useAuthContext()
	const [termsOfServiceHasAccepted, setTermsOfServiceHasAccepted] = useState<boolean>(false)

	const getUserName = () => {
		if (userRegistrationData && !userRegistrationData.name) return 'amigo'
		if (userRegistrationData.name.includes(' ')) {
			return userRegistrationData.name.split(' ')[0]
		}
		return userRegistrationData.name
	}

	const submitTermsAndConditions = async () => {
		try {
			if (!termsOfServiceHasAccepted) throw new Error('Você deve aceitar os termos e condições primeiro!')

			setLoaderIsVisible(true)

			const createdUser = await performSignup(userRegistrationData)
			await updateUserRepository(createdUser) // Realizar update dentro do signup
			setUserDataOnContext(createdUser)
			setLoaderIsVisible(false)
		} catch (error) {
			console.log(error.code)
			switch (error.code) {
				case 'auth/email-already-in-use': return showContextModal('', 'O email já está sendo utilizado')
			}

			return showContextModal('', error.code)
		}
	}

	const theme = useTheme()

	return (
		<ScreenContainer topSafeAreaColor={theme.green4}>
			<FormContainer
				title={`Tudo certo, ${getUserName()}?`}
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
