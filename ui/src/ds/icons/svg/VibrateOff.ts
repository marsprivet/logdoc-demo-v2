import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('VibrateOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#vibrate-off_svg__a)",
		children: jsx("path", {
			d: "m1.333 5.333 1.333 1.334L1.333 8l1.333 1.333-1.333 1.334m13.333-5.334-1.333 1.334L14.666 8l-1.333 1.333 1.333 1.334M5.333 5.333V12c0 .367.3.667.667.667h4c.366 0 .666-.3.666-.667v-1.333m0-3.774V4c0-.367-.3-.667-.666-.667H7.106m-5.773-2 13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "vibrate-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
