import React from 'react'
import { useTheme } from 'styled-components'

import { relativeScreenDensity } from '@presentation/utils/screenDimensions'

import { Body, Header, Title } from './styles'

import { PrimaryButton } from '@presentation/components/buttons/PrimaryButton'
import { ScreenContainer } from '@presentation/components/containers/ScreenContainer'

function HistoryAndMetrics() {
	const theme = useTheme()

	return (
		<ScreenContainer topSafeAreaColor={theme.green5} padding={0}>
			<Header>
				<Title>{'Mensal'}</Title>
				<PrimaryButton
					label={'Mês atual'}
					labelColor={theme.green5}
					buttonColor={theme.white1}
					relativeWidth={'50%'}
					customHeight={relativeScreenDensity(25)}
					onPress={() => console.log('presses')}
				/>
				<PrimaryButton
					label={'Consultar'}
					labelColor={theme.green5}
					buttonColor={theme.white1}
					customHeight={relativeScreenDensity(40)}
					onPress={() => console.log('consultar')}
				/>
			</Header>
			<Body />
		</ScreenContainer>
	)
}

export { HistoryAndMetrics }
