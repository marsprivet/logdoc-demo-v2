import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('SendToBack', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#send-to-back_svg__a)",
		children: jsx("path", {
			d: "M4.666 9.333V10A1.333 1.333 0 0 0 6 11.333h.666m2.667-6.666H10A1.333 1.333 0 0 1 11.333 6v.667m-.667 2.666h2.667c.736 0 1.333.597 1.333 1.334v2.666c0 .737-.597 1.334-1.333 1.334h-2.667a1.333 1.333 0 0 1-1.333-1.334v-2.666c0-.737.597-1.334 1.333-1.334Zm-8-8h2.667c.736 0 1.333.597 1.333 1.334v2.666c0 .737-.597 1.334-1.333 1.334H2.666a1.333 1.333 0 0 1-1.333-1.334V2.667c0-.737.597-1.334 1.333-1.334Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "send-to-back_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
