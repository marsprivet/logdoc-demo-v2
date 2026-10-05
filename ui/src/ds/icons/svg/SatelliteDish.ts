import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('SatelliteDish', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m6 10 2-2m3.334.667a4 4 0 0 0-4-4m6.667 4A6.667 6.667 0 0 0 7.334 2M2.667 6.667a4.873 4.873 0 0 0 6.667 6.666L2.667 6.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
