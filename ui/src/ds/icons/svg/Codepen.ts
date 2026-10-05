import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Codepen', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#codepen_svg__a)",
		children: jsx("path", {
			d: "m8 1.333 6.666 4.334M8 1.333 1.333 5.667M8 1.333v4.334m6.666 0v4.666m0-4.666L8 10.333m6.666 0L8 14.667m6.666-4.334L8 5.667m0 9-6.667-4.334M8 14.667v-4.334m-6.667 0V5.667m0 4.666L8 5.667m-6.667 0L8 10.333",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "codepen_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
