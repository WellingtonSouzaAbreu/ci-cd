import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'

import SymbolsBrainImage from '@assets/images/symbolsBrain.svg'
import { PrimaryButton } from '@components/buttons/PrimaryButton'
import { VerticalSpacing } from '@components/common/VerticalSpacing'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { useFirebaseConfig } from '@config/firebase/useFirebaseConfig'

import { UserUseCases } from '@domain/user/adapter/UserUseCases'
import { UserEntity } from '@domain/user/model/entity/types'
import { useUserDomain } from '@domain/user/useUserDomain'

import { useAlertContext } from '@contexts/AlertContext'
import { useAuthContext } from '@contexts/AuthContext'
import { useLoaderContext } from '@contexts/LoaderContext'

import { useAuthNavigation } from '@routes/stacks/hooks/useAuthNavigation'
import { QuickLoginScreenProps } from '@routes/stacks/StartupStack/screenProps'

import { useAuthenticationService } from '@services/authentication/useAuthenticationService'

import { UserRemoteRepository } from '@data/user/UserRemoteRepository'
import { useUserRepository } from '@data/user/useUserRepository'

import {
	Content,
	FooterSection,
	PictureContainer,
	Pipe,
	RedirectText,
	Title,
	TitlePipeContainer
} from './styles'

const { firebaseAuth } = useFirebaseConfig()

const { local } = useUserRepository()
const { updateUserRepository, handleMethodWithDeviceAuthentication } = useUserDomain()

function QuickLogin({ navigation }: QuickLoginScreenProps) {
	const theme = useTheme()

	const { navigateToHome } = useAuthNavigation()
	const { setUserDataOnContext } = useAuthContext()
	const { showContextModal } = useAlertContext()
	const { setLoaderIsVisible } = useLoaderContext()

	const [storedUser, setStoredUser] = useState<UserEntity>({ name: 'Usuário' } as UserEntity)

	useEffect(() => {
		loadUserData()
	}, [])

	const loadUserData = async () => {
		const user = await local.getLocalUserData()
		setStoredUser(user)
	}

	const callAuthenticatedMethod = async () => {
		await handleMethodWithDeviceAuthentication(useAuthenticationService, performQuickSingin)
	}

	const performQuickSingin = async () => {
		try {
			setLoaderIsVisible(true)
			const userId = firebaseAuth.currentUser.uid // REFACTOR Internalizar
			const user = await UserUseCases.getRemoteUserData(UserRemoteRepository, userId)
			await updateUserRepository(user, useUserRepository)
			setUserDataOnContext(user)
			navigateToHome()
			setLoaderIsVisible(false)
		} catch (error) {
			setLoaderIsVisible(false)
			console.log(error)
			setTimeout(() => {
				showContextModal('', error.message)
			}, 300)
		}
	}

	const loginWithAnotherAccount = () => {
		navigation.navigate('SelectAuthRegister')
	}

	// REFACTOR Texto com pipe, componentizar
	// TODO PErsonializar texto comforme o horário do dia
	return (
		<ScreenContainer topSafeAreaColor={theme.green1}>
			<Content>
				<PictureContainer>
					<SymbolsBrainImage width={'80%'} height={'80%'} />
				</PictureContainer>
				<FooterSection>
					<TitlePipeContainer>
						<Pipe />
						<Title>{`Olá, ${storedUser.name.split(' ')[0]}!`}</Title>
					</TitlePipeContainer>
					<VerticalSpacing />
					<TouchableOpacity onPress={loginWithAnotherAccount}>
						<RedirectText>{'Entrar com outra conta'}</RedirectText>
					</TouchableOpacity>
					<PrimaryButton
						label={'Entrar'}
						onPress={callAuthenticatedMethod}
					/>
				</FooterSection>
			</Content>
		</ScreenContainer>
	)
}

export { QuickLogin }
