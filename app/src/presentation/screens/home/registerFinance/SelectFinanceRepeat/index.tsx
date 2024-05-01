import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'

import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { useUiFinanceUtils } from '@utils/finance/useUiFinanceUtils'

import { FinanceObjectsAdapter } from '@domain/finance/adapter/FinanceObjectsAdapter'

import { useAlertContext } from '@contexts/AlertContext'
import { useFinanceRegisterContext } from '@contexts/FinanceRegisterContext'

import { SelectFinanceRepeatScreenProps } from '@routes/stacks/FinanceRegisterStack/screenProps'

import { CustomCarousel, Installment, SelectorContainer } from './styles'
import { relativeScreenWidth } from '@presentation/common/screenDimensions'

const { translateFinanceType } = useUiFinanceUtils()

const { Installments } = FinanceObjectsAdapter()

function SelectFinanceRepeat({ navigation }: SelectFinanceRepeatScreenProps) {
	const { financeRegisterData, setFinanceDataOnContext } = useFinanceRegisterContext()
	const { showContextModal } = useAlertContext()
	const theme = useTheme()

	const [numberOfInstallments, setNumberOfInstallments] = useState(1)

	const installments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

	const submitValue = () => {
		try {
			const installment = new Installments(numberOfInstallments)

			setFinanceDataOnContext({ numberOfInstallments: installment.value })
			navigation.navigate('FinanceSummary')
		} catch (error) {
			console.log(error)
			showContextModal('', error.message)
		}
	}

	const financeType = translateFinanceType(financeRegisterData.type)

	const carouselRef = React.useRef(null)
	const scrollToIndex = (index: number) => {
		console.log(`scrollTo: ${index}`)
		const carousel = carouselRef.current
		carousel?.scrollTo({ index, animated: true })
	}

	return (
		<ScreenContainer
			topSafeAreaColor={theme.green3}
		>
			<FormContainer
				title={`Quantas vezes essa ${financeType} vai se repetir?`}
				onSubmit={submitValue}
			>
				<SelectorContainer>
					{/* <InstallmentContainer> */}
					<CustomCarousel
						ref={carouselRef}
						width={relativeScreenWidth(50)}
						height={relativeScreenWidth(25)}
						mode={'parallax'}
						data={installments}
						scrollAnimationDuration={200}
						onSnapToItem={(index) => setNumberOfInstallments(installments[index])}
						renderItem={({ item, index }) => {
							return (
								<TouchableOpacity onPress={() => scrollToIndex(index)}>
									<Installment
										active={(item === numberOfInstallments)}
									>
										{`${item}x`}
									</Installment>
								</TouchableOpacity>
							)
						}}
					/>
				</SelectorContainer>
			</FormContainer>
		</ScreenContainer>
	)
}

export { SelectFinanceRepeat }
