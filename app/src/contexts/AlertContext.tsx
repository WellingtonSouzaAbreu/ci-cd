import React, { createContext, useMemo, useState } from 'react'

import { CustomModal } from '@presentation/components/modals/CustomModal'

interface AlertProviderProps {
	children: React.ReactNode
}

type AlertData = {
	modalIsVisible: boolean
	showContextModal: (title: string, description: string) => void
}

const initialValue = {
	modalIsVisible: false,
	showContextModal: () => null
}

const AlertContext = createContext<AlertData>(initialValue)

function AlertProvider({ children }: AlertProviderProps) {
	const [modalIsVisible, setModalIsVisible] = useState<boolean>(false)
	const [modalTitle, setModalTitle] = useState<string>('')
	const [modalDescription, setModalDescription] = useState<string>('')

	const showContextModal = async (title: string, description: string) => {
		setModalTitle(title)
		setModalDescription(description)
		setModalIsVisible((previousValue) => !previousValue)
	}

	const closeContextModal = () => setModalIsVisible(false)

	const AlertProviderData = useMemo(() => ({
		modalIsVisible,
		showContextModal
	}), [modalIsVisible])

	return (
		<AlertContext.Provider value={AlertProviderData}>
			<CustomModal
				visibility={modalIsVisible}
				title={modalTitle}
				description={modalDescription}
				closeModal={closeContextModal}
			/>
			{children}
		</AlertContext.Provider>
	)
}

export { AlertProvider, AlertContext }
