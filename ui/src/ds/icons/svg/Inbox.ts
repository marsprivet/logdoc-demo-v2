import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Inbox', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14.666 8h-4l-1.333 2H6.666L5.333 8h-4m13.333 0v4a1.333 1.333 0 0 1-1.333 1.333H2.666A1.334 1.334 0 0 1 1.333 12V8m13.333 0-2.3-4.593a1.333 1.333 0 0 0-1.193-.74H4.826a1.333 1.333 0 0 0-1.193.74L1.333 8",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
