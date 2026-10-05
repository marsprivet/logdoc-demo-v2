import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ConciergeBell', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.666 10.667A1.334 1.334 0 0 0 1.333 12v.667a.667.667 0 0 0 .667.666h12a.667.667 0 0 0 .666-.666V12a1.333 1.333 0 0 0-1.333-1.333m-10.667 0h10.667m-10.667 0A5.333 5.333 0 0 1 8 5.333m5.333 5.334A5.333 5.333 0 0 0 8 5.333m0 0V2.667m-1.334 0h2.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
