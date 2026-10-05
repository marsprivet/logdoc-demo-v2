import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SolidFlame', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.666 9.667A1.667 1.667 0 0 0 7.333 8c0-.92-.333-1.333-.667-2C5.952 4.571 6.517 3.297 8 2c.333 1.667 1.333 3.267 2.666 4.333 1.334 1.067 2 2.334 2 3.667a4.667 4.667 0 0 1-9.333 0c0-.769.289-1.53.667-2a1.667 1.667 0 0 0 1.666 1.667Z",
		fill: "#fff",
		stroke: "#fff",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
