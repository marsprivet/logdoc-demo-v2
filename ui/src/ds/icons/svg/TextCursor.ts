import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('TextCursor', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.334 14.667h-.667A2.667 2.667 0 0 1 8 12m0 0V4m0 8a2.667 2.667 0 0 1-2.666 2.667h-.667M8 12v-.667M8 4a2.667 2.667 0 0 1 2.667-2.667h.667M8 4a2.667 2.667 0 0 0-2.666-2.667h-.667M8 4v.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
