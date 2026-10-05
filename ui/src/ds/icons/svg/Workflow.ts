import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Workflow', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4.667 7.333V10A1.333 1.333 0 0 0 6 11.333h2.667M3.333 2H6c.736 0 1.333.597 1.333 1.333V6c0 .736-.597 1.333-1.333 1.333H3.333A1.333 1.333 0 0 1 2 6V3.333C2 2.597 2.597 2 3.333 2ZM10 8.667h2.667C13.403 8.667 14 9.264 14 10v2.667c0 .736-.597 1.333-1.333 1.333H10a1.333 1.333 0 0 1-1.333-1.333V10c0-.736.597-1.333 1.333-1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
