import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('LassoSelect', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#lasso-select_svg__a)",
		children: jsx("path", {
			d: "M4.666 14.667A3.333 3.333 0 0 1 3.333 12m0 0a1.334 1.334 0 1 0 0-2.667 1.334 1.334 0 0 0 0 2.667Zm1.333-.713c.64.286 1.307.493 1.994.606m-4.434-2.56a4.533 4.533 0 0 1-.893-2.666C1.333 3.72 4.32 1.333 8 1.333c3.68 0 6.666 2.387 6.666 5.334A4.79 4.79 0 0 1 14.446 8m-4.893 6.667h-.06a.233.233 0 0 1-.16-.214V7.787a.227.227 0 0 1 .22-.227c.053 0 .1.02.14.053l4.893 4a.22.22 0 0 1-.01.355.221.221 0 0 1-.13.039h-2.993L9.74 14.573a.233.233 0 0 1-.187.094Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "lasso-select_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
