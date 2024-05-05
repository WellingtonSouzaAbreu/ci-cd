import React, { useEffect, useState } from 'react'
import { Alert, ListRenderItem } from 'react-native'
import { useTheme } from 'styled-components'

import { SelectButton } from '@components/buttons/SelectButton'
import { EmptyFlatList } from '@components/common/EmptyFlatList'
import { FlatListVerticalSpacing } from '@components/common/FlatListVertialSpacing'
import { VerticalSpacing } from '@components/common/VerticalSpacing'
import { FormContainer } from '@components/containers/FormContainer'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { LineInput } from '@components/inputs/LineInput'
import { FormModal } from '@components/modals/FormModal'
import { useUiFinanceUtils } from '@utils/finance/useUiFinanceUtils'

import { FinanceUseCasesAdapter } from '@domain/finance/adapter/FinanceUseCaseAdapter'
import { SharedModel } from '@domain/shared/adapter/SharedModel'

import { useAlertContext } from '@contexts/AlertContext'
import { useFinanceRegisterContext } from '@contexts/FinanceRegisterContext'

import { SelectFinanceCategoryScreenProps } from '@routes/stacks/FinanceRegisterStack/screenProps'

import { FinanceLocalRepository } from '@data/finance/FinanceLocalRepository'

import { AddNewCategoryContainer, AddNewCategoryLabel, FinanceCategoryFlatList, FlatListContainer } from './styles'

const { translateFinanceType } = useUiFinanceUtils()

const { createNewLocalCategory, removeLocalCategory, getLocalCategories } = FinanceUseCasesAdapter

function SelectFinanceCategory({ navigation }: SelectFinanceCategoryScreenProps) {
	const { financeRegisterData, setFinanceDataOnContext } = useFinanceRegisterContext()
	const { showContextModal } = useAlertContext()

	const theme = useTheme()

	const [searchText, setSearchText] = useState('')
	const [financeCategories, setFinanceCategories] = useState([])
	const [financeFilteredCategories, setFinanceFilteredCategories] = useState([])
	const [newCategoryModalIsVisible, setNewCategoryModalIsVisible] = useState(false)

	useEffect(() => {
		loadFinanceCategories()
	}, [])

	useEffect(() => {
		filterFinanceCategories()
	}, [searchText, financeCategories])

	const loadFinanceCategories = async () => {
		const storedCategories = await getLocalCategories(FinanceLocalRepository)
		const ordenedCategories = storedCategories.sort()
		setFinanceCategories(ordenedCategories)
	}

	const financeType = translateFinanceType(financeRegisterData.type)

	const filterFinanceCategories = () => {
		const filteredCategories = financeCategories.filter((category) => category.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
		setFinanceFilteredCategories(filteredCategories)
	}

	const selectFinanceCategory = (selectedCategory: string) => {
		try {
			const validCategory = new SharedModel.SimpleText(selectedCategory).value

			setFinanceDataOnContext({ financeCategory: validCategory })
			navigation.navigate('InsertFinanceValue')
		} catch (error) {
			console.log(error)
			showContextModal('', error.message)
		}
	}

	const toggleNewCategoryModalVisibility = () => {
		setNewCategoryModalIsVisible(!newCategoryModalIsVisible)
	}

	const saveNewFinanceCategory = async (newCategory: string) => {
		if (!newCategory || financeCategories.includes(newCategory)) return
		await createNewLocalCategory(FinanceLocalRepository, newCategory)

		const ordenedCategories = [...financeCategories, newCategory].sort()
		setFinanceCategories(ordenedCategories)
	}

	const showDeleteConfirmation = (category: string) => {
		console.log(category)
		Alert.alert('Deseja remover esta categoria?', 'As finanças cadastradas com esta categoria não serão afetadas', [
			{
				onPress: () => deleteFinanceCategory(category), text: 'Apagar', isPreferred: true, style: 'destructive'
			},
			{ text: 'Cancelar', style: 'cancel' }
		])
	}

	const deleteFinanceCategory = async (category: string) => {
		const newCategories = await removeLocalCategory(FinanceLocalRepository, category)
		setFinanceCategories(newCategories)
	}

	const renderFinanceCategories: ListRenderItem<string> = ({ item: category }) => (
		<SelectButton
			value={category}
			wrapText
			selected={false}
			onSelect={() => selectFinanceCategory(category)}
			onLongPress={() => showDeleteConfirmation(category)}
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
						ListEmptyComponent={(<EmptyFlatList text={'Adicione alguma categoria para continuar!'} />)}
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
