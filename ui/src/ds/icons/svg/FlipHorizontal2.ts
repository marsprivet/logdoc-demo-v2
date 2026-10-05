import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('FlipHorizontal2', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 13.333v1.334m0-5.334v1.334m0-5.334v1.334m0-5.334v1.334m-6 2L5.333 8 2 11.333V4.667Zm12 0L10.667 8 14 11.333V4.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
