import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('CircuitBoard', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M7.333 6H10a1.333 1.333 0 0 0 1.333-1.333V2m-4 4a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Zm-2.666 8v-2.667A1.333 1.333 0 0 1 6 10h2.667m0 0a1.333 1.333 0 1 0 2.666 0 1.333 1.333 0 0 0-2.666 0ZM3.333 2h9.334C13.403 2 14 2.597 14 3.333v9.334c0 .736-.597 1.333-1.333 1.333H3.333A1.333 1.333 0 0 1 2 12.667V3.333C2 2.597 2.597 2 3.333 2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
