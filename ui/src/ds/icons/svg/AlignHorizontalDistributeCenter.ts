import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('AlignHorizontalDistributeCenter', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M11.334 14.667v-3.334m0-6.666V1.333M4.667 14.667v-2m0-9.334v-2m-.667 2h1.334c.736 0 1.333.597 1.333 1.334v6.666c0 .737-.597 1.334-1.333 1.334H4a1.333 1.333 0 0 1-1.333-1.334V4.667c0-.737.597-1.334 1.333-1.334Zm6.667 1.334H12c.737 0 1.334.597 1.334 1.333v4c0 .736-.597 1.333-1.334 1.333h-1.333A1.333 1.333 0 0 1 9.334 10V6c0-.736.597-1.333 1.333-1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
