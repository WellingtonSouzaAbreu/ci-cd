import React, { ReactElement, useState } from 'react'
import Carousel from 'react-native-reanimated-carousel'
import uuid from 'react-uuid'

import { screenHeight, screenWidth } from '@presentation/utils/screenDimensions'

import { CarouselActiveIndicatorItem, CarouselInactiveIndicatorItem, CarouselIndicatorContainer, Container } from './styles'

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
		<Container>
			<Carousel
				data={props.children}
				autoPlay
				width={props.width}
				height={props.height}
				autoPlayInterval={3000}
				loop
				renderItem={({ index }) => props.children[index]}
				onSnapToItem={(index: number) => setCurrentCarouselIndex(index)}
			/>
			<CarouselIndicatorContainer width={props.width}>
				{renderCarouselIndicators()}
			</CarouselIndicatorContainer>
		</Container>
	)
}

CustomCarousel.defaultProps = {
	height: screenHeight,
	width: screenWidth
}

export { CustomCarousel }
