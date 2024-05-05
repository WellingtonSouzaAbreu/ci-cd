import React from 'react'
import { useTheme } from 'styled-components'

import AngleRightIcon from '@assets/icons/angle-right.svg'
import { PrimaryButton } from '@components/buttons/PrimaryButton'
import { VerticalSpacing } from '@components/common/VerticalSpacing'
import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'

import { FinanceModel } from '@domain/finance/adapter/FinanceModel'
import { FinanceEntity } from '@domain/finance/model/entity/types'

import { useAlertContext } from '@contexts/AlertContext'
import { useFinanceRegisterContext } from '@contexts/FinanceRegisterContext'

import { SelectFinanceTypeScreenProps } from '@routes/stacks/FinanceRegisterStack/screenProps'

function SelectFinanceType({ navigation }: SelectFinanceTypeScreenProps) {
	const { showContextModal } = useAlertContext()
	const { setFinanceDataOnContext } = useFinanceRegisterContext()

	const theme = useTheme()

	const selectFinanceType = (financeType: FinanceEntity['type']) => {
		try {
			const type = new FinanceModel.FinanceType(financeType).value
			setFinanceDataOnContext({ type })
			navigation.navigate('SelectFinanceCategory')
		} catch (error) {
			console.log(error)
			showContextModal('', error.message)
		}
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
