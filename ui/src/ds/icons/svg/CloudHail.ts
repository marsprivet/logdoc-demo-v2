import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('CloudHail', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.667 9.933a4.667 4.667 0 1 1 7.806-4.6h1.194a3 3 0 0 1 1.666 5.495m-2.666-1.495v1.334M5.333 9.333v1.334m5.334 2.666h.006m-5.34 0h.007M8 10.667V12m0 2.667h.007",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
