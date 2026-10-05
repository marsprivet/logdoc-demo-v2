import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('R2D2', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#r2-d2_svg__a)",
		children: [
			jsx("rect", {
				x: 4,
				y: 6.667,
				width: 8,
				height: 6.667,
				rx: 1.333,
				stroke: "inherit",
				strokeWidth: 1.333
			}),
			jsx("path", {
				d: "M4 5.333a4 4 0 0 1 8 0v1.129a.205.205 0 0 1-.205.205h-7.59A.205.205 0 0 1 4 6.462V5.333Z",
				stroke: "inherit",
				strokeWidth: 1.333
			}),
			jsx("path", {
				d: "M6.667 4.667v2M8 11.333v2M2 8.667v6M14 8.667v6M7 8.667h2M1 14.667h2M13 14.667h2",
				stroke: "inherit",
				strokeWidth: 1.333,
				strokeLinecap: "round"
			}),
			jsx("rect", {
				x: 8.333,
				y: 4,
				width: 1.333,
				height: 1.333,
				rx: .667,
				fill: "#fff"
			})
		]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "r2-d2_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
