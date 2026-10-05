import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('TestTubes', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6 1.333V13a1.667 1.667 0 0 1-3.333 0V1.333m10.666 0V13A1.667 1.667 0 0 1 10 13V1.333m-8 0h4.667m2.666 0H14m-8 9.334H2.667m10.666 0H10",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
