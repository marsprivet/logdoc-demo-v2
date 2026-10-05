import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SolidPauseOctagon', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#solid-pause-octagon_svg__a)",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [jsx("path", {
			d: "M5.142 1.333h5.715l3.81 3.81v5.714l-3.81 3.81H5.142l-3.809-3.81V5.143l3.81-3.81Z",
			fill: "#fff",
			stroke: "#fff"
		}), jsx("path", {
			d: "M6.667 10V6M9.333 10V6",
			stroke: "#121317"
		})]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "solid-pause-octagon_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
