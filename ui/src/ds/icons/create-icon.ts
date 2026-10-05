import { cloneElement, forwardRef, type ReactElement, type SVGProps } from 'react';
import { ICON_SIZE_MAP, type IconSize, STROKE_WIDTH_MAP } from './icon-config';

export interface IconProps extends SVGProps<SVGSVGElement> {
	size?: IconSize | number;
	strokeWidth?: number;
	className?: string;
}

/**
 * Wraps an icon's raw SVG in the shared sizing contract: `size` picks a step
 * from ICON_SIZE_MAP (or a pixel number), stroke width follows the size step
 * unless set, and `color` drives `stroke`. Icons whose SVG carries
 * `data-custom-icon="true"` are filled artwork, so they keep their own paint
 * and take `color` through `currentColor` instead.
 */
export function createIcon(
	name: string,
	render: (props: SVGProps<SVGSVGElement>) => ReactElement<SVGProps<SVGSVGElement>>,
) {
	const Icon = forwardRef<SVGSVGElement, IconProps>(
		({ color = 'currentColor', size, strokeWidth, className, ...rest }, ref) => {
			const svg = render(rest);
			const hasViewBox = svg.props.viewBox != null;
			const isCustom = (svg.props as Record<string, unknown>)['data-custom-icon'] === 'true';
			const fallbackSize = isCustom ? Number(svg.props.width) : ICON_SIZE_MAP.xs;
			const px = size == null ? fallbackSize : typeof size === 'number' ? size : ICON_SIZE_MAP[size];
			const stroke =
				strokeWidth ??
				(typeof size === 'string' && size in STROKE_WIDTH_MAP
					? STROKE_WIDTH_MAP[size]
					: size == null
						? STROKE_WIDTH_MAP.xs
						: 2);
			const viewBox = `0 0 ${svg.props.width == null ? 24 : Number(svg.props.width)} ${
				svg.props.height == null ? 24 : Number(svg.props.height)
			}`;
			return cloneElement(svg, {
				...rest,
				ref,
				className: className ? `ds-icon ${className}` : 'ds-icon',
				...(!isCustom && { stroke: color, strokeWidth: stroke }),
				...(!isCustom && !hasViewBox && { viewBox }),
				...(isCustom && { style: { color, ...rest.style }, viewBox }),
				width: px,
				height: px,
			} as SVGProps<SVGSVGElement>);
		},
	);
	Icon.displayName = `Svg${name}`;
	return Icon;
}
