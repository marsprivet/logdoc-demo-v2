import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('WifiOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#wifi-off_svg__a)",
		children: jsx("path", {
			d: "M8 13.333h.006m-2.34-2.38a3.333 3.333 0 0 1 4.667 0m-7-2.38A6.667 6.667 0 0 1 6.78 6.779m5.886 1.794a6.664 6.664 0 0 0-1.338-1.016M1.333 5.88a10 10 0 0 1 2.785-1.762M14.666 5.88a10 10 0 0 0-7.525-2.51M1.333 1.334l13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "wifi-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
