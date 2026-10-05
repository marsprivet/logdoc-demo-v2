import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Theater', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#theater_svg__a)",
		children: jsx("path", {
			d: "M1.333 6.667s2-2 2-5.334m-2 5.334c2.933 0 5.333-2.4 5.333-5.334M1.333 6.667S2.666 8 2.666 10m12-3.333s-2-2-2-5.334m2 5.334c-2.933 0-5.333-2.4-5.333-5.334m5.333 5.334S13.333 8 13.333 10m-8 0h5.333m-9.333 4.667V14a1.333 1.333 0 0 1 1.333-1.333h2.667A1.333 1.333 0 0 1 6.666 14v.667m2.667 0V14a1.333 1.333 0 0 1 1.333-1.333h2.667A1.333 1.333 0 0 1 14.666 14v.667",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "theater_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
