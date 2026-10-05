import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Lamp', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 8v4M5.334 1.333h5.333L13.334 8H2.667l2.667-6.667Zm0 13.334v-1.334c0-.733.6-1.333 1.333-1.333h2.667a1.334 1.334 0 0 1 1.333 1.333v1.334H5.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
