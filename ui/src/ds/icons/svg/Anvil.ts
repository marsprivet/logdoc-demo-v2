import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Anvil', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4.666 6.667H4A2.667 2.667 0 0 1 1.333 4 .667.667 0 0 1 2 3.333h2.666m0 0a.667.667 0 0 1 .667-.666H14a.667.667 0 0 1 .666.666A4.666 4.666 0 0 1 10 8M4.666 3.333v4A.667.667 0 0 0 5.333 8H10m0 0v3.333M6 8v3.333m-2.667 2a2 2 0 0 1 2-2h5.333a2 2 0 0 1 2 2A.667.667 0 0 1 12 14H4a.667.667 0 0 1-.667-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
