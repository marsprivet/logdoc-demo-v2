import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Milk', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.334 1.333h5.333M6 1.333v1.86c0 .526-.156 1.04-.448 1.479l-.437.656a2.667 2.667 0 0 0-.448 1.48v6.525A1.333 1.333 0 0 0 6 14.667h4a1.333 1.333 0 0 0 1.334-1.334V6.807c0-.526-.156-1.04-.448-1.479l-.438-.656A2.667 2.667 0 0 1 10 3.192V1.333M4.667 10A4.315 4.315 0 0 1 8 10a4.314 4.314 0 0 0 3.334 0",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
