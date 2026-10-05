import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Armchair', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12.667 6V4a1.333 1.333 0 0 0-1.334-1.333H4.667A1.333 1.333 0 0 0 3.333 4v2m9.334 0A1.333 1.333 0 0 1 14 7.333v3.334A1.333 1.333 0 0 1 12.667 12m0-6a1.333 1.333 0 0 0-1.334 1.333v1a.333.333 0 0 1-.333.334H5a.333.333 0 0 1-.333-.334v-1A1.333 1.333 0 0 0 3.333 6m0 0A1.333 1.333 0 0 0 2 7.333v3.334A1.333 1.333 0 0 0 3.333 12m0 0h9.334m-9.334 0v1.333M12.667 12v1.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
