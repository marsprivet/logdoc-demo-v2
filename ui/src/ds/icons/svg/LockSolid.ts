import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('LockSolid', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M11.63 6.667H4.37c-.573 0-1.037.597-1.037 1.333v4.667c0 .736.464 1.333 1.037 1.333h7.26c.572 0 1.036-.597 1.036-1.333V8c0-.736-.464-1.333-1.037-1.333Z",
		fill: "#fff",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "M5.333 6.667V4.593c0-.688.281-1.347.781-1.834C6.614 2.273 7.292 2 8 2c.707 0 1.385.273 1.885.76.5.486.781 1.145.781 1.833v2.074",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
