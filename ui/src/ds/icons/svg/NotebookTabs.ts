import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('NotebookTabs', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 4H4M1.333 6.667H4M1.333 9.333H4M1.333 12H4m6-10.667v13.334m0-10h3.333M10 8h3.333M10 11.333h3.333M4 1.333h8c.736 0 1.333.597 1.333 1.334v10.666c0 .737-.597 1.334-1.333 1.334H4a1.333 1.333 0 0 1-1.334-1.334V2.667c0-.737.597-1.334 1.334-1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
