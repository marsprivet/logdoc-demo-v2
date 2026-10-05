import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SquareScissors', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#square-scissors_svg__a)",
		children: jsx("path", {
			d: "M6.276 6.276 8 8m1.866 1.867L12 12m0-8L6.276 9.724m-3.61-8.39h10.667c.736 0 1.333.596 1.333 1.333v10.666c0 .737-.597 1.334-1.333 1.334H2.666a1.333 1.333 0 0 1-1.333-1.334V2.667c0-.737.597-1.334 1.333-1.334Zm4 4a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Zm0 5.333a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "square-scissors_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
