import React from 'react'

export interface AlertProviderProps {
	children: React.ReactNode
}

export type AlertContextType = {
	modalIsVisible: boolean
	showContextModal: (title: string, description: string) => void
}
