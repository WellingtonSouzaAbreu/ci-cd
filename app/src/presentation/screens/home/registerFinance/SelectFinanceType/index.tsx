import React, { useContext } from 'react'
import { useTheme } from 'styled-components'

import { Finance } from '@domain/billing/entity/types'

import { FinanceRegisterContext } from '@contexts/FinanceRegisterContext'

import { SelectFinanceTypeScreenProps } from '@routes/stacks/FinanceRegisterStack/screenProps'

import AngleRightIcon from '@assets/icons/angle-right.svg'

import { PrimaryButton } from '@components/buttons/PrimaryButton'
import { VerticalSpacing } from '@components/common/VerticalSpacing'
import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'

function SelectFinanceType({ navigation }: SelectFinanceTypeScreenProps) {
	const theme = useTheme()
	const { setFinanceDataOnContext } = useContext(FinanceRegisterContext)

	const selectFinanceType = (financeType: Finance['type']) => {
		setFinanceDataOnContext({ type: financeType })
		navigation.navigate('SelectFinanceCategory')
	}

	return (
		<ScreenContainer topSafeAreaColor={theme.green3}>
			<FormContainer title={'O que deseja cadastrar?'}>
				<PrimaryButton
					filled={false}
					label={'Receita'}
					RightSvgIcon={AngleRightIcon}
					onPress={() => selectFinanceType('income')}
				/>
				<VerticalSpacing />
				<PrimaryButton
					filled={false}
					label={'Despesa'}
					RightSvgIcon={AngleRightIcon}
					onPress={() => selectFinanceType('expense')}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { SelectFinanceType }
