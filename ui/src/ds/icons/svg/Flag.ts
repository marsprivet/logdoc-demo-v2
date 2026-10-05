import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Flag', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.667 10s.667-.667 2.667-.667c2 0 3.333 1.334 5.333 1.334S13.334 10 13.334 10V2s-.667.667-2.667.667c-2 0-3.333-1.334-5.333-1.334S2.667 2 2.667 2v8Zm0 0v4.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
