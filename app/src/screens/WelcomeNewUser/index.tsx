import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

import { appFonts } from '@common/fonts'
import { useTheme } from 'styled-components'

import { relativeScreenDensity } from '@utils/screenDimensions'

import { PresentationCarousel } from '@components/carousel/PresentationCarousel'
import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'

function WelcomeNewUser() {
	const [termsOfServiceHasAccepted, setTermsOfServiceHasAccepted] = useState<boolean>(false)

	const theme = useTheme()

	const submitTermsAndConditions = async () => {

		// navigation.navigate('Home')
	}

	return (
		<ScreenContainer
			topSafeAreaColor={theme.green4}
			padding={0}
		>
			<FormContainer
				title={'Tudo certo, Mario?'}
				errorMessage={'Você deve aceitar os termos e condições primeiro!'}
				validateField={() => termsOfServiceHasAccepted}
				onSubmit={submitTermsAndConditions}
			>
				<PresentationCarousel />
				<BouncyCheckbox
					size={relativeScreenDensity(20)}
					fillColor={theme.green1}
					text={'Aceito os termos de serviço e privacidade'}
					isChecked={termsOfServiceHasAccepted}
					iconStyle={{ borderRadius: 0 }}
					innerIconStyle={{
						borderWidth: 2,
						borderRadius: 0
					}}
					textStyle={{
						fontFamily: appFonts.Inter400Regular,
						fontSize: parseInt(appFonts.size.small1, 10),
						textDecorationLine: 'none',
					}}
					onPress={(isChecked: boolean) => setTermsOfServiceHasAccepted(isChecked)}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { WelcomeNewUser }
