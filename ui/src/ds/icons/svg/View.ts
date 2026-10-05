import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('View', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14 11.333v1.334A1.334 1.334 0 0 1 12.667 14H3.333A1.334 1.334 0 0 1 2 12.667v-1.334m12-6.666V3.333A1.334 1.334 0 0 0 12.667 2H3.333A1.333 1.333 0 0 0 2 3.333v1.334M8.667 8a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Zm3.962.22a.667.667 0 0 0 0-.44 5 5 0 0 0-9.258 0 .667.667 0 0 0 0 .44 5 5 0 0 0 9.258 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
