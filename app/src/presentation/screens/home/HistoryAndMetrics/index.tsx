import React from 'react'
import { useTheme } from 'styled-components'

import { relativeScreenDensity } from '@utils/screenDimensions'

import {
	Body, ButtonPadding, Header, HorizontalHeaderScroll, SelectPeriodButtonContainer, Title
} from './styles'

import { PrimaryButton } from '@components/buttons/PrimaryButton'
import { ScreenContainer } from '@components/containers/ScreenContainer'

function HistoryAndMetrics() {
	const theme = useTheme()

	return (
		<ScreenContainer topSafeAreaColor={theme.green5}>
			<Header>
				<Title>{'Mensal'}</Title>
				<HorizontalHeaderScroll
					horizontal
					showsHorizontalScrollIndicator={false}
					pagingEnabled
					contentContainerStyle={{ justifyContent: 'center', }}
				>
					<SelectPeriodButtonContainer>
						<PrimaryButton
							label={'Mês atual'}
							labelColor={theme.green5}
							buttonColor={theme.white1}
							relativeWidth={'50%'}
							customHeight={relativeScreenDensity(25)}
							onPress={() => console.log('presses')}
						/>
					</SelectPeriodButtonContainer>
					<SelectPeriodButtonContainer>
						<PrimaryButton
							label={'Mês atual'}
							labelColor={theme.green5}
							buttonColor={theme.white1}
							relativeWidth={'50%'}
							customHeight={relativeScreenDensity(25)}
							onPress={() => console.log('presses')}
						/>
					</SelectPeriodButtonContainer>
				</HorizontalHeaderScroll>
				<ButtonPadding>
					<PrimaryButton
						label={'Consultar'}
						labelColor={theme.green5}
						buttonColor={theme.white1}
						customHeight={relativeScreenDensity(40)}
						onPress={() => console.log('consultar')}
					/>
				</ButtonPadding>
			</Header>
			<Body />
		</ScreenContainer>
	)
}

export { HistoryAndMetrics }
