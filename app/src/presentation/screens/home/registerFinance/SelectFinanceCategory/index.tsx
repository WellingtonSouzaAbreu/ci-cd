import React, { useEffect, useState } from 'react'
import { ListRenderItem } from 'react-native'
import { useTheme } from 'styled-components'

import { SelectButton } from '@components/buttons/SelectButton'
import { FlatListVerticalSpacing } from '@components/common/FlatListVertialSpacing'
import { VerticalSpacing } from '@components/common/VerticalSpacing'
import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'
import { FormModal } from '@components/modals/FormModal'
import { useUiFinanceUtils } from '@utils/finance/useUiFinanceUtils'

import { useFinanceRegisterContext } from '@contexts/FinanceRegisterContext'

import { SelectFinanceCategoryScreenProps } from '@routes/stacks/FinanceRegisterStack/screenProps'

import { AddNewCategoryContainer, AddNewCategoryLabel, FinanceCategoryFlatList, FlatListContainer } from './styles'

const { translateFinanceType } = useUiFinanceUtils()

const defaultFinancesCategories = [
	'Supermercado',
	'Farmácia',
	'Jogos',
	'Restaurantes',
	'Porcarias',
	'Educação', 'Moto'
]

function SelectFinanceCategory({ navigation }: SelectFinanceCategoryScreenProps) {
	const { financeRegisterData, setFinanceDataOnContext } = useFinanceRegisterContext()

	const theme = useTheme()

	const [searchText, setSearchText] = useState('')
	const [financeCategories, setFinanceCategories] = useState(defaultFinancesCategories)
	const [financeFilteredCategories, setFinanceFilteredCategories] = useState([])
	const [newCategoryModalIsVisible, setNewCategoryModalIsVisible] = useState(false)

	useEffect(() => {
		// Obter as categorias do local storage // REFACTOR
		// Mesclar as categorias padrão  // à definir
		// Atualizar estado
		const ordenedCategories = ['Supermercado', 'Farmácia', 'Jogos', 'Restaurantes', 'Porcarias', 'Educação', 'Moto'].sort()
		setFinanceCategories(ordenedCategories)
	}, [])

	useEffect(() => {
		filterFinanceCategories()
	}, [searchText, financeCategories])

	const financeType = translateFinanceType(financeRegisterData.type)

	const filterFinanceCategories = () => {
		const filteredCategories = financeCategories.filter((category) => category.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
		setFinanceFilteredCategories(filteredCategories)
	}

	const selectFinanceCategory = (selectedCategory: string) => {
		setFinanceDataOnContext({ financeCategory: selectedCategory })
		navigation.navigate('InsertFinanceValue')
	}

	const toggleNewCategoryModalVisibility = () => {
		setNewCategoryModalIsVisible(!newCategoryModalIsVisible)
	}

	const saveNewFinanceCategory = (newCategory: string) => {
		if (!newCategory) return

		const ordenedCategories = [...financeCategories, newCategory].sort()
		setFinanceCategories(ordenedCategories)
	}

	const renderFinanceCategories: ListRenderItem<string> = ({ item: category }) => (
		<SelectButton
			value={category}
			wrapText
			selected={false}
			onSelect={() => selectFinanceCategory(category)}
		/>
	)

	return (
		<ScreenContainer topSafeAreaColor={theme.green3}>
			<FormModal
				visibility={newCategoryModalIsVisible}
				title={'Como irá se chamar a nova categoria?'}
				buttonText={'Cadastrar'}
				closeModal={toggleNewCategoryModalVisibility}
				onPress={saveNewFinanceCategory}
			/>
			<FormContainer
				title={`Em qual categoria essa ${financeType} se encaixa?`}
			>
				<LineInput
					type={'search'}
					value={searchText}
					placeholder={'Pesquisar...'}
					onChangeText={setSearchText}
				/>
				<FlatListContainer>
					<FinanceCategoryFlatList
						data={financeFilteredCategories || financeCategories}
						renderItem={renderFinanceCategories}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={<VerticalSpacing />}
						ItemSeparatorComponent={FlatListVerticalSpacing}
						ListFooterComponent={<VerticalSpacing />}
					/>
				</FlatListContainer>
				<AddNewCategoryContainer onPress={toggleNewCategoryModalVisibility}>
					<AddNewCategoryLabel>{'+ adicionar categoria'}</AddNewCategoryLabel>
				</AddNewCategoryContainer>
			</FormContainer>
		</ScreenContainer>
	)
}

export { SelectFinanceCategory }
