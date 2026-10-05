import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BoomBox', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.666 6V3.333A1.333 1.333 0 0 1 4 2h8a1.333 1.333 0 0 1 1.333 1.333V6M2.666 6h10.667M2.666 6c-.736 0-1.333.597-1.333 1.333v5.334c0 .736.597 1.333 1.333 1.333h10.667c.736 0 1.333-.597 1.333-1.333V7.333c0-.736-.597-1.333-1.333-1.333m-8-.667V6M8 5.333V6m2.666-.667V6m-4 4A1.333 1.333 0 1 1 4 10a1.333 1.333 0 0 1 2.666 0ZM12 10a1.333 1.333 0 1 1-2.667 0A1.333 1.333 0 0 1 12 10Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
