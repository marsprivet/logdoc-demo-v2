import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Cake', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M13.333 14V8.667A1.334 1.334 0 0 0 12 7.333H4a1.333 1.333 0 0 0-1.334 1.334V14m0-3.333S3 10 4 10s1.666 1.333 2.666 1.333S8.333 10 9.333 10c1 0 1.667 1.333 2.667 1.333 1 0 1.333-.666 1.333-.666M1.333 14h13.333m-10-8.667v2m3.334-2v2m3.333-2v2M4.666 2.667h.007m3.327 0h.006m3.327 0h.007",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
