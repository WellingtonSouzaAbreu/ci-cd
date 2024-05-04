import React, { createContext, useContext, useMemo, useState } from 'react'

import { AlertModal } from '@components/modals/AlertModal'

import { AlertContextType, AlertProviderProps } from './types'

const initialValue = {
	modalIsVisible: false,
	showContextModal: () => null
}

const AlertContext = createContext<AlertContextType>(initialValue)

function AlertProvider({ children }: AlertProviderProps) {
	const [modalIsVisible, setModalIsVisible] = useState<boolean>(false)
	const [modalTitle, setModalTitle] = useState<string>('')
	const [modalDescription, setModalDescription] = useState<string>('')

	const showContextModal = async (title: string, description: string) => {
		setModalTitle(title || 'Ops!')
		setModalDescription(description.split(',').join('\n')) // REFACTOR
		setModalIsVisible((previousValue) => !previousValue)
	}

	const closeContextModal = () => setModalIsVisible(false)

	const AlertProviderData = useMemo(() => ({
		modalIsVisible,
		showContextModal
	}), [modalIsVisible])

	return (
		<AlertContext.Provider value={AlertProviderData}>
			<AlertModal
				visibility={modalIsVisible}
				title={modalTitle}
				description={modalDescription}
				closeModal={closeContextModal}
			/>
			{children}
		</AlertContext.Provider>
	)
}

const useAlertContext = () => useContext(AlertContext)

export { AlertProvider, useAlertContext }
