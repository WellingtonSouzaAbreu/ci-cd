import React, { useContext } from 'react'
import { View, Text } from 'react-native'

import { FinanceRegisterContext } from '@contexts/FinanceRegisterContext'

function SelectFinanceCategory() {
	const { financeRegisterData } = useContext(FinanceRegisterContext)

	return (
		<View>
			<Text>{'SelectFinanceCategory'}</Text>
			<Text>{financeRegisterData.type}</Text>
		</View>
	)
}

export { SelectFinanceCategory }
