import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FileMusic', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10.667 10.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Zm0 0V6l-5.333.867V12m0 0a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM2.667 8.267v-5.6A1.333 1.333 0 0 1 4 1.333h5.667L13.334 5v8.333A1.333 1.333 0 0 1 12 14.667H7",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
