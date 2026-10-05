import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Shovel', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#shovel_svg__a)",
		children: jsx("path", {
			d: "m6.333 9.667 4.333-4.334m-9.333 9.334v-3.334L4.666 8 8 11.333l-3.334 3.334H1.333Zm10-13.334 3.333 3.334-.333.333A2.353 2.353 0 0 1 11 5a2.355 2.355 0 0 1 0-3.333l.333-.334Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "shovel_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
