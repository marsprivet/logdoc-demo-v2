import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Utensils', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 1.333V6c0 .733.6 1.333 1.333 1.333H6A1.333 1.333 0 0 0 7.333 6V1.333m-2.666 0v13.334M14 10V1.333a3.333 3.333 0 0 0-3.333 3.334v4c0 .733.6 1.333 1.333 1.333h2Zm0 0v4.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
