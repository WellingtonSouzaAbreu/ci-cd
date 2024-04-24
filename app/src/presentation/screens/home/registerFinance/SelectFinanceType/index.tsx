import React from 'react'
import { useTheme } from 'styled-components'

import AngleRightIcon from '@assets/icons/angle-right.svg'
import { PrimaryButton } from '@components/buttons/PrimaryButton'
import { VerticalSpacing } from '@components/common/VerticalSpacing'
import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'

import { FinanceEntity } from '@domain/finance/entity/types'

import { useFinanceRegisterContext } from '@contexts/FinanceRegisterContext'

import { SelectFinanceTypeScreenProps } from '@routes/stacks/FinanceRegisterStack/screenProps'

function SelectFinanceType({ navigation }: SelectFinanceTypeScreenProps) {
	const theme = useTheme()
	const { setFinanceDataOnContext } = useFinanceRegisterContext()

	const selectFinanceType = (financeType: FinanceEntity['type']) => {
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
