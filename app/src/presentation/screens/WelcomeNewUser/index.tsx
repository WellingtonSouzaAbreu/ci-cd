import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { TextStyle } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useTheme } from 'styled-components'

import { appFonts } from '@presentation/common/fonts'
import { relativeScreenDensity, relativeScreenHeight } from '@presentation/utils/screenDimensions'

import { WelcomeNewUserScreenProps } from '@routes/stacks/RegisterStack/screenProps'

import { CarouselContext, CarouselItemText, Content } from './styles'
import CheckedList from '@presentation/assets/images/checkedList.svg'
import EmbraceMoney from '@presentation/assets/images/embraceMoney.svg'
import MoneyBag from '@presentation/assets/images/moneyBag.svg'

import { CustomCarousel } from '@presentation/components/carousel/CustomCarousel'
import { FormContainer } from '@presentation/components/containers/FormContainer'
import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'

function WelcomeNewUser({ navigation }: WelcomeNewUserScreenProps) {
	const [termsOfServiceHasAccepted, setTermsOfServiceHasAccepted] = useState<boolean>(false)

	const theme = useTheme()

	const submitTermsAndConditions = async () => {
		navigation.navigate('Home')
	}

	const styles = {
		checkboxIcon: { borderRadius: 0 },
		checkboxInnerIcon: {
			borderWidth: 2,
			borderRadius: 0
		},
		checkboxText: {
			fontFamily: appFonts.Inter400Regular,
			fontSize: parseInt(appFonts.size.small1, 10),
			textDecorationLine: 'none' as TextStyle['textDecorationLine'],
		}
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
				<BouncyCheckbox
					size={relativeScreenDensity(20)}
					fillColor={theme.green1}
					text={'Aceito os termos de serviço e privacidade'}
					isChecked={termsOfServiceHasAccepted}
					iconStyle={styles.checkboxIcon}
					innerIconStyle={styles.checkboxInnerIcon}
					textStyle={styles.checkboxText}
					onPress={(isChecked: boolean) => setTermsOfServiceHasAccepted(isChecked)}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { WelcomeNewUser }
