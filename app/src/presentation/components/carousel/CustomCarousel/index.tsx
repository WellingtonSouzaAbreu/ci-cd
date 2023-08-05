import React, { ReactElement, useState } from 'react'
import { View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import uuid from 'react-uuid'

import { screenHeight, screenWidth } from '@presentation/utils/screenDimensions'

import { CarouselActiveIndicatorItem, CarouselInactiveIndicatorItem, CarouselIndicatorContainer } from './styles'

interface CustomCarouselProps {
	height?: number
	width?: number
	children: ReactElement[]
}

function CustomCarousel({ ...props }: CustomCarouselProps) {
	const [currentCarouselIndex, setCurrentCarouselIndex] = useState<number>(0)

	const renderCarouselIndicators = () => props.children.map((_, index) => (
		index === currentCarouselIndex
			? <CarouselActiveIndicatorItem key={uuid()} />
			: <CarouselInactiveIndicatorItem key={uuid()} />
	))

	return (
		<>
			<Carousel
				data={props.children}
				autoPlay
				width={props.width}
				height={props.height}
				autoPlayInterval={3000}
				loop
				renderItem={({ item, index }) => (
					<View>
						{props.children[index]}
					</View>
				)}
				onSnapToItem={(index: number) => setCurrentCarouselIndex(index)}
			/>
			<CarouselIndicatorContainer>
				{renderCarouselIndicators()}
			</CarouselIndicatorContainer>
		</>
	)
}

CustomCarousel.defaultProps = {
	height: screenHeight,
	width: screenWidth
}

export { CustomCarousel }
