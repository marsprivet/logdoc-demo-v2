import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Folders', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 5.333v7.334A1.333 1.333 0 0 0 2.666 14H12m1.333-2.667A1.333 1.333 0 0 0 14.666 10V6a1.333 1.333 0 0 0-1.333-1.333h-2.6a1.333 1.333 0 0 1-1.127-.6l-.54-.8a1.333 1.333 0 0 0-1.113-.6h-2.62A1.333 1.333 0 0 0 4 4v6a1.333 1.333 0 0 0 1.333 1.333h8Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
