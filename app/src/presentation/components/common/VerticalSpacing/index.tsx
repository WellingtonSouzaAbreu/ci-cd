import React from 'react'

import { Container } from './styles'
import { relativeScreenHeight } from '@presentation/common/screenDimensions'

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
