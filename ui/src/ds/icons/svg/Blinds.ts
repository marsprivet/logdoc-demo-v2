import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Blinds', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 2h12m-.667 2.667h-8m8 2.666h-8m1.333 5.334h6.667m-8-2.667h8M2.666 2v9.333m0 0a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
