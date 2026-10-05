import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Send', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#send_svg__a)",
		children: jsx("path", {
			d: "M14.666 1.333 10 14.667l-2.667-6m7.333-7.334L1.333 6l6 2.667m7.333-7.334L7.333 8.667",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "send_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
