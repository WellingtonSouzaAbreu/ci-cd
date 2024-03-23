import React, { createContext, useMemo, useState, useCallback } from 'react'
import { Modal } from 'react-native'

import { Content } from './styles'

import { Loader } from '@components/animated/Loader'

type LoaderContextType = {
	loaderIsVisible: boolean;
	setLoaderIsVisible: (visibility: boolean) => void;
};

interface LoaderProviderProps {
	children: React.ReactNode;
}

const initialValue: LoaderContextType = {
	loaderIsVisible: false,
	setLoaderIsVisible: () => null,
}

const LoaderContext = createContext<LoaderContextType>(initialValue)

function LoaderProvider({ children }: LoaderProviderProps) {
	const [loaderIsVisible, setLoaderIsVisible] = useState(initialValue.loaderIsVisible)

	const memoizedSetLoaderIsVisible = useCallback((visibility: boolean) => {
		setLoaderIsVisible(visibility)
	}, [])

	const loaderDataProvider = useMemo(() => ({
		loaderIsVisible,
		setLoaderIsVisible: memoizedSetLoaderIsVisible,
	}), [loaderIsVisible, memoizedSetLoaderIsVisible])

	const loaderScale = 200

	const closeLoaderModal = () => {
		setLoaderIsVisible(false)
	}

	return (
		<LoaderContext.Provider value={loaderDataProvider}>
			{children}
			<Modal
				transparent
				visible={loaderIsVisible}
				animationType={'fade'}
				onRequestClose={closeLoaderModal}
			>
				<Content>
					<Loader animationScale={loaderScale} flex />
				</Content>
			</Modal>
		</LoaderContext.Provider>
	)
}

export { LoaderProvider, LoaderContext }
