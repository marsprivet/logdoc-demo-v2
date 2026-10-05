import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Plane', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m11.867 12.8-1.2-5.467L13 5c1-1 1.333-2.333 1-3-.667-.333-2 0-3 1L8.667 5.333 3.2 4.133c-.333-.066-.6.067-.733.334l-.2.333c-.134.333-.067.667.2.867L6 8l-1.333 2h-2L2 10.667 4 12l1.333 2L6 13.333v-2L8 10l2.333 3.533c.2.267.534.334.867.2l.333-.133c.267-.2.4-.467.334-.8Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
