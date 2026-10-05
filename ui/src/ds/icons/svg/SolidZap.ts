import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SolidZap', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8.667 1.333 2 9.333h6l-.667 5.334 6.667-8H8l.667-5.334Z",
		fill: "#fff",
		stroke: "#fff",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
