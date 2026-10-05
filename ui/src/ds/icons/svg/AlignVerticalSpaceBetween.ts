import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('AlignVerticalSpaceBetween', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M1.333 14h13.333M1.333 2h13.333m-10 8h6.667c.736 0 1.333.597 1.333 1.333v1.334c0 .736-.597 1.333-1.333 1.333H4.666a1.333 1.333 0 0 1-1.333-1.333v-1.334c0-.736.597-1.333 1.333-1.333ZM6 2h4c.736 0 1.333.597 1.333 1.333v1.334C11.333 5.403 10.736 6 10 6H6a1.333 1.333 0 0 1-1.334-1.333V3.333C4.666 2.597 5.263 2 6 2Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
