/* eslint-disable max-lines-per-function */
import React, { useContext, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from 'styled-components'

import { Finance } from '@domain/entities/billing/types'

import { FinanceRegisterContext } from '@contexts/FinanceRegisterContext'

import { SelectFinanceTypeScreenProps } from '@routes/stacks/FinanceRegisterStack/screenProps'

import AngleRightIcon from '@presentation/assets/icons/angle-right.svg'

import { PrimaryButton } from '@presentation/components/buttons/PrimaryButton'
import { VerticalSpacing } from '@presentation/components/common/VerticalSpacing'
import { FormContainer } from '@presentation/components/containers/FormContainer'
import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'

import { ImageHeaderScrollView } from './headerScrollView'
import { TriggeringView } from './triggerView'

function SelectFinanceType({ navigation }: SelectFinanceTypeScreenProps) {
	const theme = useTheme()
	const { setFinanceDataOnContext } = useContext(FinanceRegisterContext)

	const selectFinanceType = (financeType: Finance['type']) => {
		setFinanceDataOnContext({ type: financeType })
		navigation.navigate('SelectFinanceCategory')
	}

	const [headerHidden, setHeaderHidden] = useState(false)

	const renderFixedHeader = () => {
		return headerHidden && (
			<View style={{
				paddingTop: 50, padding: 20, backgroundColor: 'white', zIndex: 999, position: 'absolute', top: 0, width: '100%', height: '100%'
			}}
			>
				<PrimaryButton
					label={'Botão qualquer'}
					RightSvgIcon={AngleRightIcon}
					onPress={() => selectFinanceType('income')}
				/>
			</View>
		)
	}

	return (
		<ImageHeaderScrollView
			maxHeight={250}
			minHeight={170}
			// renderFixedForeground={renderFixedHeader}
			// renderHeader={renderFixedHeader}
			renderTouchableFixedForeground={renderFixedHeader}
			renderForeground={() => (
				<View style={{
					height: 150,
					padding: 20,
					justifyContent: 'center',
					alignItems: 'center',
					flex: 1,
				}}
				>
					<View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
						<View style={{ width: '40%' }}>
							<PrimaryButton
								label={'Foto'}
								onPress={() => selectFinanceType('income')}
							/>
						</View>
						<View style={{ width: '40%', paddingBottom: 20 }}>
							<PrimaryButton
								filled={false}
								label={'Editar'}
								onPress={() => selectFinanceType('income')}
							/>
						</View>
					</View>
					<PrimaryButton
						label={'Botão qualquer'}
						RightSvgIcon={AngleRightIcon}
						onPress={() => selectFinanceType('income')}
					/>
				</View>
			)}
		>
			<View style={{ height: 1000, backgroundColor: 'orange' }}>
				<TriggeringView
					onHide={() => setHeaderHidden(true)}
					onBeginHidden={() => {
						setHeaderHidden(true)
						console.log('Tá sumindo')
					}}
					onDisplay={() => setHeaderHidden(false)}
					onBeginDisplayed={() => setHeaderHidden(false)}
				>
					<View style={{
						width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20
					}}
					>
						<View style={{ width: '40%' }}>
							<PrimaryButton
								filled={false}
								label={'Botão qualquer'}
								RightSvgIcon={AngleRightIcon}
								onPress={() => selectFinanceType('income')}
							/>
						</View>
						<View style={{ width: '40%', paddingBottom: 20 }}>
							<PrimaryButton
								filled={false}
								label={'Editar'}
								onPress={() => selectFinanceType('income')}
							/>
						</View>
					</View>
					<Text>{'Textos comuns em perfils'}</Text>
					<View style={{
						width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20
					}}
					>
						<View style={{ width: '40%' }}>
							<PrimaryButton
								filled={false}
								label={'Botão qualquer'}
								RightSvgIcon={AngleRightIcon}
								onPress={() => selectFinanceType('income')}
							/>
						</View>
						<View style={{ width: '40%', paddingBottom: 20 }}>
							<PrimaryButton
								filled={false}
								label={'Editar'}
								onPress={() => selectFinanceType('income')}
							/>
						</View>
					</View>
					<Text>{'Textos comuns em perfils'}</Text>
					<View style={{
						width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20
					}}
					>
						<View style={{ width: '40%' }}>
							<PrimaryButton
								filled={false}
								label={'Botão qualquer'}
								RightSvgIcon={AngleRightIcon}
								onPress={() => selectFinanceType('income')}
							/>
						</View>
						<View style={{ width: '40%', paddingBottom: 20 }}>
							<PrimaryButton
								filled={false}
								label={'Editar'}
								onPress={() => selectFinanceType('income')}
							/>
						</View>
					</View>
					<Text>{'Textos comuns em perfils'}</Text>
					<View style={{
						width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20
					}}
					>
						<View style={{ width: '40%' }}>
							<PrimaryButton
								filled={false}
								label={'Botão qualquer'}
								RightSvgIcon={AngleRightIcon}
								onPress={() => selectFinanceType('income')}
							/>
						</View>
						<View style={{ width: '40%', paddingBottom: 20 }}>
							<PrimaryButton
								filled={false}
								label={'Editar'}
								onPress={() => selectFinanceType('income')}
							/>
						</View>
					</View>
					<Text>{'Textos comuns em perfils'}</Text>
				</TriggeringView>
			</View>
		</ImageHeaderScrollView>
	)
}

/* <TriggeringView>
		<PrimaryButton
		filled={false}
		label={'Receita'}
		RightSvgIcon={AngleRightIcon}
		onPress={() => selectFinanceType('income')}
	/>
	</TriggeringView> */

export { SelectFinanceType }
