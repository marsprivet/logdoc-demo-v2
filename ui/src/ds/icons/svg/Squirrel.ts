import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Squirrel', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#squirrel_svg__a)",
		children: jsx("path", {
			d: "M10.157 14.667a2 2 0 0 0-1.467-3.334m1.976 2a2 2 0 0 1 2-2h.667A1.333 1.333 0 0 0 14.666 10V8.667A2.667 2.667 0 0 0 12 6V2.667m0 6h.006M12 4a2.667 2.667 0 0 0-2.667 2.667 4.667 4.667 0 0 0-4.667 4.666c0-3.333 2.667-3.333 2.667-7a3 3 0 0 0-6 0 1.667 1.667 0 1 0 3.333 0c0 2.334-2.666 3-2.666 7a3.301 3.301 0 0 0 3.333 3.334H12",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "squirrel_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
