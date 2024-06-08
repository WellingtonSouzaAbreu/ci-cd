import React, { createContext, useMemo, useState, useCallback, useContext } from 'react'
import { Modal } from 'react-native'

import { Loader } from '@components/animated/Loader'

import { Content } from './styles'

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

const useLoaderContext = () => useContext(LoaderContext)

export { LoaderProvider, useLoaderContext }
