import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('LoaderPinwheel', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#loader-pinwheel_svg__a)",
		children: jsx("path", {
			d: "M1.333 8a3.3 3.3 0 0 1 3.333-3.333A3.3 3.3 0 0 1 8 8M1.333 8a6.667 6.667 0 0 0 13.333 0M1.333 8a6.667 6.667 0 1 1 13.333 0M8 8a3.3 3.3 0 0 0 3.333 3.333A3.3 3.3 0 0 0 14.666 8M8 8a3.345 3.345 0 1 0-3.334 5.8M8 8a3.316 3.316 0 1 0 3.333-5.733M4.666 2.2A3.316 3.316 0 1 1 8 7.933a3.316 3.316 0 0 0 3.333 5.734",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "loader-pinwheel_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
