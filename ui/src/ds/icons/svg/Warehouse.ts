import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Warehouse', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 12h8M4 9.333h8m2.666-3.766v7.766a1.333 1.333 0 0 1-1.333 1.334H2.666a1.333 1.333 0 0 1-1.333-1.334V5.567a1.333 1.333 0 0 1 .84-1.234L7.506 2.2c.317-.126.67-.126.987 0l5.333 2.133a1.333 1.333 0 0 1 .84 1.234ZM4 6.667h8v8H4v-8Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
