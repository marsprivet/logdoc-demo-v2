import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Skull', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M6 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM10 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM5.334 13.333v1.334h5.333v-1.334M8.334 11.333 8 10.667l-.333.666h.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "M10.667 13.333a1.333 1.333 0 0 0 1.04-2.166 5.333 5.333 0 1 0-7.413 0 1.333 1.333 0 0 0 1.04 2.166",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
