import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'

import SymbolsBrainImage from '@assets/images/symbolsBrain.svg'
import { PrimaryButton } from '@components/buttons/PrimaryButton'
import { VerticalSpacing } from '@components/common/VerticalSpacing'
import { ScreenContainer } from '@components/containers/ScreenContainer'
import { useFirebaseConfig } from '@config/firebase/useFirebaseConfig'

import { UserEntity } from '@domain/user/entity/types'
import { useUserDomain } from '@domain/user/useUserDomain'

import { useAuthContext } from '@contexts/AuthContext'

import { useAuthNavigation } from '@routes/stacks/hooks/useAuthNavigation'
import { QuickLoginScreenProps } from '@routes/stacks/StartupStack/screenProps'

import { useAuthenticationService } from '@services/authentication/useAuthenticationService'

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
		const createdUser = firebaseAuth.currentUser.uid // REFACTOR Internalizar
		const user = { id: createdUser, name: 'Estou logado poha!' } // REFACTOR  Implementar chamada de usuário
		await updateUserRepository(user, useUserRepository)
		setUserDataOnContext(user)
		navigateToHome()
	}

	const loginWithAnotherAccount = () => {
		navigation.navigate('SelectAuthRegister')
	}

	// REFACTOR Texto com pipe
	// REFACTOR PErsonializar texto comforme o horário do dia
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
