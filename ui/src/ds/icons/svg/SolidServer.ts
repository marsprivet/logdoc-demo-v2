import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('SolidServer', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#solid-server_svg__a)",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [jsx("path", {
			d: "M13.333 1.333H2.666c-.736 0-1.333.597-1.333 1.334v2.666c0 .737.597 1.334 1.333 1.334h10.667c.736 0 1.333-.597 1.333-1.334V2.667c0-.737-.597-1.334-1.333-1.334ZM13.333 9.333H2.666c-.736 0-1.333.597-1.333 1.334v2.666c0 .737.597 1.334 1.333 1.334h10.667c.736 0 1.333-.597 1.333-1.334v-2.666c0-.737-.597-1.334-1.333-1.334Z",
			fill: "#fff",
			stroke: "#fff"
		}), jsx("path", {
			d: "M4 4h.007M4 12h.007",
			stroke: "#0B0C0E"
		})]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "solid-server_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
