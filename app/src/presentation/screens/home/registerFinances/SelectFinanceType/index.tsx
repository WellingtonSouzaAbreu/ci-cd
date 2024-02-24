import React from 'react'
import { useTheme } from 'styled-components'

import { Finance } from '@domain/entities/billing/types'

import { PrimaryButton } from '@presentation/components/buttons/PrimaryButton'
import { FormContainer } from '@presentation/components/containers/FormContainer'
import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'

function SelectFinanceType() {
	const theme = useTheme()

	const selectFinanceType = (financeType: Finance['type']) => {
		// setFinanceDataOnContext({ type: financeType })
	}

	return (
		<ScreenContainer topSafeAreaColor={theme.green3}>
			<FormContainer>
				<PrimaryButton
					onPress={() => selectFinanceType('income')}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { SelectFinanceType }
