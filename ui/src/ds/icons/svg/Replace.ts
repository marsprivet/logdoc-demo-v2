import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Replace', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#replace_svg__a)",
		children: jsx("path", {
			d: "M9.333 2.667c0-.734.6-1.334 1.333-1.334m2.667 0c.733 0 1.333.6 1.333 1.334m0 2.666c0 .734-.6 1.334-1.333 1.334m-2.667 0c-.733 0-1.333-.6-1.333-1.334M2 4.667l2 2m0 0 2-2m-2 2V3.333c0-1.133.866-2 2-2h.666m-4 8h2.667c.736 0 1.333.597 1.333 1.334v2.666c0 .737-.597 1.334-1.333 1.334H2.666a1.333 1.333 0 0 1-1.333-1.334v-2.666c0-.737.597-1.334 1.333-1.334Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "replace_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
