import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('TabletSmartphone', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.333 2.667a1.333 1.333 0 0 1 1.334-1.334h8A1.333 1.333 0 0 1 14 2.667v10.666a1.333 1.333 0 0 1-1.333 1.334h-1.6M5.333 12h.007M3.333 5.333h4c.737 0 1.334.597 1.334 1.334v6.666c0 .737-.597 1.334-1.334 1.334h-4A1.333 1.333 0 0 1 2 13.333V6.667c0-.737.597-1.334 1.333-1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
