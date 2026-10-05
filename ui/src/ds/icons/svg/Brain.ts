import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Brain', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#brain_svg__a)",
		children: jsx("path", {
			d: "M8 3.333a2 2 0 1 0-3.998.084M8 3.333V12m0-8.667a2 2 0 1 1 3.998.084m-7.996 0a2.667 2.667 0 0 0-1.684 3.846m1.684-3.846a2 2 0 0 0 .266.916m-1.95 2.93a2.667 2.667 0 0 0 .37 4.392m-.37-4.392c.122-.099.253-.187.39-.263m-.02 4.655A2.667 2.667 0 1 0 8 12m-5.311-.345c.4.226.852.345 1.311.345m4 0a2.667 2.667 0 1 0 5.312-.345m-1.314-8.238a2.667 2.667 0 0 1 1.684 3.846m-1.684-3.846a2 2 0 0 1-.265.916m1.95 2.93a2.667 2.667 0 0 1-.371 4.392m.37-4.392a2.661 2.661 0 0 0-.39-.263m.02 4.655c-.4.226-.852.345-1.312.345m-2-3.333A3 3 0 0 1 8 6a3 3 0 0 1-2 2.667",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "brain_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
