import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Vibrate', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m1.333 5.333 1.333 1.334L1.333 8l1.333 1.333-1.333 1.334m13.333-5.334-1.333 1.334L14.666 8l-1.333 1.333 1.333 1.334M6 3.333h4c.368 0 .666.299.666.667v8a.667.667 0 0 1-.666.667H6A.667.667 0 0 1 5.333 12V4c0-.368.298-.667.667-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
