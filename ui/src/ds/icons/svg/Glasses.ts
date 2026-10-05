import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Glasses', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.666 10a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0Zm0 0a1.333 1.333 0 0 1 2.667 0m0 0a2.667 2.667 0 1 0 5.333 0 2.667 2.667 0 0 0-5.333 0ZM1.666 8.667l1.667-4c.467-.867.933-1.334 2-1.334m9 5.334-1.667-4c-.466-.867-1-1.334-2-1.334",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
