import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('MessageCircleOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#message-circle-off_svg__a)",
		children: jsx("path", {
			d: "M13.666 9.933a6 6 0 0 0-7.6-7.6m-4.733-1 13.333 13.334M3.733 3.733c-1.733 1.8-2.267 4.6-1.067 6.934l-1.333 4 4-1.334c2.267 1.2 5.067.734 6.867-1.133",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "message-circle-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
