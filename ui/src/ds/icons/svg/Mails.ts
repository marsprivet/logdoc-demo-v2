import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Mails', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m14.666 4.667-4.733 2.52c-.38.2-.82.2-1.2 0L4 4.667m-2.667.666v7.334c0 .733.6 1.333 1.333 1.333H12M5.333 2.667h8c.736 0 1.333.597 1.333 1.333v6c0 .736-.597 1.333-1.333 1.333h-8A1.333 1.333 0 0 1 4 10V4c0-.736.597-1.333 1.333-1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
