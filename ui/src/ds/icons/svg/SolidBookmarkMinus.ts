import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SolidBookmarkMinus', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M12.666 14 8 11.333 3.333 14V3.333A1.333 1.333 0 0 1 4.666 2h6.667a1.333 1.333 0 0 1 1.333 1.333V14Z",
		fill: "#fff",
		stroke: "#fff",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "M10 6.667H6",
		stroke: "#121317",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
