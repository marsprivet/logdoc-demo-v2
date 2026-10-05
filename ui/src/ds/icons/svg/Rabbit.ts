import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Rabbit', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8.666 10.667A2 2 0 0 1 10.16 14M12 8h.006M12 14H6.666A2.667 2.667 0 0 1 4 11.333a4.667 4.667 0 0 1 4.666-4.666H8.8l-2.4-2.4A1.32 1.32 0 1 1 8.266 2.4l2.267 2.267h.133m0 0c2.2 0 4 1.8 4 4v.666a1.333 1.333 0 0 1-1.333 1.334h-.667a2 2 0 0 0-2 2m0-8v-2a1.333 1.333 0 1 1 2.667 0v3.026M5.074 8.35a2 2 0 1 0-1.066 2.867",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
