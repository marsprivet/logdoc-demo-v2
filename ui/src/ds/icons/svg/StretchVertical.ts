import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('StretchVertical', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.334 1.333H4c-.736 0-1.333.597-1.333 1.334v10.666c0 .737.597 1.334 1.333 1.334h1.334c.736 0 1.333-.597 1.333-1.334V2.667c0-.737-.597-1.334-1.333-1.334ZM12 1.333h-1.333c-.736 0-1.333.597-1.333 1.334v10.666c0 .737.597 1.334 1.333 1.334H12c.737 0 1.334-.597 1.334-1.334V2.667c0-.737-.597-1.334-1.334-1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
