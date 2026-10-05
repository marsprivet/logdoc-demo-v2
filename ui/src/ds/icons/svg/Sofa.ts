import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Sofa', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M13.333 6V4A1.334 1.334 0 0 0 12 2.667H4A1.333 1.333 0 0 0 2.666 4v2m10.667 0a1.333 1.333 0 0 1 1.333 1.333v3.334A1.333 1.333 0 0 1 13.333 12m0-6A1.333 1.333 0 0 0 12 7.333v1a.333.333 0 0 1-.334.334H4.333A.333.333 0 0 1 4 8.333v-1A1.333 1.333 0 0 0 2.666 6m0 0a1.333 1.333 0 0 0-1.333 1.333v3.334A1.333 1.333 0 0 0 2.666 12m0 0h10.667M2.666 12v1.333M13.333 12v1.333M8 2.667v6",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
