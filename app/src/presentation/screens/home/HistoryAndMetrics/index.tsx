import React from 'react'
import { Alert } from 'react-native'
import { useTheme } from 'styled-components'

import { PrimaryButton } from '@components/buttons/PrimaryButton'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { firebaseAuthentication } from '@config/firebase/config'
import { env } from '@env'

import { UserUseCases } from '@domain/user/adapter/UserUseCases'

import { useAuthContext } from '@contexts/AuthContext'

import { UserLocalRepository } from '@data/user/UserLocalRespository'

import { Body, ButtonPadding, Header, HorizontalHeaderScroll, SelectPeriodButtonContainer, Title } from './styles'
import { relativeScreenDensity } from '@presentation/common/screenDimensions'

function HistoryAndMetrics() {
	const { authenticatedUser } = useAuthContext()

	const theme = useTheme()

	const logout = async () => { // Chamar
		await UserUseCases.updateUserPreferences(UserLocalRepository, { requestDevicePasswordOnAuth: false })
		firebaseAuthentication.signOut()
	}

	const showAlert = () => {
		Alert.alert('env', env)
	}

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
							onPress={logout}
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
						label={authenticatedUser.name || 'Consultar'}
						labelColor={theme.green5}
						buttonColor={theme.white1}
						customHeight={relativeScreenDensity(40)}
						onPress={showAlert}
					/>
				</ButtonPadding>
			</Header>
			<Body />
		</ScreenContainer>
	)
}

export { HistoryAndMetrics }
