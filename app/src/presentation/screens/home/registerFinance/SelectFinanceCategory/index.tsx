import React, { useContext, useEffect, useState } from 'react'
import { ListRenderItem } from 'react-native'
import { useTheme } from 'styled-components'

import { SelectButton } from '@components/buttons/SelectButton'
import { FlatListVerticalSpacing } from '@components/common/FlatListVertialSpacing'
import { VerticalSpacing } from '@components/common/VerticalSpacing'
import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'
import { useUiFinanceUtils } from '@utils/finance/useUiFinanceUtils'

import { FinanceRegisterContext } from '@contexts/FinanceRegisterContext'

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
	const { financeRegisterData, setFinanceDataOnContext } = useContext(FinanceRegisterContext)

	const theme = useTheme()

	const [searchText, setSearchText] = useState('')
	const [financeCategories, setFinanceCategories] = useState(defaultFinancesCategories)
	const [financeFilteredCategories, setFinanceFilteredCategories] = useState([])
	const [selectedCategory, setSelectedCategory] = useState('')

	useEffect(() => {
		// Obter as categorias do local storage
		// Mesclar as categorias padrão  // à definir
		// Atualizar estado
		setFinanceCategories(['Supermercado', 'Farmácia', 'Jogos', 'Restaurantes', 'Porcarias', 'Educação', 'Moto'])
	}, [])

	useEffect(() => {
		filterFinanceCategories()
	}, [searchText])

	const filterFinanceCategories = () => {
		const filteredCategories = financeCategories.filter((category) => category.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
		setFinanceFilteredCategories(filteredCategories)
	}

	const openAddNewCategoryModal = () => {
		console.log('Add new category')
	}

	const renderFinanceCategories: ListRenderItem<string> = ({ item: category }) => (
		<SelectButton
			value={category}
			wrapText // TODO Implementar
			selected={category === selectedCategory}
			onSelect={() => setSelectedCategory(category)}
		/>
	)

	const selectFinanceCategory = () => {
		setFinanceDataOnContext({ financeCategory: selectedCategory })
		navigation.navigate('SelectFinanceCategory')
	}

	const financeType = translateFinanceType(financeRegisterData.type)

	return (
		<ScreenContainer topSafeAreaColor={theme.green3}>
			<FormContainer
				title={`Em qual categoria essa ${financeType} se encaixa?`}
				onSubmit={selectedCategory ? selectFinanceCategory : null}
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
						contentContainerStyle={{}}
						ListHeaderComponent={<VerticalSpacing />}
						ItemSeparatorComponent={FlatListVerticalSpacing}
						ListFooterComponent={<VerticalSpacing />}
					/>
				</FlatListContainer>
				<AddNewCategoryContainer onPress={openAddNewCategoryModal}>
					<AddNewCategoryLabel>{'+ adicionar categoria'}</AddNewCategoryLabel>
				</AddNewCategoryContainer>
			</FormContainer>
		</ScreenContainer>
	)
}

export { SelectFinanceCategory }
