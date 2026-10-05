import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Disc21', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#disc-2-1_svg__a)",
		children: [
			jsx("path", {
				d: "M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z",
				stroke: "inherit",
				strokeWidth: 1.333,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			jsx("path", {
				d: "M8 10.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334ZM8 8h.007",
				stroke: "inherit",
				strokeWidth: 1.333,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			jsx("mask", {
				id: "disc-2-1_svg__b",
				fill: "#fff",
				children: jsx("rect", {
					x: 8,
					y: 6.333,
					width: 5.333,
					height: 3.333,
					rx: .667
				})
			}),
			jsx("rect", {
				x: 8,
				y: 6.333,
				width: 5.333,
				height: 3.333,
				rx: .667,
				stroke: "inherit",
				strokeWidth: 2.667,
				mask: "url(#disc-2-1_svg__b)"
			}),
			jsx("path", {
				d: "M11 9.333v.922c0 .463.24.893.634 1.135l3.7 2.277",
				stroke: "inherit",
				strokeWidth: 1.333,
				strokeLinecap: "round"
			})
		]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "disc-2-1_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
