import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FlipVertical', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14 5.333v-2A1.333 1.333 0 0 0 12.666 2H3.333A1.333 1.333 0 0 0 2 3.333v2m12 5.334v2A1.333 1.333 0 0 1 12.666 14H3.333A1.334 1.334 0 0 1 2 12.667v-2M2.666 8H1.333m5.333 0H5.333m5.333 0H9.333m5.333 0h-1.333",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
