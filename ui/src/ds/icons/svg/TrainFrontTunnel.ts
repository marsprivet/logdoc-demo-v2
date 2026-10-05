import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('TrainFrontTunnel', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#train-front-tunnel_svg__a)",
		children: jsx("path", {
			d: "M1.333 14.667V8a6.667 6.667 0 0 1 13.333 0v6.667M10 4.533v.934c0 .495-.211.97-.586 1.32-.375.35-.884.546-1.414.546-.53 0-1.04-.196-1.415-.546A1.806 1.806 0 0 1 6 5.467v-.934M6.666 10h.007m2.66 0h.007M6 12.667l-1.334 2m5.334-2 1.333 2m-4.667-2A2.667 2.667 0 0 1 4 10V8a4 4 0 0 1 8 0v2a2.667 2.667 0 0 1-2.667 2.667H6.666Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "train-front-tunnel_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
