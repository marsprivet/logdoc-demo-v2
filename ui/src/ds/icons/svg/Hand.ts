import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Hand', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#hand_svg__a)",
		children: jsx("path", {
			d: "M12 7.333V4a1.333 1.333 0 1 0-2.667 0m0 2.667v-4a1.333 1.333 0 0 0-2.667 0V4m0 0v3m0-3A1.333 1.333 0 0 0 4 4v5.333m8-4a1.333 1.333 0 0 1 2.666 0v4a5.333 5.333 0 0 1-5.333 5.334H8c-1.867 0-3-.574-3.994-1.56l-2.4-2.4a1.333 1.333 0 0 1 1.887-1.88L4.666 10",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "hand_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
