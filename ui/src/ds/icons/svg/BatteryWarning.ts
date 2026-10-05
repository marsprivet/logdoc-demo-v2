import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('BatteryWarning', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.333 4.667h1.333A1.333 1.333 0 0 1 12 6v4c0 .667-.667 1.333-1.334 1.333H9.333M4 4.667H2.666A1.333 1.333 0 0 0 1.333 6v4c0 .667.667 1.333 1.333 1.333H4m10.666-4v1.334m-8-4v4m0 2.666v.007",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
