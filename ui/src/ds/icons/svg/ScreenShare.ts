import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ScreenShare', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8.666 2h-6a1.333 1.333 0 0 0-1.333 1.333V10a1.333 1.333 0 0 0 1.333 1.333h10.667A1.333 1.333 0 0 0 14.666 10V8m-9.333 6h5.333M8 11.333V14m3.333-8.667L14.666 2m0 0h-3.333m3.333 0v3.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
