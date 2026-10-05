import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Microscope', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 12h5.333M2 14.667h12m-4.667 0a4.667 4.667 0 0 0 0-9.334h-.666M6 9.333h1.333M8 4V2a.667.667 0 0 0-.667-.667H6A.667.667 0 0 0 5.333 2v2M6 8a1.333 1.333 0 0 1-1.333-1.333V4h4v2.667A1.333 1.333 0 0 1 7.333 8H6Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
