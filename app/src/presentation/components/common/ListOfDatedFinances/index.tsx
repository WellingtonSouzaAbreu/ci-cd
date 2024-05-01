/* eslint-disable react/destructuring-assignment */
import React from 'react'

import { Container, SummaryLine, Date, Amount, Separator } from './styles'

import { VerticalSpacing } from '../VerticalSpacing'

interface ListOfDatedFinancesProps {
	financeRegisters: {
		date: string
		amount: string
	}[]
}

function ListOfDatedFinances({ financeRegisters }: ListOfDatedFinancesProps) {
	const renderRecords = () => {
		return financeRegisters.map((financeRegister, index) => {
			return (
				<SummaryLine key={index}>
					<Date>{financeRegister.date}</Date>
					<Separator />
					<Amount>{financeRegister.amount}</Amount>
				</SummaryLine>
			)
		})
	}

	return (
		<Container
			showsVerticalScrollIndicator={false}
		>
			{renderRecords()}
			<VerticalSpacing />
		</Container>
	)
}

export { ListOfDatedFinances }
