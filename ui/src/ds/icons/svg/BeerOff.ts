import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BeerOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#beer-off_svg__a)",
		children: jsx("path", {
			d: "M8.666 8.667V12m2.667-4.353V5.333m0 2H12a2 2 0 0 1 1.83 2.808M1.333 1.333l13.333 13.334M3.333 5.333v8a1.333 1.333 0 0 0 1.333 1.334H10a1.334 1.334 0 0 0 1.333-1.334v-2m-6.31-6.31c-.513.076-.92.31-1.357.31a1.667 1.667 0 0 1-1.178-2.845m3.33-.352c.386-.291.772-.803 1.515-.803 1.04 0 1.333 1 2 1S10.48 2 11 2a1.667 1.667 0 0 1 0 3.333c-.52 0-1-.333-1.667-.333a2.1 2.1 0 0 0-.561.08M6 9.733V12",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "beer-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
