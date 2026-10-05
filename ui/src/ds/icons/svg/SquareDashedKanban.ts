import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('SquareDashedKanban', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.333 4.667v4.666M8 4.667v2.666m2.667-2.666v6M3.333 2A1.333 1.333 0 0 0 2 3.333M6 2h.667m2.666 0H10m2.667 0A1.333 1.333 0 0 1 14 3.333M14 6v.667m0 2.666V10m0 2.667A1.334 1.334 0 0 1 12.667 14m-3.334 0H10m-4 0h.667m-3.334 0A1.334 1.334 0 0 1 2 12.667m0-3.334V10m0-4v.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
