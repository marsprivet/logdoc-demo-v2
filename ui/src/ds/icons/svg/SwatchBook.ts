import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SwatchBook', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4.667 14a2.667 2.667 0 0 0 2.666-2.667v-8A1.333 1.333 0 0 0 6 2H3.333A1.333 1.333 0 0 0 2 3.333v8A2.667 2.667 0 0 0 4.667 14Zm0 0h8A1.334 1.334 0 0 0 14 12.667V10a1.334 1.334 0 0 0-1.333-1.333h-1.534m-6.466 2.666h.006m2.66-6L8.867 3.8a1.6 1.6 0 0 1 2.269.003L12.4 5.067a1.6 1.6 0 0 1 .017 2.289L6.6 13.2",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
