import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FlameGraph', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.333 2C6 4 7 4.333 7.667 5a3.333 3.333 0 0 1 1 2.333 3.333 3.333 0 0 1-6.667 0c0-.2 0-.4.067-.6a1.333 1.333 0 1 0 2.2-1.333c-1.6-1.733.4-3.4 1.066-3.4ZM14 2.667H8.667M13.333 9.667h-2M13.333 6.333h-2M14 13.333H2.667",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
