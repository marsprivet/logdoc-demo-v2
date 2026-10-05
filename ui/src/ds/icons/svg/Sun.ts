import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Sun', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#sun_svg__a)",
		children: jsx("path", {
			d: "M8 1.333v1.334m0 10.666v1.334M3.286 3.287l.94.94m7.547 7.546.94.94M1.333 8h1.333m10.667 0h1.333m-10.44 3.773-.94.94m9.427-9.426-.94.94M10.666 8a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "sun_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
