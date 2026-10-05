import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('MilkOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#milk-off_svg__a)",
		children: jsx("path", {
			d: "M5.333 1.333h5.333M6 1.333v.896m4-.896v1.86c0 .526.156 1.04.448 1.479l.437.656c.292.438.448.953.448 1.48v.754M5.2 5.2l-.086.128a2.667 2.667 0 0 0-.448 1.48v6.525A1.333 1.333 0 0 0 6 14.667h4a1.334 1.334 0 0 0 1.333-1.334v-2M4.666 10A4.313 4.313 0 0 1 8 10a4.314 4.314 0 0 0 2.29.29M1.333 1.333l13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "milk-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
