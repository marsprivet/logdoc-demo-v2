import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Smartphone', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 12h.006M4.666 1.333h6.667c.736 0 1.333.597 1.333 1.334v10.666c0 .737-.597 1.334-1.333 1.334H4.666a1.333 1.333 0 0 1-1.333-1.334V2.667c0-.737.597-1.334 1.333-1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
