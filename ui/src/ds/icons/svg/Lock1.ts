import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Lock1', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M8 11.333A.667.667 0 1 0 8 10a.667.667 0 0 0 0 1.333Z",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "M11.63 6.667H4.37c-.573 0-1.037.597-1.037 1.333v5.333c0 .737.464 1.334 1.037 1.334h7.26c.572 0 1.036-.597 1.036-1.334V8c0-.736-.464-1.333-1.037-1.333ZM4.667 6.667v-2a3.333 3.333 0 0 1 6.667 0v2",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
