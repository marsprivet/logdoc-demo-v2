import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Snail', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 8.667a4 4 0 1 0 8 0 2.667 2.667 0 1 0-5.333 0 1.333 1.333 0 0 0 2.666 0m-5.333 0a5.333 5.333 0 1 0 10.667 0m-10.667 0a5.333 5.333 0 1 1 10.667 0m0 0v-4a1.333 1.333 0 1 1 2.666 0v4c0 2.933-2.4 5.333-5.333 5.333h-8M12 2l.733 1.467M14.666 2l-.733 1.467",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
