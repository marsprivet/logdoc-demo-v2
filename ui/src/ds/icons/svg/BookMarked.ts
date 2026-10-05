import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BookMarked', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.667 1.333v5.334l2-2 2 2V1.333M2.667 13V3a1.667 1.667 0 0 1 1.667-1.667h8.333a.667.667 0 0 1 .667.667v12a.667.667 0 0 1-.667.667H4.334A1.667 1.667 0 0 1 2.667 13Zm0 0a1.667 1.667 0 0 1 1.667-1.667h9",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
