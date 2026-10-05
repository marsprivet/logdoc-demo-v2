import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('HardDrive', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M14.666 8H1.333m13.333 0v4a1.333 1.333 0 0 1-1.333 1.333H2.666A1.333 1.333 0 0 1 1.333 12V8m13.333 0-2.3-4.593a1.333 1.333 0 0 0-1.193-.74H4.826a1.333 1.333 0 0 0-1.193.74L1.333 8M4 10.667h.006m2.66 0h.007",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
