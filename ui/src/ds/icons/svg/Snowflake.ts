import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Snowflake', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#snowflake_svg__a)",
		children: jsx("path", {
			d: "M1.333 8h13.333M8 1.333v13.334m5.333-4L10.666 8l2.667-2.667m-10.667 0L5.333 8l-2.667 2.667m8-8L8 5.333 5.333 2.667m0 10.666L8 10.667l2.666 2.666",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "snowflake_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
