import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SpellCheck2', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m4 10.667 4-8 4 8M5.334 8h5.333m-8 6c.733 0 .733-.667 1.533-.667.8 0 .734.667 1.534.667.733 0 .733-.667 1.533-.667C8 13.333 8 14 8.8 14c.734 0 .734-.667 1.534-.667.733 0 .733.667 1.533.667.733 0 .733-.667 1.533-.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
