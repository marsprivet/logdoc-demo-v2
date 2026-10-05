import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ReceiptEuro', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.334 8h3.333m2-1.667a2.667 2.667 0 1 0 0 3.467m-8-8.467v13.334L4 14l1.334.667L6.667 14 8 14.667 9.334 14l1.333.667L12 14l1.334.667V1.333L12 2l-1.333-.667L9.334 2 8 1.333 6.667 2l-1.333-.667L4 2l-1.333-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
