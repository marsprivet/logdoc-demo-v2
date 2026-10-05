import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('MapPinOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#map-pin-off_svg__a)",
		children: jsx("path", {
			d: "M8.5 4.727a2 2 0 0 1 1.44 1.44m1.441 5.214c-1.09 1.447-2.351 2.608-2.98 3.152a.667.667 0 0 1-.802 0c-1.24-1.071-4.933-4.538-4.933-7.866 0-1.09.333-2.152.955-3.046M1.333 1.333l13.333 13.334M5.65 1.879a5.333 5.333 0 0 1 7.683 4.788c0 .788-.207 1.584-.54 2.355M6.086 6.087A2 2 0 0 0 8.58 8.58",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "map-pin-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
