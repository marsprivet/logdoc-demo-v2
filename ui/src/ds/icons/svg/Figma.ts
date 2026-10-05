import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Figma', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 1.333H5.666a2.333 2.333 0 0 0 0 4.667M8 1.333V6m0-4.667h2.333a2.333 2.333 0 0 1 0 4.667M8 6H5.666M8 6h2.333M8 6v4.667M5.666 6a2.333 2.333 0 1 0 0 4.667M10.333 6a2.333 2.333 0 1 0 0 4.667 2.333 2.333 0 0 0 0-4.667Zm-4.667 4.667A2.333 2.333 0 1 0 8 13v-2.333m-2.334 0H8",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
