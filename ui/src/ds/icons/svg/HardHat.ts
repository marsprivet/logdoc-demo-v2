import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('HardHat', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.666 6.667V3.333a.667.667 0 0 1 .667-.666h1.333a.667.667 0 0 1 .667.666v3.334M2.666 10V8a4 4 0 0 1 4-4m2.667 0a4 4 0 0 1 4 4v2m-12 2a.667.667 0 0 0 .667.667h12a.667.667 0 0 0 .666-.667v-1.333A.667.667 0 0 0 14 10H2a.667.667 0 0 0-.667.667V12Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
