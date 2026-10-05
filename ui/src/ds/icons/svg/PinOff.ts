import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('PinOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#pin-off_svg__a)",
		children: jsx("path", {
			d: "M8 11.333v3.334m2-8.44v-1.56A.667.667 0 0 1 10.666 4a1.333 1.333 0 1 0 0-2.667H5.26m-3.927 0 13.333 13.334M6 6v1.173a1.333 1.333 0 0 1-.74 1.194l-1.187.6a1.333 1.333 0 0 0-.74 1.193v.507a.667.667 0 0 0 .667.666h7.333",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "pin-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
