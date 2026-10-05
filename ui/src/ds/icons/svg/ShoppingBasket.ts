import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ShoppingBasket', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "m10 7.333-.667 6m3.333-6L10 2.667M1.333 7.333h13.333m-12.333 0L3.4 12.267a1.333 1.333 0 0 0 1.333 1.066h6.533a1.334 1.334 0 0 0 1.334-1.066l1.133-4.934M3 10.333h10m-9.667-3L6 2.667m0 4.666.666 6",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
