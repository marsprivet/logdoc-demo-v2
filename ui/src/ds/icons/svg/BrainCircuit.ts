import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('BrainCircuit', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4.002 3.417A2 2 0 1 1 8 3.333V12M4.002 3.417a2.667 2.667 0 0 0-1.684 3.846m1.684-3.846a2 2 0 0 0 .266.916m-1.95 2.93a2.667 2.667 0 0 0 .37 4.392m-.37-4.392c.122-.099.253-.187.39-.263m-.02 4.655A2.667 2.667 0 1 0 8 12m-5.311-.345c.4.226.852.345 1.311.345m4 0h4a1.333 1.333 0 0 1 1.334 1.333V14M6 8.667A3 3 0 0 0 8 6m0 2.667h2.667M8 5.333h5.334m-2.667 0v-2A1.333 1.333 0 0 1 12 2m-1 6.667a.333.333 0 1 1-.666 0 .333.333 0 0 1 .666 0ZM12.334 2a.333.333 0 1 1-.667 0 .333.333 0 0 1 .667 0Zm1.333 12A.333.333 0 1 1 13 14a.333.333 0 0 1 .667 0Zm0-8.667a.333.333 0 1 1-.667 0 .333.333 0 0 1 .667 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
