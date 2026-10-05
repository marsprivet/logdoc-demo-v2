import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('BriefcaseMedical', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 7.333V10m1.333-1.333H6.666m4-4.667V2.667a1.333 1.333 0 0 0-1.333-1.334H6.666a1.333 1.333 0 0 0-1.333 1.334V4M12 4v9.333M4 4v9.333M2.666 4h10.667c.736 0 1.333.597 1.333 1.333V12c0 .736-.597 1.333-1.333 1.333H2.666A1.333 1.333 0 0 1 1.333 12V5.333C1.333 4.597 1.93 4 2.666 4Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
