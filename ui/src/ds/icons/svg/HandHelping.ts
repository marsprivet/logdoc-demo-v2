import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('HandHelping', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M7.333 8h1.333a1.333 1.333 0 0 0 0-2.667h-2c-.4 0-.733.134-.933.4L2 9.333M4.666 12l1.067-.933c.2-.267.533-.4.933-.4h2.667c.733 0 1.4-.267 1.867-.8l3.066-2.934a1.334 1.334 0 1 0-1.833-1.94l-2.8 2.6m-8.3 1.074 4 4",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
