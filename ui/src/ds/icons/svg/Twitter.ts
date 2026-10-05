import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Twitter', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14.666 2.667s-.466 1.4-1.333 2.266c1.067 6.667-6.267 11.534-12 7.734 1.467.066 2.933-.4 4-1.334-3.333-1-5-4.933-3.333-8C3.466 5.067 5.733 6.067 8 6c-.6-2.8 2.666-4.4 4.666-2.533.734 0 2-.8 2-.8Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
