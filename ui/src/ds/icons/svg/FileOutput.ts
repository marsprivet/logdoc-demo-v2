import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('FileOutput', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.333 1.333V4a1.333 1.333 0 0 0 1.333 1.333h2.667M2.666 4.667v-2A1.333 1.333 0 0 1 4 1.333h6l3.333 3.334v8.666A1.333 1.333 0 0 1 12 14.667l-7.958-.001a1.333 1.333 0 0 1-1.334-.667m.625-6.666-2 2m0 0 2 2m-2-2H8",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
