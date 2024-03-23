import React, { useContext, useEffect, useState } from 'react'
import { ListRenderItem } from 'react-native'
import { useTheme } from 'styled-components'

import { FlatListItem } from '@presentation/presentationTypes'
import { UiFinanceUtils } from '@presentation/utils/finance/UiFinanceUtils'

import { FinanceRegisterContext } from 'src/contexts/FinanceRegisterContext'

import { FinanceCategoryFlatList } from './styles'

import { PrimaryButton } from '@presentation/components/buttons/PrimaryButton'
import { VerticalSpacing } from '@presentation/components/common/VerticalSpacing'
import { FormContainer } from '@presentation/components/containers/FormContainer'
import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'

const { translateFinanceType } = UiFinanceUtils()

const defaultFinancesCategories = [
	'Supermercado', 'Farmácia', 'Jogos', 'Restaurantes'
]

function SelectFinanceCategory() {
	const theme = useTheme()
	const { financeRegisterData } = useContext(FinanceRegisterContext)

	const [financeCategories, setFinanceCategories] = useState(defaultFinancesCategories)
	const [selectedCategory, setSelectedCategory] = useState('')

	useEffect(() => {
		// Obter as categorias do local storage
		// Mesclar as categorias padrão  // à definir
		// Atualizar estado
	}, [])

	const renderFinanceCategories: ListRenderItem<string> = ({ item: category }) => ( // TODO Type correctly
		<>
			<PrimaryButton // TODO Change selector color
				filled={category === selectedCategory}
				buttonColor={theme.green1}
				label={category}
				onPress={() => setSelectedCategory(category)}
			/>
			<VerticalSpacing height={8} />
		</>
	)

	const financeType = translateFinanceType(financeRegisterData.type)

	return (
		<ScreenContainer topSafeAreaColor={theme.green3}>
			<FormContainer
				title={`Em qual categoria essa ${financeType} se encaixa`}
				onSubmit={() => console.log('Submit')}
			>
				<FinanceCategoryFlatList
					data={financeCategories}
					renderItem={renderFinanceCategories}
				/>
			</FormContainer>
		</ScreenContainer>
	)
}

export { SelectFinanceCategory }
