import React from 'react'

import { relativeScreenHeight } from '@presentation/utils/screenDimensions'

import { Container } from './styles'

interface VerticalSpacingProps {
	height?: number
}

function VerticalSpacing({ ...props }: VerticalSpacingProps) {
	return (
		<Container height={props.height} />
	)
}

VerticalSpacing.defaultProps = { height: relativeScreenHeight(2.3) }

export { VerticalSpacing }
