import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BookDashed', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 11.333h1.334M8 14.667h1.334M8 1.333h1.334M12 14.667h.667a.666.666 0 0 0 .667-.667M12 1.333h.667a.667.667 0 0 1 .667.667v.667m0 7.333v1.333H12m1.334-6v2m-10.667 0V6m0 7v-3m0 3a1.667 1.667 0 0 0 1.667 1.667h1M2.667 13a1.667 1.667 0 0 1 1.667-1.667h1m-2.667-8V3a1.667 1.667 0 0 1 1.667-1.667h1",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
