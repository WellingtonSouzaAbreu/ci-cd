import React from 'react'

export interface AlertProviderProps {
	children: React.ReactNode
}

export type AlertData = {
	modalIsVisible: boolean
	showContextModal: (title: string, description: string) => void
}
